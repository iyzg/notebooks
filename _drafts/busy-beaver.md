---
title: Busy beavers
date-created: Mar 24, 2024
date-updated: Mar 24, 2024
---

> status: very rough draft

A turing machine is an imaginary machine made of an infinite tape with some sort of alphabet. If you'd like to pretend it's a modern computer, then we can let our alphabet be 0 and 1s. Then we have a reader head that can tell what input is under it and what state the machine is in. Depending on those, it can change states, change the character under it, then shift either to the left or right one.

Although this is a relatively simple computer, it is provable that this can do *any* computation.

Normally, we're looking for the smallest or quickest program, I mean who's interested in the longest running program? If Uber took til the heat death of the universe to find you a car, that wouldn't be of much use. But the busy beaver question is given a Turing Machine with $n$ states, how long could it run without halting (not counting infinite loops).

What's the point of this? Say you have a program that runs longer than the number of the upper bound, then you know that your program is infinite. This could be theoretically used in math. There are inductive conjectures like Goldbach's Conjecture which haven't been proven, but seem to be correct. How can we finally tell whether or not they're true?

If you make a machine that goes through counterexamples to each conjecture and it has $n$ states, then if the machine runs for longer than the longest it could run without halting, then we know this machine will run forever. This means that we could prove things true this way by proving it'll NEVER find a counterexample. Isn't that beautiful?

Of course, this isn't at all practical. After all, the numbers that we're dealing with are astronomical. Beyond astronomical. As in we've invented new notation that breaks what the human mind can even comprehend.

### References

- [The Busy Beaver Competition: a historical survey](https://hal.science/hal-00396880v6/document)
- [Programmable turing machine](https://nickdrozd.github.io/2020/09/14/programmable-turing-machine.html)
- [Beeping busy beavers](https://nickdrozd.github.io/2020/08/13/beeping-busy-beavers.html)
- [Busy beaver frontier](https://www.scottaaronson.com/papers/bb.pdf)
- [On busy beavers and the limits of computability](https://3quarksdaily.com/3quarksdaily/2022/10/on-busy-beavers-and-the-limits-of-computability.html)
- [Three announcements](https://scottaaronson.blog/?p=2741)