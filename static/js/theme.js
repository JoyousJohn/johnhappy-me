function toggleTheme() {

    $('body').css('transition', '0.2s');

    const theme = $(':root').attr('theme')

    if (theme === 'light') {
        setTheme('dark');
    } else if (theme === 'dark') {
        setTheme('light');
    }

}

function setFA() {
    if ($(':root').attr('theme') === 'light') {
        $('#theme-btn-icon').addClass('fa-moon').removeClass('fa-sun');
    } else if ($(':root').attr('theme') === 'dark') {
        $('#theme-btn-icon').removeClass('fa-moon').addClass('fa-sun');
    }
}

function setTheme(theme) {

    if (theme === 'light') {

        $(':root').attr('theme', 'light')
        localStorage.setItem('theme', 'light');

    } else if (theme === 'dark') {

        $(':root').attr('theme', 'dark');
        localStorage.setItem('theme', 'dark');

    }

    setFA();

}

$(document).ready(function() {
    // setFA();
})