---
title: The dumbest language models
date-created: Jul 05, 2024
date-updated: Jul 06, 2024
---
Just how simple can we make a language model? We're going to build from the ground up and see just how simple you can get while producing "coherent" text.

## 0th order

We're going to start with two assumptions of language:
1. All letters have the same chance of showing up
2. Letters are independent of one another meaning the letters which come before don't influence the next letter

> g:rcbehLyPeK-Movz\$Zo;&sZ'3&wopz?T A&a3UYc :RWcpSK?aGOpDggXP!ggaiP,vZdeWRFBU;zQpdiY a.PUEjgKIVYW&j$X

And we get: complete and utter rubbish. 

## 1st order approximation

We know that letters don't show up with equal probability. Rather than trying to guess how often they occur, we can estimate it by counting frequencies from some [data](https://github.com/karpathy/char-rnn/blob/master/data/tinyshakespeare/input.txt) (I'm using some Shakespeare here). 

Let's try regenerating more text with this assumption:

> CunCTelheefdtuh:dides.rrr.lae r hekoa qhtnr hnuewy ;todafeUO,euatosnnle?wmUhGv ree res Ah oa orel

It's hard to tell if this is much better. We're getting less punctuation then we did before, but it would still be a far stretch to call this coherent English.

## 2nd order approximation

Now finally, let's remove our second assumption that each letter is independent of one another. If you see the letter 'Q', it's far more likely the next letter is an 'a' rather than a 'Z'.

Let's tackle this by creating a simple **digram**. A digram just says that for each letter, store counts of how often the next letter is. When we're generating more letters now, we depend on the last letter to set probabilities of the next one.

Why stop there? You can keep going and have each letter depend on the previous 2, 3, 4, ... This kind of modeling where your next prediction depends on the previous $n$ pieces of data is called an **n-gram**.[^2]


> rirupld,
> HOLAs my, nit idee ber, ayonghingathop whrs. 
> I ngoon abesithisth woty; 
> IA the il s. 
> K: 
> Thie

Even with just a digram, we're already starting to see some structure emerge like periods at the end of lines and the `NAME:` format that the data has. Still a far stretch from the coherent outputs we've come to expect from GPT.

## Words instead of characters

Of course, we don't *need* to use characters as our building block. What if we instead used words as what we were predicting on? I've generated 30 word samples and included them below:[^1]

**0th order:** 

> She said this was a white again? planted Cushions, method, wise, behold men's pass'd Romans. vent comes Must, side saving senators, Ladders, covets certain themselves, Marry, requests movers fear. hell. Romans.' Brother alike. brave? natural

**1st order:** 

> She said this was a by 
> BRUTUS: duke. your But it lack i' were wealsmen Capitol-- make Only in or would think stopp'd my estimation my prey angry Volsce, i' stripes mother, hang I your

**2nd order:**

> She said this was a humorous patrician, and parent. 
> CORIOLANUS: I count my nature is left, 
> Marcius: A weeder-out of wine. 
> Second Citizen: But we the king, To your voices, I came, Ready to put

Now that we're generating chunks of tokens, it's clear how much *better* this performs. We used the same techniques, but even a simple 2nd order approximation of language is starting to generate grammatical sentences.

## So on and so forth

It's kind of hard to believe from what we've generated above, but this is the ideological framework of **ALL** language models. From the idea that we can statistically model text to generate coherent English, we need three components:

1. Data to learn from
2. An atomic unit of language (also known as **tokens**)
3. Some way to look at previous outputs and generate new ones

So what are we missing?

- We used 1 million characters to try and learn, but this is nowhere near enough to learn. Language models today basically swallow up the entirety of the internet.
- Rather than using characters or words, LLMs use more general tokens which are learned from the data. You can play around with one such tokenizer [here](https://gpt-tokenizer.dev/).
- Look up tables, like the digrams we used, are expensive and they don't scale. For a *n-gram*, you'd have to have $V^n$ size lookup table where $V$ is the number of tokens you have. How do you compress this to be smaller? Neural networks!
	- With neural networks, the goal is to compress larger and larger n-grams into a smaller approximation that is still quite accurate.

If you want to play around with improving on the simple methods I illustrated above, [this is a notebook that I used to generate the samples.](https://github.com/iyzg/bytesofpi/blob/main/notebooks/Dumb-LM.ipynb)

[^1]: Caveat: For the words, there were too many unique tokens for even a digram to handle, so I truncated the data down to just the first 200,000 characters rather than the full million.
[^2]: If we're only looking at 1 piece of data before, then why is it called a digram? (Di means 2) We can think of our probabilities as pairs (c1, c2) where c1 is the previous character, and c2 is our next one. This pair has 2 items, hence the name digram. If we took the last 2 characters into account then it'd be called a trigram (c1, c2, c3).