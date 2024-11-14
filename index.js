//Brings in the axios library
const axios = require('axios');

//the function
async function getQuote() {
    try {
        const response = await axios('https://zenquotes.io/api/random'); //Axios to fetch a random quote from the API
        const quote = response.data[0];//Gets the first quote from the response data
        console.log(`Here's a motivational quote for you:\n"${quote.q}" - ${quote.a}`);//Once its done pulling the quote, it will display like this
    } catch (error) {
        console.log("Could not fetch a quote. Try again later."); //If the API fails then this will display
    }
}

//Calls the function to display a quote
getQuote();
