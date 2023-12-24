---
title: Monte Carlo Tree Search
date-created: Dec 23, 2023
date-updated: Dec 24, 2023
---

*Note: I'm pretty new to RL, so please let me know if there's anything incorrect here! Also still planning on adding images and cleaning up a bunch of my explanations*

Recently been very enamored by MCTS since at it's core, it is a prime example of the [Bitter Lesson](http://www.incompleteideas.net/IncIdeas/BitterLesson.html) from [AI](ai). In broad strokes, MCTS is a way to figure out how to play games optimally *without* any notion of what is good. Traditionally in something like a [minimax](https://en.wikipedia.org/wiki/Minimax), you have to build in human heuristics of what's good in order to limit your search space, but MCTS is pure search. How "good" a position is, is just what percentage of the time you win from a given state. But how do you estimate that with no knowledge of the game? Once you get to a state: you simply just play random moves until you get to end. Do this enough times, and your estimation of a state will approach truth.

> This isn't quite how [AlphaZero](https://en.wikipedia.org/wiki/AlphaZero) works since it replaces the rollouts with neural network evaluations, but this also isn't a built in human heuristic. It's still pure **search** and **learning**.

## The algorithm

MCTS proceeds in four steps: selection, expansion, rollout, backpropogation.

In *selection*, you recursively select a state to go to until you've hit a leaf node. After that, you *expand* out all possible states that you can reach. Since we don't have any heuristics for how best to play the game (at least in Vanilla MCTS), we now *rollout* from that position which means to play random moves until one side wins. After you get a result of who won, you can *backpropagate* that "reward" through each node.

The general algorithm will look something like this:

```py
def iter(self, node):
    """Play out one game from root node"""
    path = self._select(node)
    leaf = path[-1]
    self._expand(leaf)
    reward = self._rollout(leaf)
    self._backpropogate(path, reward)
```

But now let's break it up into parts.

### Selection

```py
def _select(node):
    """Returns a path of nodes to reach a leaf node"""
    path = []
    while True:
        path.append(node)
        if node not in self.children or node.is_terminal:
            return path     # This means we haven't explored this node or it's the end
        
        unexplored = self.children[node] - self.children.keys()
        # If there are unexplored children states, go to them!
        if unexplored:
            n = unexplored.pop()
            path.append(n)
            return path
        
        # If all you're children states have been explored, then choose one "optimally"
        node = self._uct_select(node)
```

As you're building the tree, there's this tension between exploration and exploitation. Do you want to go explore the states that haven't been visited, or do you want to go further in the "best" states? Upper Confidence Bound for Trees (UCT) is one way to try and balance those.

```py
def _uct_select(self, node):
    log_N = math.log(self.N[node])

    def uct(c):
        return self.Q[c] / self.N[c] 
             + self.exploration_weight * math.sqrt(
                log_N / self.N[c]
             )

    return max(self.children[node], key=uct)
```

> TODO: Still have more work to do on this section and need to show math

The general algorithm is [TODO] where the first term (TODO) represents how "good" a state is and the second term represents how uncertain we are. Intuitively, the more reward you get from a state, the better it is. On the exploration side, we can see how unexplored a state is by the number of times we've been to the parent state vs. the child state. The reason there's a ln is so that exploration gets scaled down as we get further and further.

### Expansion

```py
def _expand(self, node):
    if node in self.children:
        return  # you already expanded
    self.children[node] = node.find_children()
```

Now that we have a leaf node, let's expand it! This means to look at all possible states that we can reach from where we are. The exact implementation of how the nodes find children is game dependent. If we were playing chess, the `node.find_children()` would give you all the possible moves for whichever player is currently taking a turn.

### Rollout

```py
def _rollout(self, node):
    invert_reward = True
    while True:
        if node.is_terminal():
            reward = node.reward()
            return 1 - reward if invert_reward else reward
        node = node.find_random_child()
        invert_reward = not invert_reward
```

Like we showed before, rolling out is just playing random moves until you reach an end state where the game is over. There is one key distinction here in that if you're playing a 2-player game, then you'll have to invert the rewards each time you go up a node. If your opponent wins (reward of 1), then you've lost (reward 0).

### Backpropagation

```py
def _backpropogate(self, path, reward):
    for node in reversed(path):
        self.Q[node] += reward
        self.N[node] += 1
        reward = 1 - reward     # same flipping as rollout
```

Now that we have a reward, we need to backpropogate it back to the states that led to our leaf node. If we keep a `Q` and `N` dictionary for each node

## Useful links

- [Jyopari](https://jyopari.github.io/MCTS.html)
- [Simple Alpha Zero](https://web.stanford.edu/~surag/posts/alphazero.html)
- [Minimal impl. in Python](https://gist.github.com/qpwo/c538c6f73727e254fdc7fab81024f6e1)