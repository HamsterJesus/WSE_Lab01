// handling the submit button through the API
$(document).ready(function() { //don't forget this (dom shinanigans)
    $('#submit').click(handleClick);
    $('#storeQuote').click(storeQuote);
});

function handleClick() {
    var salary = $('#salary').val();
    var days = $('#days').val();

    var url = "/api/getPrice?"+"salary="+salary+"&days="+days;
    console.log(url)

    $.ajax(
        {url: url,
        success: function(finalPrice){
            console.log("API returned price:", finalPrice);
            $("#finalPrice").html(finalPrice);
        }
    });
    return false;
}

function storeQuote() {
    var salary = $('#salary').val();
    var days = $('#days').val();
    var quoteName = $('#quoteName').val();

    var url = "/api/getQuote"+"quoteName="+quoteName+"salary="+salary+"&days="+days;
    console.log(url)

    $.ajax(
        {url: url,
        success: function(finalPrice){
            console.log("API returned price:", finalPrice);
            $("#finalPrice").html(finalPrice);
        }
    });
    return false;
}

