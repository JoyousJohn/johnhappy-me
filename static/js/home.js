function pageLoad() {

    const theme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

    if (theme === 'light') {
        setTheme('light');
    } else {
        setTheme('dark');
    }
    
}

function toggleTheme() {

    $('body').css('transition', '0.2s');

    const theme = $(':root').attr('theme')

    if (theme === 'light') {
        setTheme('dark');
    } else if (theme === 'dark') {
        setTheme('light');
    }

}

function setTheme(theme) {

    if (theme === 'light') {

        $(':root').attr('theme', 'light')
        localStorage.setItem('theme', 'light');

        $('#theme-btn-icon').addClass('fa-moon');
        $('#theme-btn-icon').removeClass('fa-sun');

    } else if (theme === 'dark') {

        $(':root').attr('theme', 'dark');
        localStorage.setItem('theme', 'dark');

        $('#theme-btn-icon').removeClass('fa-moon');
        $('#theme-btn-icon').addClass('fa-sun');

    }
}