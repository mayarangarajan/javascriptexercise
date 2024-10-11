// part 1: add a paragraph when the button is pressed
document.getElementById('addParagraph').addEventListener('click', function() {
    const p = document.createElement('p');
    p.innerText = 'you pressed a button!';
    document.body.appendChild(p);
});

// part 2: increment h4 text
document.getElementById('incrementH4').addEventListener('click', function() {
    const counter = document.getElementById('counter');
    counter.innerText = parseInt(counter.innerText) + 1;
});

// part 3: change color of a paragraph
const colorParagraph = document.getElementById('colorExperiment');
document.getElementById('changeColor').addEventListener('click', function() {
    const colors = ['red', 'green', 'blue', 'orange', 'purple'];
    colorParagraph.style.color = colors[Math.floor(Math.random() * colors.length)];
});

// part 4: mirror input text
document.getElementById('showText').addEventListener('click', function() {
    const input = document.getElementById('textInput').value;
    const mirrorText = document.createElement('p');
    mirrorText.innerText = input;
    document.body.appendChild(mirrorText);
});

// part 5: font selection
const fontParagraph = document.getElementById('fontExperiment');
document.getElementById('fontSelection').addEventListener('change', function() {
    fontParagraph.style.fontFamily = this.value;
});
