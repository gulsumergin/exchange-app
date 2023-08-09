https://gulsumergin.github.io/exchange-app/index


this project is written with axaj structure but we can also use:

// 
async function getCurrency(url){
    const response = await fetch(url); // Response Object
    const data = await response.json(); // Json object
    return data;
}
getCurrency("https://api.exchangeratesapi.io/latest")
.then(res => console.log(res));
}

// 
