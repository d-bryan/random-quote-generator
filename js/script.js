/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
'use strict';
/**
 * Reference that I used to get the quotes from
 * https://en.wikipedia.org/wiki/AFI%27s_100_Years...100_Movie_Quotes
 */


// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/** 
@Object {`Array`} - 
Creates an array of objects that contain Quotes from famous movies, their source character,
the actor/actress that played the role in said movie, the movie itself and the year that it came out.
- {`_id`} - Identifies position in the array 
- {`quote`} - Quote from the movie
- {`source`} - Character that made the quote
- {`actor`} - Star that played the role
- {`citation`} - Movie that the citation is from
- {`year`} - Year the movie was released
- {`used`} - Keyword mark to change boolean value of true/false.
- {`tag`} - Category that identifies which type of film it is.
 */

const quotes = [
  {
    _id: 0,
    quote: "Toto, I've a feeling we're not in Kansas anymore.",
    source: "Dorothy Gale",
    actor: "Judy Garland",
    citation: "The Wizard of Oz",
    year: 1939,
    used: false,
    tag: "Family"
  },
  {
    _id: 1,
    quote: "May the force be with you.",
    source: "Han Solo",
    actor: "Harrison Ford",
    citation: "Star Wars",
    year: 1977,
    used: false,
    tag: "Family"
  },
  {
    _id: 2,
    quote: "Elementary, my dear Watson.",
    source: "Sherlock Holmes",
    actor: "Basil Rathbone",
    citation: "The Adventures of Sherlock Holmes",
    year: 1939,
    used: false,
    tag: "Drama"
  },
  {
    _id: 3,
    quote: "A census taker once tried to test me. I ate his liver with some fava beans and a nice Chianti.",
    source: "Dr. Hannibal Lecter",
    actor: "Anthony Hopkins",
    citation: "The Silence of the Lambs",
    year: 1991,
    used: false,
    tag: "Horror"
  },
  {
    _id: 4,
    quote: "Cinderella story. Outta nowhere. A former greenskeeper, now, about to become the Masters champion. It looks like a mirac...It's in the hole! It's in the hole! It's in the hole!.",
    source: "Carl Spackler",
    actor: "Bill Murray",
    citation: "Caddyshack",
    year: 1980,
    used: false,
    tag: "Comedy"
  },
  {
    _id: 5,
    quote: "Bond. James Bond.",
    source: "James Bond",
    actor: "Sean Connery",
    citation: "Dr. No",
    year: 1962,
    used: false,
    tag: "Action"
  }
];
/**
 * {`Array`} - Containing different colors to be used in changing background colors
 */
const backgroundColor = [
    {
      color: "coral",
      used: false
    },
    {
      color: "black",
      used: false
    },
    {
      color: "burlywood",
      used: false
    },
    {
      color: "#b9072d",
      used: false
    },
    {
      color: "#97cf2e",
      used: false
    },
    {
      color: "#535353",
      used: false
    },
    {
      color: "#b4b228",
      used: false
    },
    {
      color: "#b48328",
      used: false
    },
    {
      color: "#b48328",
      used: false
    },
    {
      color: "#2893b4",
      used: false
    },
    {
      color: "#6528b4",
      used: false
    }  
];

/**
 * Helper function used to print to the page.
 * @param {Function} message 
 * - passes elements to the function to be printed to the document.
 */
function print(message) {
  var outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = message;
}


/**
 * Function to create random number between 0 and 5:
 * @param {Array} arr 
 * - to use in the `getRandomQuote` function.
 */
 function getRandomInt (arr) {
    return Math.floor(Math.random() * Math.floor(arr.length));
 }

/**
 * 
 * @param {Array} arr - Passes the Quotes array into Function to set all the `used` properties to `false`.
 * - `callback` function to be used in the `getRandomQuotes` Function to change boolean value
 */
