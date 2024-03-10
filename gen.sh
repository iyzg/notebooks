head_wrapper() {
    # 1 - Dest
cat >> "$1" << EOF
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
  <title>Ivy's Notebooks</title>
  <link rel="preload" href="min.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <link defer rel="stylesheet" href="min.css">
  <link rel="icon" href="favicon.svg">
  <script src="semantics.js"></script>
</head>
<body>
EOF
}

# Generate markdown
gen() {
    echo "[+] Markdown"
    rm -rf "./_site/"
    mkdir -p ./_site

    folders=(./_src ./_pages)

    for folder in "${folders[@]}"; do
        files=$(ls -t $folder | grep '.md')

        for f in $files; do
            file="$folder/"$f
            name="$(basename $file .md)"
            dest="_site/$name.html"
            first_char="$(head -c1 $file)"
            
            $(pandoc "$folder/$f" -s --katex -c min.css --template "_templates/${folder:3}.html" -o _site/$name.html)
        done
    done

    cp _static/min.css _site
    cp _static/semantics.js _site
    cp _static/favicon.svg _site
    cp -r _src/_assets _site
}

# Index
index() {
    echo "[+] Index"
    files=$(ls -t ./_src | grep '.md')

    dest="_site/index.html"
    $(head_wrapper "$dest")

cat >> "$dest" << EOF
        <h1>Notebooks</h1>
        <input type="text" id="searchInput" placeholder="Search...">
        <div id="tag-container" class="tag-container">
EOF

    for f in $files; do
        name="$(basename $f .md)"
cat >> "$dest" << EOF
            <div class="tag" id="$name">
                <a href="$name">$name</a>
            </div>
EOF
    done

cat >> "$dest" << EOF
        </div>
    </body>
</html>
EOF
}

semantic() {
    echo "[+] Semantic"
    python semantic-link.py
}

# GH and call functions
github() {
    echo "[+] Github"
    git add .
    git commit -m "update"
    git push
}

has_param() {
    local term="$1"
    shift
    for arg; do
        if [[ $arg == "$term" ]]; then
            return 0
        fi
    done
    return 1
}

gh=0
if has_param '-g' "$@"; then
    gh=1
else
    gh=0
fi

gen
index
semantic
# TODO: Add the thing to highlight the ones that are semantically similar

if [[ "$gh" -eq "1" ]]; then
    github
fi