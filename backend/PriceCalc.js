function calculatePrice() {
    var s = document.getElementById("salary").value;
    var d = document.getElementById("days").value;
    console.log("Calculating price")
    console.log(s)
    console.log(d)
    let finalPrice = 0;
    dailyRate = s/365;
    finalPrice = dailyRate * d; //rounded

    if (finalPrice>=100){
        finalPrice = Math.floor(finalPrice/100)*100
    } else {
        finalPrice = Math.round(finalPrice)
    }
    
    document.getElementById("finalPrice").innerHTML = finalPrice;
  }