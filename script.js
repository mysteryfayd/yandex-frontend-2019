var themeSwitcher = document.getElementById('changeTheme'),
    elem = document.querySelectorAll("#section"),
    elem1 = document.querySelectorAll(".lesson__plan"),
    elem2 = document.querySelectorAll(".lesson-block-title");
    elem3 = document.querySelectorAll(".logo");

themeSwitcher.onclick = function() {
    document.body.classList.toggle('dark-theme-change');

    for (var i = 0; i < elem.length; i++) {
        elem[i].classList.toggle("dark-theme-section");
    }
    for (var j = 0; j < elem1.length; j++) {
        elem1[j].classList.toggle("dark-theme-text");
    }
    for (var k = 0; k < elem2.length; k++) {
        elem2[k].classList.toggle("dark-theme-text");
    }
    for (var l = 0; l < elem3.length; l++) {
        elem3[l].classList.toggle("dark-theme-text");
    }
    themeSwitcher.classList.toggle("dark-theme");
}