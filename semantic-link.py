from sentence_transformers import SentenceTransformer

import json
import numpy as np
import os

# Constants
SRC = './_src'
k = 3

# Pull files
md_files = sorted([x for x in os.listdir(SRC) if x.split('.')[-1] == 'md'])
file_names = list(f.split('.')[0] for f in md_files)
md_text = []

for f in sorted(md_files):
    with open(f'{SRC}/{f}') as of:
        md_text.append(of.read())

# Fancy embedding stuff
model = SentenceTransformer('thenlper/gte-large', device='mps')
embeddings = np.array(model.encode(md_text))

dotprod = np.matmul(embeddings, embeddings.T)
np.fill_diagonal(dotprod, 0)

res = {}
for i in range(len(file_names)):
    ind = np.argpartition(dotprod[i], -k)[-k:]
    ind = ind[np.argsort(dotprod[i][ind])][::-1]

    result = [file_names[idx] for idx in ind]
    res[file_names[i]] = result

with open('similarity.json', 'w') as fp:
    json.dump(res, fp, indent=4)