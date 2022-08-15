//GETTING BUTTONS
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

// 
apiQuote = [];

// show loading
// this will help us to show the loader and hide the quote container when we refresh the page
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true; 
}

// hide loading
// this will help us to hide the loader and display thq quote container
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;

}

// SHOW NEW FUNCTION
/*
this function helps us to get a random quote from the api 
math floor function wil generate the quote one by one 
*/
function newQuote() {
  loading();
  const quote = apiQuote[Math.floor(Math.random() * apiQuote.length)];
  // CHECK IF AUTHOR FIELD IS BLANK AND REPLACE IT WITH UNKNOWN
  if (!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }
  // CHECK IF QUOTE IS LONGER THAN 120 CHARACTERS AND ADD A CLASS TO IT
  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  }else{
    quoteText.classList.remove("long-quote");
  }

  // SET QUOTE, HIDE LOADER
  quoteText.textContent = quote.text;
  // this function will hide the loader and display the quote container 
  // when the loader finish loading
  complete();
};

// GETTING THE API URL
/*
async function will not stop the browser the load whenever will refresh the apge 
*/
async function getQuote() {
  loading();
  const apiUrl = "https://type.fit/api/quotes";
  const response = await fetch(apiUrl);
  apiQuote = await response.json();
  console.log(apiQuote[1]);
  newQuote();

  try {
  } catch (error) {
    // CATCH ERROR HERE
  };
};

// TWEET QUOTE
// this will help us to post the quote  twitter
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
  
}

// EVENT LISTENERS
// this will help us to get the new quote and the tiwtter quote
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

// ON LOAD
getQuote();


