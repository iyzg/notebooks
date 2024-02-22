---
title: Blank 2 Vec
date-created: Feb 09, 2024
date-updated: Feb 19, 2024
---

An idea that I find really fascinating is that you can turn *anything* into a vector of numbers. This is incredible.

I believe the first big paper in this paradigm that I know of is Word2Vec where they trained a model to produce embeddings (this is just what the fancy word for the vector is) for a certain word.

How do you do this?

Well, in their case. You can either train to take a word and predict the words around it, or you can take the 2 words before and 2 words after and try to predict the word in the middle. Either way, whenever you have this type of prediction, you're able to form strong representations of the word. This is usually done by having the neural net have some sort of bottleneck layer before word prediction, that's the "embedding" part.

This is also done with VAEs, and now CLIP (maybe one of my favorite papers of all time).

The basic question of CLIP was, can we somehow put in an image and get words or put in words and get an image? How do we tell how similar the two things are?

Once again, they showed that raw input is key in this. If you just take images that have alt tags from online, most of them are not that great, but by training a model to predict which alt text goes with what image, you end up able to get such a strong model for co-embedding the two formats.

This basic paradigm has been done with so much now. How do you "clip" geolocations (GeoClip) or astrophysics stars, or whatever else. What else is there to do in this space besides eke out small advantages? (I believe there's definitely more room for creativity)

## Infinite Craft

Something that kind of embodies this notion is Neal's new game [Infinite Craft](https://neal.fun/infinite-craft/). It is reminiscent of the old games where you were able to combine elements to form new ones to try and discover the edges of the game world, but in this one, the relationships are built in by a human but by an AI. This means that you can do a lot of wacky things, but the space of "explorable" elements is essentially infinite.

By turning words into numbers, we've somehow crafted a notion of what "adding" two concepts is. That is incredible.
