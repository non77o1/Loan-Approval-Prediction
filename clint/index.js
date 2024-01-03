console.log('Hi');

function getValues() {
    var inputVal = document.getElementById("loan_amount").value;
    if (inputVal == "") {
        console.log("Please enter a value");
        return;
    }
    alert("The input value is: " + inputVal);
}
