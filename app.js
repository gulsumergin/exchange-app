// 1- select change button and add event listener

document.getElementById("change").addEventListener("click", change);


// 2-  create a function for the ajax and external api using process to get a request.. whatever

function change(){

  const xhr = new XMLHttpRequest();
  
  xhr.open("GET", "https://api.exchangerate.host/latest");


  // we don't need true since it is already asynchronous


  xhr.onload = function(){
    if(this.status){ // Check if the status code is 200 (OK)

      const response = JSON.parse(this.responseText);

      const rate = response.rates.TRY;
      const amount = Number(document.getElementById("amount").value);

      document.getElementById("tl").value = amount*rate;
      // console.log(amount * rate); // bunu aldıktan sonra console'da görebiliyoruz ama input alanında ui da da görmek istersek oraya yazmamız lazım (bu ilk haliydi üstteki hali güncel)


      // console.log(response.rates.TRY);  // response yazdırdıktan sonra içinden rates yazanı aldık bunu yapabiliriz istersek 
      // response 'u json objesi olarak almak istiyorum





      // console.log(this.responseText);  ilk console'a yazdırdım api geldi mi neler var bir görmek için 
    }
  }

  xhr.onerror = function() {
    console.log("Request failed.");
  };

  xhr.send();

}