document.addEventListener('DOMContentLoaded', function() {
    var container = document.getElementById('tag-container');
    var tags = container.getElementsByClassName('tag');
  
    function fadeOthers() {
        for (var tag of tags) {
            if (tag !== this) { // 'this' is the tag being hovered
                tag.classList.add('faded');
            }
        }
    }
  
    function unfadeOthers() {
        for (var tag of tags) {
            tag.classList.remove('faded');
        }
    }
  
    for (var tag of tags) {
        tag.addEventListener('mouseenter', fadeOthers);
        tag.addEventListener('mouseleave', unfadeOthers);
    }
});
  