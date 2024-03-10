let similarNotebooksData = {};
let container, tags;

document.addEventListener('DOMContentLoaded', function() {
    fetch('https://raw.githubusercontent.com/iyzg/notebooks/main/similarity.json')
        .then(response => response.json())
        .then(data => {
            similarNotebooksData = data;
            setupHoverEffect();
        });

    // toggleNotebookDisplay();
    setupSearch();
});

function toggleNotebookDisplay() {
    let container = document.getElementById('tag-container');
    let toggleButton = document.getElementById('toggleView');

    toggleButton.addEventListener('click', () => {
        container.classList.toggle('list-view');
    });
}

function setupSearch() {
    const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('input', () => {
        searchText = searchInput.value.toLowerCase();

        document.querySelectorAll('.tag').forEach(tag => {
            console.log(tag.id);
            const divText = tag.id.replace('-', ' ');
            if (divText.includes(searchText)) {
                tag.style.display = 'block'; // Show the div
            } else {
                tag.style.display = 'none'; // Hide the div
            }
        });
    });
}

// TODO: rename to notebook eventually
function setupHoverEffect() {
    container = document.getElementById('tag-container');
    tags = container.getElementsByClassName('tag');

    document.querySelectorAll('.tag').forEach(notebook => {
        notebook.addEventListener('mouseover', function() {
            displaySimilarNotebooks(this.id);
        });
        notebook.addEventListener('mouseleave', function() {
            unfadeOthers();
        });
    });
}

function displaySimilarNotebooks(notebookId) {
    const similar = similarNotebooksData[notebookId];

    for (var tag of tags) {
        if (!similar.includes(tag.id) && notebookId !== tag.id) {
            tag.classList.add('faded');
        }
    }
}

function unfadeOthers() {
    for (var tag of tags) {
        tag.classList.remove('faded');
    }
}