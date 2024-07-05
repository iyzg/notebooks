---
title: intuition-to-entropy
date-created: Jul 02, 2024
date-updated: Jul 02, 2024
---
> **Status:** Very much rough draft! Taking all advice

1. Communicating things in bits
2. How many bits do you need?
3. Generalizing that to math
4. Entropy definition falls out of that!
5. Then how do you turn that into information?
6. Cross information?
7. Mutual information?
8. Basically, build a big skill tree out of this stuff

Let's say that we have I want to communicate whether it is raining or sunny where I'm at. The simplest thing for me to do would be to send 1 bit. If it's a 0 then it's raining and 1 for if it's sunny. But what if it was sunny 80% of the time? By me always sending 1 bit no matter the probability, you're implying that the codes are similar. You're *implying* that the probabilities are the same

If something has a $p(x) = 0.25$, then we can think of it as having 4 options. If something has $p(x) = 0.5$, then it has two options. How do we go from the overall probability of something to communicating it? If we stick with our bits that can either be 0 or 1, then we can split our search space in half each time. $\frac{1}{p(x)}$ gives you the number of options that you're allowed. Basically, given the probability... that isn't quite right. It isn't the framing of probability to number of items.

$p(x)$ is probability then $\frac{1}{p(x)}$ is like the number of trials you need before you're expected to see it or basically how rare it is. The rarer it is, the more bits you need to communicate that.

But say we have $n$ items, now we have another question of how many bits do we need? If we think of each bit as splitting the search space in half, then this is just the log! So we now know we need $log_2 (\frac{1}{p(x)})$ to communicate it. (TODO: I should make the colorized equations).

Now finally, for each thing. We'll scale how many bits we need to communicate an event by how often it happens. Intuitively, the less often something occurs, the more bits we'll need to encode it because there are many options you can pick from.

We first start with a question: given some distribution, how many bits do we need to communicate it as efficiently as possible? (move this to top)

If we take our final equation $\Sigma p log (\frac{1}{p}) = \Sigma p log (1) - \Sigma p log (p) = - \Sigma p log (p)$  

This is the entropy equation which measures on average how many bits we'd have to communicate optimally to compress something.


Now we take a step forward and see how we can represent joint entropy and mutual information.

## Joint entropy

$H(X, Y)=-\sum_{x \in \mathcal{X}} \sum_{y \in \mathcal{Y}} p(x, y) \log p(x, y)$


## Conditional entropy

With the entropy equation, we can now take it and modify it to get the entropy of a variable given another variable.

$- \Sigma (p|q) log (p|q) = - \Sigma (p|q) log ()$

$$\begin{aligned}
H(Y \mid X) & =\sum_{x \in \mathcal{X}} p(x) H(Y \mid X=x) \\
& =-\sum_{x \in \mathcal{X}} p(x) \sum_{y \in \mathcal{Y}} p(y \mid x) \log p(y \mid x) \\
& =-\sum_{x \in \mathcal{X}} \sum_{y \in \mathcal{Y}} p(x, y) \log p(y \mid x) \\
& =-E \log p(Y \mid X) .
\end{aligned}$$

In the original entropy it's $- E \log p(X)$, so now it is similar except we have the conditional probability instead of the raw one.

## Conditional Entropy

$D(p \| q)=\sum_x p(x) \log \frac{p(x)}{q(x)}$ 

## Mutual Information

$I(X; Y) = D(p(X, Y) \| p(X)p(Y)) = \sum_{x \in \mathcal{X}} \sum_{y \in \mathcal{Y}} p(x, y) log \frac{p(x,y)}{p(x)p(y)}$

KL-Divergence is this measure between how "different" two distributions are. Also known as relative entropy.

