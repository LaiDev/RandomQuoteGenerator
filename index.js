import quotes from "./dummyAPI.js";

//Gets a random number from 0 - the length of the array
//Uses the random number as the index value for the quotes array

let getRandomQuote = () =>{
    let quoteIndex = Math.floor(Math.random() * quotes.length);
    let quote = quotes[quoteIndex]
    let quoteAuthor = quote.author;
    let quoteText = quote.text;

    return [quoteAuthor, quoteText];
}

//Gets a reference to the HTML text and sets the text to be a random quote
let setQuote = (randomQuote) =>{
    let quoteText = document.getElementById("quote-text");
    quoteText.innerHTML = randomQuote[1];

    let quoteAuthor = document.getElementById("quote-author");
    quoteAuthor.innerHTML = randomQuote[0];
}

let generateQuoteBtn = document.querySelector("button").addEventListener("click", () =>{
    setQuote(getRandomQuote());
}) 
