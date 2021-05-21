const slideouts = document.getElementById("slideouts")
const leftMenuIcon = slideouts.querySelector(".slideout-left");
const rightMenuIcon = slideouts.querySelector(".slideout-right");
const leftSlideoutMenu = slideouts.querySelector(".left-slideout-menu");
const rightSlideoutMenu = slideouts.querySelector(".right-slideout-menu");

leftMenuIcon.addEventListener('click', () =>
    ToggleMenu(leftSlideoutMenu, rightSlideoutMenu)
)
rightMenuIcon.addEventListener('click', () =>
    ToggleMenu(rightSlideoutMenu, leftSlideoutMenu)
)

let ToggleMenu = (target, other) => {
    other.style.opacity = '0';
    other.style.pointerEvents = 'none';
    if (target.style.opacity == "1") {
        target.style.opacity = '0';
        target.style.pointerEvents = 'none';
    } else {
        target.style.opacity = '1';
        target.style.pointerEvents = 'auto';
    }
}