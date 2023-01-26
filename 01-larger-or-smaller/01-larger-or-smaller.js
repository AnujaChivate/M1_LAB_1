var num1 = parseInt(window.prompt("Enter the first integer number:"), 10);
var num2 = parseInt(window.prompt("Enter the second integer number:"), 10);

if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid integer numbers.");
    window.document.write("Please enter valid integer numbers.");
} else if (num1 > num2) {
    window.document.write(
        "The first integer number " +
            num1 +
            " is larger than the second integer number " +
            num2 +
            ". <br>"
    );
} else if (num1 < num2) {
    window.document.write(
        "The second integer number " +
            num2 +
            " is larger than the first integer number " +
            num1 +
            ".<br>"
    );
} else if (num1 === num2) {
    window.document.write("Both integer numbers are equal. <br>");
}
