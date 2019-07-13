/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

/** 
 
@Object - {Array} - 
Creates an array of objects that contain Quotes from famous movies, their source character,
the actor/actress that played the role in said movie, the movie itself and the year that it came out.
- {`_id`} - Identifies position in the array 
- {`quote`} - Quote from the movie
- {`source`} - Character that made the quote
- {`actor`} - Star that played the role
- {`citation`} - Movie that the citation is from
- {`year`} - Year the movie was released
- {`mark`} - Keyword mark to change background with.
 */

const quotes = [
  {
    _id: 0,
    quote: "Toto, I've a feeling we're not in Kansas anymore.",
    source: "Dorothy Gale",
    actor: "Judy Garland",
    citation: "The Wizard of Oz",
    year: 1939,
    mark: "wizard"
  },
  {
    _id: 1,
    quote: "May the force be with you.",
    source: "Han Solo",
    actor: "Harrison Ford",
    citation: "Star Wars",
    year: 1977,
    mark: "star"
  },
  {
    _id: 2,
    quote: "Elementary, my dear Watson.",
    source: "Sherlock Holmes",
    actor: "Basil Rathbone",
    citation: "The Adventures of Sherlock Holmes",
    year: 1939,
    mark: "sherlock"
  },
  {
    _id: 3,
    quote: "A census taker once tried to test me. I ate his liver with some fava beans and a nice Chianti.",
    source: "Dr. Hannibal Lecter",
    actor: "Anthony Hopkins",
    citation: "The Silence of the Lambs",
    year: 1991,
    mark: "lamb"
  },
  {
    _id: 4,
    quote: "Cinderella story. Outta nowhere. A former greenskeeper, now, about to become the Masters champion. It looks like a mirac...It's in the hole! It's in the hole! It's in the hole!.",
    source: "Carl Spackler",
    actor: "Bill Murray",
    citation: "Caddyshack",
    year: 1980,
    mark: "caddy"
  }
];

/**
 * Test function to print out the objects to the console to ensure they are operating properly
 */
// console.log(quotes);
// console.log(quotes[0]);
// console.log(quotes[0].quote);
function printObject(quoteObj) {
  for (let i = 0; i < quoteObj.length; i ++) {
    console.log(quoteObj[i].quote);
  }
}
// printObject(quotes);

/**
 * @param {Function} max 
 * Function to create random number between 0 and 4:
 * - to use in the `getRandomQuote` function.
 */

 function getRandomInt (max) {
    return Math.floor(Math.random() * Math.floor(max));
 }

//  console.log(getRandomInt(quotes.length));
//  console.log(getRandomInt(quotes.length));
//  console.log(getRandomInt(quotes.length));
//  console.log(getRandomInt(quotes.length));
//  console.log(getRandomInt(quotes.length));
//  console.log(getRandomInt(quotes.length));
/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

/**
 * 
 * @param {Function} quoteObj 
 * Function that generates a random quote from the Object Quotes.
 * - uses the getRandomInt Function to generate a random number to be used as the index number `num` for the array. 
 * - `changeQuote` is the variable that contains the changing quote each time that the function is called. 
 * - This is then `return`ed at the end of the function to be used in the following `printQuote` function.
 */

function getRandomQuote(quoteObj) {
  let num = getRandomInt(quotes.length);
  let changeQuote = quoteObj[num].quote;
  console.log(quoteObj[num].quote);
  console.log(num);
  return changeQuote;
}
// getRandomQuote(quotes);


/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote () {
  let randQuote = getRandomQuote(quotes);
  let buildToPage = '';

}

// for (i = 0; i < quotes.length; i ++) {
//     let source = quotes[i].source;
//     console.log(source);
// }

let randQuote = getRandomQuote(quotes);
if (quotes.quote === randQuote) {
    let numSource = quotes.source;
    // console.log(quotes.source);
    console.log(quotes[numSource].source);
}

//console.log(quotes[0].source);
console.log(quotes);

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/
// !!! Remember to UNCOMMENT THIS LINE OF CODE !!!
// document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.