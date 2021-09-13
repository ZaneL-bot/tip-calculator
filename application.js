// var script = document.createElement('script');
// script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
// script.type = 'text/javascript';
// document.getElementsByTagName('head')[0].appendChild(script);

// $(function() //Function will calculate as the HTML classes input are updated
//  {
//     $(".input").on("change keyup",calculateTotal)
// })

function tipPercent(percentAmount) //When radio button is pressed it will store the value of percentage chosen and return once called
{
    let tipPercentage = percentAmount;

    return tipPercentage;
}

function calculateTotalExcludingTax() //Function will calculate the total bill per person excluding taxes and stores it in variable
{
    let totalExcludingTax = ($("#billAmount").val() / $("#numberOfPersons").val());

    return totalExcludingTax;
}

function calculateTotal()
{
    let tipPerPersons = (tipPercent() * calculateTotalExcludingTax()); //Calls functions and multiply it to give the total tip per person
    $("#tipPerPerson").text(tipPerPersons); //Will store the value and display the value
    let totalPerPerson = (tipPerPersons + calculateTotalExcludingTax()); //Will add the total bill and tip per person
    $("totalPerPerson").text(totalPerPerson); //Will store the value and display the value
}