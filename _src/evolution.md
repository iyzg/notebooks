---
title: Evolution
date-created: Dec 24, 2023
date-updated: Dec 28, 2023
---

Far too expansive of a topic to cover in one notebook, but I'm going to try and start keeping notes on this!

Firstly, I want to explore evolution in many different forms. 
Evolution as:

### as a minimal criterion

Although evolution is often seen as a force of convergence, you might also see it as a *diffusion operator*. Rather than humans being the "peak" of evolution, we're just one niche in a world with millions(?) of niches. You don't need to be the *most* fit to reproduce, simply fit enough. This gives a lot of leeway for what is able to reproduce.

Stephen Gould's [Full House](https://en.wikipedia.org/wiki/Full_House:_The_Spread_of_Excellence_from_Plato_to_Darwin) covers this and on the computational side, [Kenneth Stanley](http://eplex.cs.ucf.edu/papers/brant_gecco17.pdf) has done a lot of work in this area too.

### as a novelty creator

Another way to view evolution is through creating new niches and novel creatures. How exactly such a simple process can seem to infinitely create *new* things is still an open problem. My hunch is that it isn't that evolution is so deep that makes it amazing, but that the environment it is in is so complex. Any simple enough algorithm in a complex enough substrate can produce wonders. (See [AI](ai) for more on the Bitter Lesson)! This is also why I see so much promise with neural networks and reinforcement learning. If you can create something that can *always* scale with *more* data/learning, then the primary challenge is to give it a more complex environment!

> One idea here is that coevolution is a key thing missing from our current DL models. They learn on "static" distributions, but this limits the complexity. You can always grow it by collecting more data, but like evolution, we'd like something that can naturally complexify. Something to [study](learning-list) is why GANs fail and how we might make them work better?

### as an optimization tool

Even though the minimal criterion suggests that evolution creates different niches that can coexist, this idea of "survival of the fittest" has been adapted to create tools that can search for optimal solutions given a problem. Generally they go under the name of genetic algorithms or evolutionary strategies and vary on how biologically inspired they are. 

## General notes

From the [MODES toolbox](https://direct.mit.edu/artl/article/25/1/50/2915/The-MODES-Toolbox-Measurements-of-Open-Ended), this idea of a "persistence filter" of individuals only mattering if they survive $n$ generations. Key point since people seem to forget that most of evolution is noise, and the only way something is a *signal* is if it survives.