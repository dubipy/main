/*
Nothing to see here :)
Made by @screenshake
linkedin.com/in/saranshsinha
*/

const blocks = document.querySelectorAll('.title-block');

blocks.forEach((element, index) => {
    addAnimation(element, index);
});

function addAnimation(elem, index) {
    var delay, duration, fixedIndex;
    duration = 4;
    fixedIndex = index + 1;
    delay = (fixedIndex) * duration;

    elem.classList.add('animate');
    elem.style.animationDelay = `${delay}s`
    elem.style.animationDuration = `${duration}s`;
    fixedIndex === 1
        ? elem.style.animationDelay = `0s`
        : elem.style.animationDelay = `${delay - duration}s`;
}