from sentence_transformers import SentenceTransformer

import json
import numpy as np
import os

# Constants
SRC = './_src'
k = 3

# Pull files
md_files = sorted(os.listdir(SRC))
file_names = list(f.split('.')[0] for f in md_files)
md_text = []

for f in sorted(md_files):
    with open(f'{SRC}/{f}') as of:
        md_text.append(of.read())

# Fancy embedding stuff
# TODO: Should change to small whenever I'm making the website without pushing
model = SentenceTransformer('thenlper/gte-small')
embeddings = np.array(model.encode(md_text))

res = {}
for i in range(len(file_names)):
    dotprod = np.matmul(embeddings[i], embeddings.T)
    dotprod[i] = 0.0
    ind = np.argpartition(dotprod, -k)[-k:]
    ind = ind[np.argsort(dotprod[ind])][::-1]

    result = [file_names[i] for i in ind]
    res[file_names[i]] = result

with open('similarity.json', 'w') as fp:
    json.dump(res, fp)