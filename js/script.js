import { quotes } from './quotes.js'
import {backgrounds} from './backgrounds.js'

window.onload = getQuote;

document.getElementById('btn').addEventListener('click', getQuote);
    let quote = document.querySelector('.quote')
    let author = document.querySelector('.author');
    let profession = document.querySelector('.profession');
    let background = document.querySelector('.main-container')

//Get random quote and background image
function getQuote() {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    quote.innerHTML = `"${randomQuote.quote}"`;
    author.innerHTML = `- ${randomQuote.author},`;
    profession.innerHTML = `${randomQuote.profession}`
    
    let randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)]
    background.style.backgroundImage = `url("${randomBg.image}")`

}


