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

- They're all instances of `AbstractWorld`
- It seems the `.h` files are for configs and function signatures
- In the `.cpp`, you want to define what each config setting default is, type, and a description
- "in a generational world all that you need to need to do is make sure that a value to optimize is written into the data map of each organism."
- `Global::update` is just a tracker of which generation we're on
- If you increment that, then that will help us track how long to keep going
- Ah also the archivist tells whether we're `_finished` or not, so that also needs to be kept track of

> Worlds with internal mating - in addition to evaluating the organisms in some way, these worlds must also manage populations, offspring ( which can be created with organism::makeMutatedOffspringFrom() ), global::update and when the archivist is called. Unlike, Generational Worlds, where MABE decides when global::update indicates that the run is done, in this type of world you control global::update, and so you will need to determine when to stop running. Once you're done, control will return to MABE, and global::update must be set, or the evolution loop will call evaluate again! This is not difficult though, as long as you are incrementing global::update, calls to archive will return a boolen value which will indicate if you are done.

So it seems like reading this that it just calls the evaluate thing ONE time, then we manage everything else.

> NOTE: You can just use `Global::update` anywhere and it should work? Why is this?

Okay, so the general file structure is that evalulate will be called, and more of these also have an `evaluateSolo` that they want to call each generation. If we don't want the generational thing, then you have to do everything inside `evalulate`

> Question: How do I actually get MABE to use my environment?

Ah yes, you have to run it with `-f settings*` to actually apply them. That's super intuitive. Ah sick, you have to edit the `CMakeLists`

### Berry World

#### Engineering thoughts

So, berry world's code is kind of a mess. I think you need to split it off and write another CPP file that just handles the environment. If you're going to handle the agent brain and update, then that's just a lot.

```c++
percepts = env.getSensors(agent_no);
action = brain.update(percepts);
env.update(agent_no, action);
```

This feels like the general loop that you should be going for.

Rough loop is `evaluate()` -> `runWorld()`. Can do `currentInput++` to loop through all the input slots

#### Research thoughts

What if we just start off with the simplest possible thing? You have a bunch of agents that are points, they have some genome that evolves their brains, but then where is the science?

**Start with the necessary components: selection, variation, and inheritance.**

I mean, there wasn't even variation in the Arcas et al. paper which is kind of insane. They just started from random noise and got to self-replicators? Doesn't that kind of go against evolution?

Principle wise, they should have co-evolution because that seems key?

I think the hardest part is going to be thinking about how they're able to interact.

### Defining brains in worlds

`GROUPNAME,{B:BRAINNAME,#IN,#Out}`: Each group of organisms has some set way of determining things.

Okay, so the first things first, I want to go through and learn how to even do this, then I'll and make sure I can even define a super simple world. 

By the way, there's a `Organism.ID`, so you should NOT be using index as a unique identifier. If anything, you can just pass in organism into the env function, and it should handle it just fine.

Question now that we're abstracting into an env, where do we create it and maintain all this state...