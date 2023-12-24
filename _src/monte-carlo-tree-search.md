---
title: Monte Carlo Tree Search
date-created: Dec 23, 2023
date-updated: Dec 23, 2023
---

*Note: I'm pretty new to RL, so please let me know if there's anything incorrect here! Also still planning on adding images and such*

Recently been very enamored by MCTS since at it's core, it is a prime example of the [Bitter Lesson](http://www.incompleteideas.net/IncIdeas/BitterLesson.html) from [AI](ai). In broad strokes, MCTS is a way to figure out how to play games optimally *without* any notion of what is good. Traditionally in something like a [minimax](https://en.wikipedia.org/wiki/Minimax), you have to build in human heuristics of what's good in order to limit your search space, but MCTS is pure search. How "good" a position is, is just what percentage of the time you win from a given state. But how do you estimate that with no knowledge of the game? Once you get to a state: you simply just play random moves until you get to end. Do this enough times, and your estimation of a state will approach truth.

> This isn't quite how [AlphaZero](https://en.wikipedia.org/wiki/AlphaZero) works since it replaces the rollouts with neural network evaluations, but this also isn't a built in human heuristic. It's still pure **search** and **learning**.

## The algorithm

MCTS proceeds in four steps: selection, expansion, rollout, backpropogation.

In *selection*, you recursively select a state to go to until you've hit a leaf node. After that, you *expand* out all possible states that you can reach. Since we don't have any heuristics for how best to play the game (at least in Vanilla MCTS), we now *rollout* from that position which means to play random moves until one side wins. After you get a result of who won, you can *backpropagate* that "reward" through each node.

> TODO: Explain what UCT is, draw visuals, show how reward "flips" each time you move up.

## Useful links

- [Jyopari](https://jyopari.github.io/MCTS.html)
- [Simple Alpha Zero](https://web.stanford.edu/~surag/posts/alphazero.html)