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

leftSlideoutMenu.querySelectorAll("a").forEach(el => {
    el.addEventListener("click", () =>
        hide(leftSlideoutMenu)
    )
})

let ToggleMenu = (target, other) => {
    hide(other)
    if (target.style.opacity == "1") {
        hide(target)
    } else {
        target.style.opacity = '1';
        target.style.pointerEvents = 'auto';
    }
}

let hide = (target) => {
    target.style.opacity = '0';
    target.style.pointerEvents = 'none';
}