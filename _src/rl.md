---
title: Reinforcement Learning
date-created: Dec 22, 2023
date-updated: Dec 25, 2023
---

Reinforcement Learning (RL) is a paradigm of ML where instead of telling the AI what is correct, there is a notion of getting "rewards" for your actions. The general goal is for your AI to maximize your return (reward over the long run).

As of now, this is just a bookmark page to store resources and links to other notebooks! Here are some of my other notes on RL topics:

- [Monte Carlo Tree Search](monte-carlo-tree-search)

## Questions

- **How can you do self-critiquing RL on supervised models _without_ collapse?** So something to be careful of is you don't want them to just output the mean like that one paper where the distribution collapsed. If you have a model self-supervise, then how can it improve?
  - A lot of open-source models use GPT-4 as a ground truth because it's better, but how could GPT-4 use itself to improve? It's hard because not like MCTS where there is a perfect environment simulator for language. That doesn't exist. There has been quite a lot of work in exploring LLMs are a multiverse idea, but for you to decide the *best* one, you have to assign meaning. This reminds me of a [biology](biology) concept where the definition of a living thing is something that creates meaning in the world.
  - What if your ground-truth were just the training examples of a dataset? Also not sure how you MCTS when there are ~50, 000 tokens that could come after and the tree would be absolutely massive. MCTS on language sounds *extremely expensive*. **But**, if you could, then you want the policies that lead to the right answer most of the time. This might have the same overfitting policy, but if you have a robust enough training dataset, I'm not sure why this couldn't work.

## Links

- [Sutton & Barto](http://incompleteideas.net/book/the-book-2nd.html)
- [Spinning Up](https://spinningup.openai.com/en/latest/index.html)

## To Read

- [KnewJade Hatetris writeup](https://gist.github.com/knewjade/24fd3a655e5321c8ebac8b93fa497ed9)
- [Tuning computer vision models with task rewards](https://arxiv.org/abs/2302.08242)