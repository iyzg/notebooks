---
title: Poisson Distribution
date-created: Feb 22, 2024
date-updated: Feb 22, 2024
---

Wikipedia defines the poisson distribution as:

> In probability theory and statistics, the Poisson distribution is a discrete probability distribution that expresses the probability of a given number of events occurring in a fixed interval of time if these events occur with a known constant mean rate and independently of the time since the last event

but what exactly does that mean, and how does it link to this function?

$$
\frac{\lambda^k e^{-\lambda}}{k !}
$$

Out of all the distribution functions, this is the one I have the most confusion with, so I'll try my best to explain just how you get to this equation, and maybe build some intuition for what this distribution means.

> Note: I'm still fleshing this out and this will most likely contain some mathematically inconsistencies (mistakes). Please let me know if you find any!

## Deriving the Equation

Let's first start with the Binomial Distribution. The equation for it as follows:

$$
P_x=\left(\begin{array}{l}
n \\
x
\end{array}\right) p^x (1-p)^{n-x}
$$

Intuitively, you can think of it as the probability that you get $x$ heads if you flip a coin $n$ times. How does this translate mathematically?

Now if we know that heads comes up $p$ percent of the time, then the equation seems like it should just be $p^x (1-p)^{n-x}$. After all, there is a $p^x$ chance we flip $x$ heads, and then another $(1-p)^{n-x}$ chance we flip tails. The problem with this is that this only accounts for 1 combination of heads and tails, perhaps HHTT, but there are other ways to get two heads that we aren't counting (HTTH, THHT, TTHH, HTHT, and THTH).

So how do we account for those? To adjust our probabilities by the number of ways to flip, we then adjust by the choose factor out in front. This is the $\left(\begin{array}{l} n \\ x \end{array}\right)$ part.

What was the point of all this? After all, we're interesting in the poisson, not the binomial distribution, but if you think about it, the poisson is a specialized case of the binomial. Going back, it's the mean rate of how many times something will occur in a limited window of time.