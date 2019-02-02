function solve() {
    let button = document.querySelector('button');
    let paragraph = document.getElementById('paragraph');
    let clicks = 0;

    button.addEventListener('click', () => {
        clicks++;
        paragraph.style.fontSize = clicks * 10 + 'px';

        if (clicks == 1) {
            paragraph.style.color = 'blue';
        } else if (clicks == 2) {
            paragraph.style.color = 'green';
        } else if (clicks == 3) {
            paragraph.style.color = 'red';
            clicks = 0;
        }
    })
}