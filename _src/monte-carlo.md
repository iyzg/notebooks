---
title: Monte Carlo Methods
date-created: Dec 31, 2023
date-updated: Dec 31, 2023
---

Monte Carlo methods are ones which exploit the idea that if you randomly try something enough, eventually you'll converge to the true probability. For example, if you flip a coin 10 times, you might get heads 70% of the time, but as you keep flipping the coin, you should get closer to a 50/50 split.[^1]

What can you do with this stupid brute force approach?

- [Monte Carlo Tree Search](monte-carlo-tree-search) to solve games (this was used in AlphaZero to beat the top Go player)
- [Estimate the value of $\pi$](https://observablehq.com/@iyzg/monte-carlo-simulation-for-pi)
- [Simulate gnarly distribution](https://jblevins.org/notes/accept-reject#:~:text=The%20Accept%2DReject%20method%20is,with%20a%20carefully%20chosen%20probability.)

If you have more ways that MC has been applied, let me know!

[^1]: Except, the [research](https://arxiv.org/abs/2310.04153) might show that coins aren't so 50/50 after all!