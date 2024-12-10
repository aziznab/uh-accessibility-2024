document.getElementById('toggleLanguages').addEventListener('click', function() {
    var languages = document.getElementById('languages');
    if (languages.classList.contains('show')) {
        languages.classList.remove('show');
        languages.classList.add('hidden');
        this.textContent = 'Show Languages';
    } else {
        languages.classList.add('show');
        languages.classList.remove('hidden');
        this.textContent = 'Hide Languages';
    }
});

document.getElementById('toggleFrameworks').addEventListener('click', function() {
    var frameworks = document.getElementById('frameworks');
    if (frameworks.classList.contains('show')) {
        frameworks.classList.remove('show');
        frameworks.classList.add('hidden');
        this.textContent = 'Show Frameworks';
    } else {
        frameworks.classList.add('show');
        frameworks.classList.remove('hidden');
        this.textContent = 'Hide Frameworks';
    }
});
