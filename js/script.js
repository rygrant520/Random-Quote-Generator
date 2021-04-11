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
  year:'1989',
  more_info:'https://en.wikipedia.org/wiki/Nelson_Mandela'
  },
  {
  quote: "The way to get started is to quit talking and begin doing.",
  source: 'Walt Disney',
  citation:'Disney Land',
  year:'1948',
  more_info: 'https://en.wikipedia.org/wiki/Walt_Disney'  
  },
  {
  quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
  source: 'Steve Jobs',
  citation:'Harvard',
  year:'2008',
  more_info:'https://en.wikipedia.org/wiki/Steve_Jobs'
  },
  {
  quote: "If life were predictable it would cease to be life, and be without flavor.",
  source: 'Eleanor Roosevelt',
  citation:'',
  year:'',
  more_info:'https://en.wikipedia.org/wiki/Eleanor_Roosevelt'
  },
  {
  quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
  source: ' Oprah Winfrey',
  citation:'',
  year:'2004',
  more_info:'https://en.wikipedia.org/wiki/Oprah_Winfrey'
  }
];


/***
 * `getRandomQuote` function
***/



function getRandomQuote (){
   const randomNumber = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomNumber];
    return randomQuote;
    

};

//console.log(getRandomQuote())
  
  
  
  /***
   * `printQuote` function
  ***/

  
  
  function printQuote() {
  randomColor()
  const randomQuote_object = getRandomQuote();
  let htmlString = `
    <p class= 'quote'> ${randomQuote_object.quote} </p>
    <p class= 'source'> ${randomQuote_object.source}
      
`
{
if (randomQuote_object.citation){
  htmlString += `<span class= 'citation'> '${randomQuote_object.citation}' </span>`;
}
if (randomQuote_object.year){
  htmlString += `<span class= 'year'> '${randomQuote_object.year}' </span>`;
} 

htmlString += `
</p><br>
<h1><a href= '${randomQuote_object.more_info}'> Learn About ${randomQuote_object.source} </a></h1>`


document.getElementById('quote-box').innerHTML = htmlString;


}

  };

  

const randomPrint = setInterval(printQuote, 10000);






function randomColor(){

let colorPick = [
'#E52424',
'#243EE5',
'#C2A453', 
'#D591CA',
'#21D567'
]
let color_Number = Math.floor(Math.random() * colorPick.length);
let color_Choice = colorPick[color_Number];
document.body.style.backgroundColor = color_Choice;

}






  /***
   * click event listener for the print quote button
   * DO NOT CHANGE THE CODE BELOW!!
  ***/
  
  document.getElementById('load-quote').addEventListener("click", printQuote, false);
