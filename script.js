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
  citation:'Unknown',
  year:'1989'
  },
  {
  quote: "The way to get started is to quit talking and begin doing.",
  source: 'Walt Disney',
  citation:'Unknown',
  year:'1948'  
  },
  {
  quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
  source: 'Steve Jobs',
  citation:'Unknown',
  year:'2008',
  },
  {
  quote: "If life were predictable it would cease to be life, and be without flavor.",
  source: 'Eleanor Roosevelt',
  citation:'Unknown',
  year:'Unknown'
  },
  {
  quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
  source: ' Oprah Winfrey',
  citation:'Unknown',
  year:'2004'
  }
]


/***
 * `getRandomQuote` function
***/

let randomNumber = Math.floor(Math.random() * 5 );
console.log('${randomNumber}')

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);