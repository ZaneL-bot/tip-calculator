function tipPercent() //When radio button is pressed it will store the value of percentage chosen and return once called
{
    $("#hiddenPercentage").val(this.value)
}

function calculateTotalExcludingTax() //Function will calculate the total bill per person excluding taxes and stores it in variable
{
    let totalExcludingTax = ($("#billAmount").val() / $("#numberOfPersons").val());
    return totalExcludingTax;
}

function calculateTotal()
{
    let tipPercentage = $("#hiddenPercentage").val();
    let tipPerPersons = (tipPercentage * calculateTotalExcludingTax()); //Calls functions and multiply it to give the total tip per person
    $("#tipPerPerson").val(tipPerPersons); //Will store the value and display the value
    let totalPerPerson = (tipPerPersons + calculateTotalExcludingTax()); //Will add the total bill and tip per person
    $("#totalPerPerson").val(totalPerPerson); //Will store the value and display the value
}