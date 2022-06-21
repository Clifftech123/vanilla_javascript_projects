// 







// dark mood section 
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener("click", (e) => {
    e.preventDefault();
    themeToggle.classList.toggle('fa-sun')

    if (themeToggle.classList.contains('fa-sun')) {
        document.body.classList.add('active');
    }
    else {
        document.body.classList.remove('active');
    }
});


// ============API QUOTE SECTION ===================
let dataApi =[];
// show a new quote 
function NewQuote() {
    const quote = dataApi[Math.floor(Math.random() * dataApi.length)];
    console.log(quote);
}''

async function getQuote() {
   let url = "https://type.fit/api/quotes";
    try {
    const response = await fetch(url);
         dataApi = await response.json();
        NewQuote();
    } catch (error) {
    // Error go here 
 }
}

getQuote();





