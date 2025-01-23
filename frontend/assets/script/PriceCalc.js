// handling the submit button through the API
$(document).ready(function() { //don't forget this (dom shinanigans)
    $('#budgetSubmit').click(handleClick);
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
