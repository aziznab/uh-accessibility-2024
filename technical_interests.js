document.getElementById('toggleLanguages').addEventListener('click', function() {
    var languages = document.getElementById('languages');
    var isHidden = languages.classList.contains('hidden');
    
    if (isHidden) {
        languages.classList.remove('hidden');
        languages.classList.add('show');
        this.textContent = 'Hide Languages';
        languages.style.maxHeight = languages.scrollHeight + 'px';
    } else {
        languages.classList.remove('show');
        languages.classList.add('hidden');
        this.textContent = 'Show Languages';
        languages.style.maxHeight = '0';
    }
});

document.getElementById('toggleFrameworks').addEventListener('click', function() {
    var frameworks = document.getElementById('frameworks');
    var isHidden = frameworks.classList.contains('hidden');
    
    if (isHidden) {
        frameworks.classList.remove('hidden');
        frameworks.classList.add('show');
        this.textContent = 'Hide Frameworks';
        frameworks.style.maxHeight = frameworks.scrollHeight + 'px';
    } else {
        frameworks.classList.remove('show');
        frameworks.classList.add('hidden');
        this.textContent = 'Show Frameworks';
        frameworks.style.maxHeight = '0';
    }
});
