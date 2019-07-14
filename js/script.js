/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

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
- {`background_color`} - Key to change the background color of the page when button clicked.
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
    background_color: "coral",
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
    background_color: "black",
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
    background_color: "burlywood",
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
    background_color: "#b9072d",
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
    background_color: "#97cf2e",
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
    background_color: "##535353",
    tag: "Action"
  }
];

var wizard = quotes[0].quote;
var coral = quotes[0].background_color;
var starWars = quotes[1].quote;
var black = quotes[1].background_color;
var sherlock = quotes[2].quote;
var burlywood = quotes[2].background_color;
var hannibal = quotes[3].quote;
var brickred = quotes[3].background_color;
var caddy = quotes[4].quote;
var turfgreen = quotes[4].background_color;
var bond = quotes[5].quote;
var steel = quotes[5].background_color;
const getPQuote = document.querySelector('p.quote');
const getPSource = document.querySelector('p.source');
const getSCitation = document.getElementsByClassName('citation');
const getSYear = document.getElementsByClassName('year');
const getSActor = document.getElementsByClassName('actor');
const getSTag = document.getElementsByClassName('tag');
const getPElement = document.querySelector('p');
const nextTarget = getPSource.nextSibling;


/**
 * Test function to print out the objects to the console to ensure they are operating properly
 */
// console.log(quotes);
// console.log(quotes[0]);
// console.log(quotes[0].quote);
function printObject(quoteObj) {
  for (let i = 0; i < quoteObj.length; i ++) {
    console.log(quoteObj[i].quote);
    console.log(quoteObj[i].background_color);
  }
}
// console.log(quotes[0].background_color);
// printObject(quotes);

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
 * @param {Function} arr 
 * - to use in the `getRandomQuote` function.
 */
 function getRandomInt (arr) {
    return Math.floor(Math.random() * Math.floor(arr.length));
 }

/**
 * 
 * Function used to set the items used property to false.
 * @param {Function} arr 
 * - Uses `forEach` to loop through `items` in array and set them to `false`
 */
 function setArray (arr) {
   arr.forEach(item => item.used = false); 
 }

/**
 * Function used to retrieve unused quotes then pass to callback function.
 * @param {Function} arr
 * - Creates variable `unusedQuote` to contain the filter for unused quotes
 * @param {Function} callback
 * - `return`s the `callback` of `unusedQuote` to the Function. 
 */
function getUnusedQuote (arr, callback) {
  let unusedQuote = arr.filter(arr => !arr.used);
  return callback(unusedQuote);
}


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
  let num = getRandomInt(quotes);
  let changeQuote = quoteObj[num];
  // console.log(quoteObj[num].quote);
  // console.log(num);
  return changeQuote;
}
console.log(getRandomQuote(quotes));

/**
 * For Each Function that loops over all the properties of the objects to be used
 * for building the other parts to the quote.
 * @param {Function} element
 * - `element` passes the property to the function to be stored in building to the page
 * -`sourceArr` {Array} of source attributes
 * -`actorArr` {Array} of actor attributes
 * -`citationArr` {Array} of citation attributes
 * -`yearArr` {Array} of year attributes
 * -`background_colorArr` {Array} of background color attributes
 * -`tagArr` {Array} of tag attributes
 */
const sourceArr = [];
const actorArr = [];
const citationArr = [];
const yearArr = [];
const background_colorArr = [];
const tagArr = [];
  quotes.forEach(function(element){
    let source;
    let actor;
    let citation;
    let year;
    let background_color;
    let tag;

    source = element.source;
    actor = element.actor;
    citation = element.citation;
    year = element.year;
    background_color = element.background_color;
    tag = element.tag;

    sourceArr.push(source);
    actorArr.push(actor);
    citationArr.push(citation);
    yearArr.push(year);
    background_colorArr.push(background_color);
    tagArr.push(tag);
  });






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
  buildToPage += '<p class="quote">' + randQuote["quote"] + '</p>';
  buildToPage += '<p class="source">' + randQuote["source"] +'</p>';
  for (var i = 0; i < quotes.length; i += 1) {
    var quoteObj = quotes[i];
    // buildToPage += '<p class="quote">' + randQuote + '</p>';
    console.log(quoteObj.quote.toString());
  }





  // for (key in quotes){
  //   if (quotes[key].quote === randQuote){
  //     buildToPage += getPSource.textContent = quotes[key].source + ' ';
  //     if (quotes[key].hasOwnProperty(quotes[key].source))
  //     buildToPage += getSCitation.textContent = quotes[key].citation + ' ';
  //     buildToPage += getSYear.textContent = quotes[key].year + ' ';
  //     buildToPage += getSActor.textContent = quotes[key].actor + ' ';
  //     buildToPage += getSTag.textContent = quotes[key].tag + ' ';
      

  //   }
print(buildToPage);

}
console.log(getRandomQuote(quotes).toString());
printQuote();

// for (i = 0; i < quotes.length; i ++) {
//     let source = quotes[i].source;
//     console.log(source);
// }

// let randQuote = getRandomQuote(quotes);
// console.log(randQuote);
// if (quotes.quote === randQuote) {
//     let numSource = quotes.source;
    // console.log(quotes.source);
    // console.log(quotes[numSource].source);
// }

//console.log(quotes[0].source);
// console.log(quotes);


/**
 * Function that calls on `window.setInterval` to change a callback function.
 * @param {Function}  `callback` function that is used to setup the switch statement
 * @param {Function}  `time` in milliseconds for how long it will be delayed
 */
function changeBackgroundColor () { 
var intervalID = setInterval(switchColors, 5000);
return intervalID;
}
/**
 * Build a switch statement to switch between the background colors whenever the
 * `window.setInterval` timesout.
 * @param {Switch} quote
 */
function switchColors (){
  switch (quote) {
      case wizard:
        document.body.style.backgroundColor = coral;
        break;
      case starWars:
        document.body.style.backgroundColor = black;
        break;
      case sherlock:
        document.body.style.backgroundColor = burlywood;
        break;
      case hannibal:
        document.body.style.backgroundColor = brickred;
        break;
      case caddy:
        document.body.style.backgroundColor = turfgreen;
        break;
      default:
        document.body.style.backgroundColor = "#36b55c";
  }
}

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/
// !!! Remember to UNCOMMENT THIS LINE OF CODE !!!
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.