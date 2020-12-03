import { TextAnalizer } from './components/text-analizer/TextAnalizer.js';

const textarea = document.querySelector('textarea');
const submit = document.querySelector('input');
let text = '';


submit.addEventListener('click', e => {
    e.preventDefault();
    text = textarea.value;

    const analizatorius = new TextAnalizer(text);
    analizatorius.addLanguage('lt');

    const letterCount = analizatorius.letterCount();

    console.log('Raidziu kiekis:', letterCount);
})