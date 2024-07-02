---
title: MABE
date-created: Jul 02, 2024
date-updated: Jul 02, 2024
---
MABE is a modular framework which tries to make evolving digital creatures more pain-free.
![](_assets/Pasted%20image%2020240702095713.png)
Here's a general framework of how it works exactly. Notice that there are no self-referential loops.

General notes for me later:
- Archivist: This takes stats for the population
- Optimizer: This optimizes the population
	- Some examples include tournament selection, ES, or GA
- World: The environment the population is evaluated on

The reason genomes don't *have* to link to the brain is that maybe it determines body instead of brain architecture.

## Updates

There seems to be a general hierarchy of how to do updates. At the lowest level, you have within brain updates like wire-updates. Within each brain-update, there usually are multiple lower level updates. Next, you have brain updates which are letting an organism think. It is possible to have multiple brain updates per world update so organisms can "think". World updates just update each organism. If there are multiple, then you let them all think the same amount per world update.

Finally, there are generational updates. You can either refresh the population with a new generation every one world update or every few (think of this as mating seasons). 

## Brains

![General structure of a brain](_assets/Pasted%20image%2020240702100517.png)

Because of abstractions, the *world* and *brain* are completely separate. Any type of brain should be able to act within any kind of world. Just because this is the case doesn't mean you can just plug whatever you want in. Cliff gives example that there might be cases with binary brains where they would fail on environments with reward > 1.

## Genomes

These are self explanatory. You provide an alphabet, then they can be mutated or recombined. There's also sexual/asexual reproduction. How this gets translated to a brain/phenotype is going to be hard-coded.

## Organisms

Note to self: They can have multiple brains and organisms?

## Worlds

Okay, there are two broad categories of worlds:

1. Single generation - Typical generation by generation reproduction
2. Internal reproduction - Reproduce by energy/die by time/basically anything "wacky" that isn't the typical GA loop of (1)

Worlds require some # of populations, and specify what kinds of brains work inside of them. This is a prerequisite, and then you'll be able to evolve on top of that. You just have to define it for the world you're working inside of.

> Note: You might need multiple brains because (ex. is one to forage and one to manage stomachs?)

popFileColumns is for deciding what values from an individual you want to save for later.

## General notes:

- Switch to development branch when working with MABE, master doesn't work with arm for some reason
- [Installation and getting started with MABE · Hintzelab/MABE Wiki · GitHub](https://github.com/Hintzelab/MABE/wiki/Installation-and-getting-started-with-MABE#downloading-and-running-mabe)

### Useful Commands

- `./MABE -s`: generates setting files
- `./mabe -f settings.cfg settings_organism.cfg settings_world.cfg`: run MABE with certain configurations
- `./MABE -p GLOBAL-randomSeed 102 GLOBAL-initPop "default 250"`: run with manual config

## Notes on writing a world:

