console.log("👀")

/ fetch('https://api.kanye.rest')
    .then(function(responseData) {
        let jsonData = responseData.json()
        return jsonData;
    })
    .then(function(jsonData){
        //do stuff
        let quote = jsonData.quote;
        console.log("Love that Data")
        let kanyeQuote = document.createElement('li');            
        kanyeQuote.textContent = quote;
        document.getElementById('quote').appendChild(kanyeQuote);
       
    })
    .catch(function(error) {
        console.log('poo')
        console.log(error)
    })

 