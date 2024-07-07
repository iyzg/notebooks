---
title: Probability Definitions & Proofs
date-created: Jul 06, 2024
date-updated: Jul 06, 2024
---
A not so comprehensive list of proofs and other things because I'm quite bad at probability and always forget.

## Definitions

### Expected Value

> The likely outcome of a random event.

$$
E[x] = \sum_x x*p(x)
$$
You can think of it like a weighted average, where each outcome is weighted by the chance that it occurs.

### Variance

> The **expected value** of the squared deviation from the mean.

$$
\text{Var}[x] = E[(x - E[x])^2]
$$

### Standard Deviation

> The square root of the **variance**.

$$
\text{SD}[x] = \sqrt{\text{Var}[x]}
$$
### Bernoulli Distribution

> Probability distribution if you just flipped a coin.

### Binomial Distribution

> Probability distribution of how many heads you'd get when flipping $N$ coins. 

## Proofs

### Linearity of Expectation

> When finding $E[X + Y]$ , this is equal to $E[X] + E[Y]$ even if there are no independent

$$
\begin{aligned}
E[X+Y] & =\sum_x \sum_y[(x+y) \cdot P(X=x, Y=y)] \\
& =\sum_x \sum_y[x \cdot P(X=x, Y=y)]+\sum_x \sum_y[y \cdot P(X=x, Y=y)] \\
& =\sum_x x \underbrace{\sum_y P(X=x, Y=y)}_{P(X=x)}+\sum_y \underbrace{\sum_x P(X=x, Y=y)}_{P(Y=y)} \\
& =\sum_x x \cdot P(X=x)+\sum_y y \cdot P(Y=y) \\
& =E[X]+E[Y] .
\end{aligned}
$$
**Note: Proof is taken from Brilliant.**  You can easily adapt this from discrete variables to continuous by doing integration. 

### Binomial Distribution Mean & Variance

The binomial distribution of $P(x \mid f, N)=\binom{N}{x} f^x (1-f)^{N-x}$. 

> **TODO: Finish proof here of why mean is $Nf$ and variance is $Nf(1-f)$**

## Sources

- [Linearity of Expectation | Brilliant Math & Science Wiki](https://brilliant.org/wiki/linearity-of-expectation/)
- Information Theory, Inference, and Learning Algorithms
- 