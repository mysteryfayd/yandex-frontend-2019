// for dark theme
var themeSwitcher = document.getElementById('changeTheme'),
    elem = document.querySelectorAll(".section"),
    elem0 = document.querySelectorAll(".home-logo__default"),
    elem1 = document.querySelectorAll(".lesson__plan, .lesson-block-title"),
    elem2 = document.querySelectorAll(".lesson"),
    elem3 = document.querySelectorAll(".lesson__title");

themeSwitcher.onclick = function() {
    document.body.classList.toggle('dark-theme-change');

    for (var i = 0; i < elem.length; i++) {
        elem[i].classList.toggle("dark-theme-section");
    }
    for (var y = 0; y < elem0.length; y++) {
        elem0[y].classList.toggle("home-logo__dark");
    }
    for (var j = 0; j < elem1.length; j++) {
        elem1[j].classList.toggle("dark-theme-text");
    }
    for (var k = 0; k < elem2.length; k++) {
        elem2[k].classList.toggle("dark-theme-lesson");
    }
    for (var l = 0; l < elem3.length; l++) {
        elem3[l].classList.toggle("dark-theme-lesson__title");
    }
    themeSwitcher.classList.toggle("dark-theme");
};

// go to top btn
var smoothJumpUp = function() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        window.scrollBy(0, -50);
        setTimeout(smoothJumpUp, 5);
    }
};

window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 250) {
        document.getElementById('upbutton').style.display = 'block';
    } else {
        document.getElementById('upbutton').style.display = 'none';
    }
};

