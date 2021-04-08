/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {
  quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  source: 'Nelson Mandela',
  citation:'Prison',
  year:'1989'
  },
  {
  quote: "The way to get started is to quit talking and begin doing.",
  source: 'Walt Disney',
  citation:'Disney Land',
  year:'1948'  
  },
  {
  quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
  source: 'Steve Jobs',
  citation:'Harvard',
  year:'2008',
  },
  {
  quote: "If life were predictable it would cease to be life, and be without flavor.",
  source: 'Eleanor Roosevelt',
  citation:'Unknown Location',
  year:'Unknown Year'
  },
  {
  quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
  source: ' Oprah Winfrey',
  citation:'Unknown Location',
  year:'2004'
  }
];


/***
 * `getRandomQuote` function
***/
let number = Math.random()
let locationofInfo = quotes[Math.floor(number*5)];

let getRandomQuote = locationofInfo.quote;
let getRandomQuoteSource = locationofInfo.source;
let getRandomQuoteCitation  = locationofInfo.citation;
let getRandomQuoteYear = locationofInfo.year;
console.log(locationofInfo);
console.log(getRandomQuote);
console.log(getRandomQuoteSource);
console.log(getRandomQuoteCitation);
console.log(getRandomQuoteYear);

let quoteInfo = locationofInfo.source + ', ' + locationofInfo.citation + ', ' + locationofInfo.year
console.log(quoteInfo)
/***
 * `printQuote` function
***/



function printQuote () { 
for(i = 0; i >=0; i++)

document.querySelector('p.quote').innerHTML = getRandomQuote;
document.querySelector('p.source').innerHTML = quoteInfo;
};
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
printQuote();

document.getElementById('load-quote').addEventListener("click", printQuote, false);
