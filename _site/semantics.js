let similarNotebooksData = {};
  
document.addEventListener('DOMContentLoaded', function() {
    fetch('https://raw.githubusercontent.com/iyzg/notebooks/main/similarity.json')
        .then(response => response.json())
        .then(data => {
            similarNotebooksData = data;
            setupHoverEffect();
        });
});

// TODO: rename to notebook eventually
function setupHoverEffect() {
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
    console.log(similar)

    var container = document.getElementById('tag-container');
    var tags = container.getElementsByClassName('tag');
  
    for (var tag of tags) {
        if (!similar.includes(tag.id) && notebookId !== tag.id) {
            tag.classList.add('faded');
        }
    }
}

function unfadeOthers() {
    var container = document.getElementById('tag-container');
    var tags = container.getElementsByClassName('tag');

    for (var tag of tags) {
        tag.classList.remove('faded');
    }
}