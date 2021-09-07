$(function()
 {
    $(".input").on("change keyup",calculateTotal)
})

function tipPercent(percentAmount)
{
    let tipPercentage = percentAmount;

    return tipPercentage;
}

function calculateTotalExcludingTax()
{
    let totalExcludingTax = ($("#billAmount").val() / $("#numberOfPersons").val());

    return totalExcludingTax;
}

function calculateTotal()
{
    let tipPerPerson = (tipPercent() * calculateTotalExcludingTax());

    alert(tipPerPerson);
}
