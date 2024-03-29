const target = document.getElementById('target');
const yes = document.getElementById('yes');
const no = document.getElementById('target');
const container = document.getElementById('container');

yes.addEventListener('click', () => {
    alert("AWESOME... 😍💞");
});

function moveTarget() {
    const maxWidth = container.offsetWidth - no.offsetWidth;
    const maxHeight = container.offsetHeight - no.offsetHeight;
    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    target.style.left = randomX + 'px';
    target.style.top = randomY + 'px';
}

function moveNo() {
    const maxWidth = container.offsetWidth - no.offsetWidth;
    const maxHeight = container.offsetHeight - no.offsetHeight;
    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    no.style.left = randomX + 'px';
    no.style.top = randomY + 'px';
}

target.addEventListener('mouseenter', moveTarget);

no.addEventListener('mouseenter', moveNo);

