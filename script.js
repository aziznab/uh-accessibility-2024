document.getElementById('revealMore').addEventListener('click', function() {
    const moreInfo = document.getElementById('moreInfo');
    if (moreInfo.classList.contains('show')) {
        moreInfo.classList.remove('show');
        this.textContent = 'Reveal More About Me';
    } else {
        moreInfo.classList.add('show');
        this.textContent = 'Show Less';
    }
});