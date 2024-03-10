---
title: Automata theory
date-created: Mar 01, 2024
date-updated: Mar 01, 2024
---

> Status: Working notes in the middle of a class

The theory of computation stems out from this idea that there are levels to computation where each higher one can solve the problems of a simpler one. The famous "Turing Complete" language is the highest computation that can solve any other problem.

> **Why do we care about simpler classes of computation?**  
> 

## Regular Language

These are the set of automata that can describe a regular language.

### Finite Automata

It can be proven that all the automata in this category are equivalent even if they might seem "weaker" or "stronger" than one another.

#### DFA

A DFA (Deterministic Finite Automata) consists of states, a transition function, an alphabet, and start/accepting states. Given that you start at the start state, a DFA will use the transition function $\delta (q, \alpha)$ for state $q$ and input $\alpha$ to transition to a new state $p$.

Because it is deterministic, each state and action pair can only have one possible output. If after taking in an input you end at an accepting state, then this is considered "accepted" by the language/automata.

> Note: If you reach an accepted state as an intermediary step, but don't end there, then this is **NOT** an accepted string.

#### NFA



#### ϵ-NFA