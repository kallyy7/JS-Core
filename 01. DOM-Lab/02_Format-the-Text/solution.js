function solve() {
    let input = document.getElementById('input');
    let output = document.getElementById('output');
    debugger;
    let sentences = input.textContent.split('.');
    let paragraph = '';

    for (let index = 0; index < sentences.length; index += 3) {
        paragraph = document.createElement('p');

        paragraph.textContent = sentences[index];
        paragraph.textContent += '.' + sentences[index + 1];
        paragraph.textContent += '.' + sentences[index + 2];

        output.appendChild(paragraph);
    }
}