function setToFalse (arr){
  for (let i = 0; i < arr.length; i += 1){
    let changeValue = arr[i].used;
    return changeValue;
  }
}


/**
 * Function that generates a random color from the Background colors Array.
 * @param {Array} bgColorArr 
 * - Passes backgroundColors array to function
 * - `num` - gets random integer to pass into placeholder of array
 * - `color` - becomes the color to be passed into the random background color.
 */
function getRandomColor (bgColorArr) {
  let num = getRandomInt(backgroundColor);
  let color = bgColorArr[num];

  if (color.used === false){
    color.used === true;
    return color;
  } else if (color.used === true) {
    setToFalse(backgroundColor);
    return color;
  } else {
    color;
  }
}



/**
 * 
 * @param {Function} quoteObj 
 * Function that generates a random quote from the Object Quotes.
 * - uses the getRandomInt Function to generate a random number to be used as the index number `num` for the array. 
 * - `changeQuote` is the variable that contains the changing quote each time that the function is called. 
 * - This is then `return`ed at the end of the function to be used in the following `printQuote` function.
 */
function getRandomQuote(quoteObj) {
  let num = getRandomInt(quotes);
  let changeQuote = quoteObj[num];

  if (changeQuote.used === false){
    changeQuote.used === true;
    return changeQuote;
  } else if (changeQuote.used === true) {
    setToFalse(quotes);
    return changeQuote;
  } else {
    changeQuote;
  }
}

 
/**
 * Function that prints random quotes to the page with their corresponding attributes.
 * - `buildToPage` - Empty string that consecutively builds the template for HTML
 * - `randQuote` - Holds the randomly genrated object for usage in building
 * - `print` {Function} - Helper function that places the build to the page.
 */

function printQuote () {
  let randQuote = getRandomQuote(quotes);
  let buildToPage = '';
  buildToPage += '<p class="quote">' + randQuote["quote"] + '</p>';
  buildToPage += '<p class="source">' + randQuote["source"];
  if (randQuote["citation"] !== undefined) {
    buildToPage += '<span class="citation">' + randQuote["citation"] +'</span>';
  }
  if (randQuote["year"] !== undefined) {
    buildToPage += '<span class="year">' + randQuote["year"] + '</span>';
  }
  if (randQuote["actor"] !== undefined) {
    buildToPage += '<span class="actor">' + randQuote["actor"] + '</span>';
  }
  if (randQuote["tag"] !== undefined) {
    buildToPage += '<span class="tag">' + randQuote["tag"] + '</span>';
  }
  buildToPage += '</p>';
  
print(buildToPage);

}
// printQuote();

/**
 * Function that calls on `window.setInterval` to change a callback function.
 * @param {Function}  `callback` function that is used to setup the switch statement
 * @param {Function}  `time` in milliseconds for how long it will be delayed
 */
function setTimeoutChange () { 
  
  var intervalID = setInterval(
    function switchColors (randColor, cngQuote){
      cngQuote = printQuote();
      randColor = getRandomColor(backgroundColor).color;
      document.body.style.backgroundColor = randColor;
      return randColor, cngQuote;
    }, 12000);
  return intervalID;
  }

/**
 * Function that is a helper to click event for changing background color.
 */  
function evntColor(){
  let clr = getRandomColor(backgroundColor).color;
  document.body.style.backgroundColor = clr;
  return clr;
}


/**
 * Built a Function to handle both events and make my code DRY, Clean and more concise to read.
 * @param {Function} e_1 - Runs the printQuote function onClick
 * @param {Function} e_2 - Runs the evntColor Function onClick to change BG Color
 */
function getOnClickEvents (e_1, e_2) {
  e_1 = document.getElementById('loadQuote').addEventListener("click", printQuote, false);
  e_2 = document.getElementById('loadQuote').addEventListener("click", evntColor, false);
  
  return e_1, e_2;
}

// Runs all the functions in sequence
getOnClickEvents();
setTimeoutChange();
