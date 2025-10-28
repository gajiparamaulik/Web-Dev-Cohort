document.addEventListener('DOMContentLoaded', function() {
    const collapseBtn = document.getElementById('ColBtn');
    const collapseContent = document.getElementById('collapseText');

    collapseBtn.addEventListener('click', function() {
        if(collapseContent.style.display === 'none') {
            collapseContent.style.display = 'block';
        } else {
            collapseContent.style.display = 'none';
        }
    });
});