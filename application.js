let totalExcludingTax = 0;
let tipPercentage = 0;

function tipPercent(percentAmount)
{
    tipPercentage = percentAmount;
}

function calculateTotalExcludingTax()
{
    totalExcludingTax = ($("#billAmount").val() / $("#numberOfPersons").val());
}

function tipPerPersonCalculation()
{
    let tipPerPerson = (totalExcludingTax * tipPercentage);
    alert(tipPerPerson);
    //$("#tipPerPerson").text(tipPerPerson);
}