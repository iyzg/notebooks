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
    });
}

function displaySimilarNotebooks(notebookId) {
    const similar = similarNotebooksData[notebookId];
    console.log(similar)
}