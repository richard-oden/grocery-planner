const input = document.getElementById('input');
const enter = document.getElementById('enter');
let output = document.getElementById('output');
let groceries = [
    'bread',
    'milk',
    'eggs',
    'tomatoes',
    'spinach',
    'avocados'
];

function firstWord(string) {
    return string.split(' ')[0];
}

function secondWord(string) {
    return string.split(' ')[1];
}

function thirdWord(string) {
    return string.split(' ')[2];
}

function checkForItem() {
    index = groceries.indexOf(secondWord(input.value));
    if (index === -1) {print(`<p>"${secondWord(input.value)}" could not be found!</p>`);}
    return index;
}

function print(message) {
    output.innerHTML += message;
}

enter.addEventListener('click', () => {
    if (input.value === 'list') {
        let list = '';
        list += `<p>You have `;
        for (let i = 0; i < groceries.length; i++) {
            if (i === groceries.length - 2) {
                list += `${groceries[i]} and `;
            } else if (i === groceries.length - 1) {
                list += `${groceries[i]}.`;
            } else {
                list += `${groceries[i]}, `;
            }
        }
        list += `</p>`
        print(list);

    } else if (firstWord(input.value) === 'add') {
       groceries.push(secondWord(input.value));
       print(`<p>${secondWord(input.value)} was successfully added!</p>`);

    } else if (firstWord(input.value) === 'replace') {
        if (checkForItem() > -1) {
            groceries.splice(checkForItem(), 1, thirdWord(input.value));
            print(`<p>${secondWord(input.value)} was successfully replaced with ${thirdWord(input.value)}!</p>`);
        }

    } else if (firstWord(input.value) === 'delete') {
        if (checkForItem() > -1) {
            groceries.splice(checkForItem(), 1);
            print(`<p>${secondWord(input.value)} was successfully deleted!</p>`);
        }

    } else if (firstWord(input.value) === 'sort') {
        groceries.sort();
        print(`<p>Your groceries are now sorted!</p>`)

    } else if (firstWord(input.value) === 'clear') {
        document.getElementById('output').innerHTML = '';

    } else {
        print(`<p>Error! "${input.value}" could not be understood!</p>`)
    }
});