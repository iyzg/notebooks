---
title: Policy Gradients
date-created: Dec 24, 2023
date-updated: Dec 31, 2023
---

Policy Gradient is a class of reinforcement learning which takes the parameters of a policy and updates it according to the reward received. At a high level, it's a very "dumb" algorithm. Encourage every outcome which led to a good outcome, and discourage actions which lead to bad outcomes. You don't know how good each individual action is, but if you optimize it as a whole, then eventually a simple model will be able to learn what actions and are good and when.

> These are my rough working notes, but I highly recommend you go read the resources in [the references](#references).

General outline:

- you want to take steps in the right direction, update policy for higher reward
- show how to derive the log thing
- why do you even do it that way?
  - so that we can do mc estimation?
- note that reward is not guaranteed
- elgp lemma
- extensions: baseline function and anything else?
  - in extensions, also show rewards to go

## TODO

- read gae paper
- eventually: extend to trpo and other methods

## References

- [Spinning Up](https://spinningup.openai.com/en/latest/spinningup/rl_intro3.html)
- [Pong from Pixels](https://karpathy.github.io/2016/05/31/rl/)