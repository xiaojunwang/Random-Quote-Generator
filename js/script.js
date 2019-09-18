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

var quotes = [
  {
    'quote': 'The Way Get Started Is To Quit Talking And Begin Doing.', 
    'source': 'Walt Disney',
    'citation': 'briantracy.com',
    'year': '1976'
  },
  {
    'quote': 'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.' , 
    'source': 'Winston Churchill',
    'citation': 'briantracy.com' ,
    'year': '1944'
  },
  {
    'quote': 'Don\'t let yesterday take up too much of today.' , 
    'source': 'Will Rogers',
    'citation': 'braintracy.com',
    'year': '2011'
  },
  {
    'quote': 'You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.' , 
    'source': 'Unknown',
    'citation': 'briantracy.com',
    'year': 'Unknown'
  },
  {
    'quote': 'If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.', 
    'source': 'Steve Jobs' ,
    'citation': 'briantracy.com',
    'year': '2009'
  }
];
/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/
function getRandomQuote(quotes) {
  //generate a random number between 0 and the last index in the array parameter
  //use the random number and box notcation to grab a random item from the quotes array
  //return the random item
  var randomNumberFromQuotesArray = Math.floor(Math.random() * (quotes.length) +1);
  var randomArrayIndex = quotes[randomNumberFromQuotesArray];
  return randomArrayIndex;
}

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
function printQuote() {
  var getQuoteFromFunction = getRandomQuote(quotes);
  var stringQuote = getQuoteFromFunction.quote;
  var stringSource = getQuoteFromFunction.source;
  var stringCitation = getQuoteFromFunction.citation;
  var stringYear = getQuoteFromFunction.year;
  
  var outputString = `<p class="quote"> ${stringQuote} </p> <p class="source"> ${stringSource} <span class="citation"> ${stringCitation} </span> <span class="year"> ${stringYear} </span> </p>`

  if (stringCitation && stringYear){
    outputString = `<p class="quote"> ${stringQuote} </p> <p class="source"> ${stringSource} <span class="citation"> ${stringCitation} </span> <span class="year"> ${stringYear} </span> </p>`
  } else if (stringCitation || stringYear) {
    if (stringCitation) {
      outputString = `<p class="quote"> ${stringQuote} </p> <p class="source"> ${stringSource} <span class="citation"> ${stringCitation} </span> </p>`
    } else if (stringYear) {
      outputString = `<p class="quote"> ${stringQuote} </p> <p class="source"> ${stringSource} <span class="year"> ${stringYear} </span> </p>`
    }
  } else {
    outputString = `<p class="quote"> ${stringQuote} </p> <p class="source"> ${stringSource} </p>`
  }
  document.getElementById('quote-box').innerHTML = outputString;
}



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.