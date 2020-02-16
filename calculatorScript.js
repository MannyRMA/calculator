/*
    SENG 513 Assignment 2
    Manuel Rodriguez
    Simple calculator using html, css, javascript
    javascript 
*/

// function to insert into the input field
function insert(num)
{
    document.form.textview.value = document.form.textview.value+num
}


// function to evalute the input, uses try catch so that no unusual input can be evaluated
function evaluateInput()
{
    let expression = document.form.textview.value;

    try
    {
        document.form.textview.value = math.evaluate(expression);
    }

    catch
    {
        document.form.textview.value = "err";
    }

}


// function for the CE button
function backspace()
{
    let expression = document.form.textview.value;
    document.form.textview.value = expression.substring(0,expression.length-1);
}


// function for the C (CLEAR) button
function clearField()
{
    let expression = document.form.textview.value;
    document.form.textview.value = expression.substring(0,0);
}