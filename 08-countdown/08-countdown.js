var num = parseInt(window.prompt("Enter the number"), 10);
if (isNaN(num)) {
    window.alert("Please enter only numeric value.");
} else if (num < 0) {
    window.alert("Please enter numeric value greater than 0.");
} else {
    for (var i = num; i >= 0; i--) {
        window.document.write(i + "<br>");
    }
}
