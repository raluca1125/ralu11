/**
 * Test object demo
 */

const example = {
    title: 'Example object',
    saiHi() {
        console.log('Hey');
    }
}

console.log(example.title);
console.log(example);
console.dir(example);

console.log(document);
console.dir(document);

/**
 * Method to get html elements by any selector
 */

// returneze PRIMUL element pe care il gaseste
const redSquare = document.querySelector('.redSquare');
console.log(redSquare);

redSquare.style.backgroundColor = 'green';

// css background-color => backgroundColor
// css padding-left => paddingLeft

const blueSquares = document.querySelectorAll('.blueSquare');
// const blueSquares = document.querySelectorAll('#blueSquare'); // cauta dupa id
// const blueSquares = document.querySelectorAll('div'); // cauta dupa tag-ul html

console.log(blueSquares);

blueSquares[0].style.backgroundColor = 'yellow';
blueSquares[1].style.backgroundColor = 'yellow';
blueSquares[2].style.backgroundColor = 'yellow';

blueSquares.forEach( (element) => {
    element.style.backgroundColor = 'orange';
});

/**
 * Method to get html element by id
 */

const changedListElem = document.getElementById('changedList');

console.dir(changedListElem);
changedListElem.style.border = '1px solid black';
changedListElem.children[0].style.backgroundColor = 'lightblue';

/**
 * Method to get html elements by tag name
 */

const paragraphElem = document.getElementsByTagName('p');
console.log(paragraphElem);

paragraphElem[0].innerHTML = 'This text was added later with JS';
paragraphElem[1].style.textTransform = 'uppercase';

/**
 * Method to get html elements by class name
 */

const styledMessages = document.getElementsByClassName('styledMessages');
console.log(styledMessages);
// styledMessages.forEach(element => {
//     // do something
// })

for (let i = 0; i < styledMessages.length; i++) {
    const tagName = styledMessages[i].tagName;
    styledMessages[i].innerHTML = `This message was a ${tagName} and was styled by JS`;
}

const greenSquare = document.querySelector('.greenSquare');

function changeGreenSquare() {
    greenSquare.style.backgroundColor = 'lightgreen';
}

function mouseEnter() {
    greenSquare.style.backgroundColor = 'purple';
    greenSquare.style.border = '';
    greenSquare.innerHTML = '';
}

const mouseLeave = () => {
    greenSquare.style.backgroundColor = 'white';
    greenSquare.style.border = '3px solid black';
    greenSquare.innerHTML = 'black';
}

const focusInput = () => {
    greenSquare.style.backgroundColor = 'red';
    document.getElementsByTagName('label')[0].innerHTML = 'Changed after focus event';
}

const blurInput = () => {
    greenSquare.style.backgroundColor = 'black';
}

const onKeyDown = () => {
    greenSquare.style.backgroundColor = 'teal';
}

const onKeyUp = () => {
    greenSquare.style.backgroundColor = 'pink';
}

function selectText(event) {
    // do something
}

function doSomething() {
    greenSquare.style.backgroundColor = 'green';
    greenSquare.style.border = '';
    greenSquare.innerHTML = '';
}

const readInput = () => {
    const readValueInputElem = document.getElementById('readInputValue');
    document.getElementById('testFromReadInput').innerHTML = readValueInputElem.value;
}