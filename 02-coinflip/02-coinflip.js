var coinFlip = Math.round(Math.random());
var choice = window.prompt("Select Heads or Tails");

/* Assumption:
    heads if coinFlip is 0 
    tails if result is 1 */

var coinFlipResult = coinFlip === 0 ? "heads" : "tails";
// document.write(coinFlipResult + " " + coinFlip + "<br>");

if (coinFlipResult === "heads" && choice.trim().toLowerCase() === "heads") {
    window.alert("The flip was heads and you chose heads...you win!");
} else if (
    coinFlipResult === "heads" &&
    choice.trim().toLowerCase() === "tails"
) {
    window.alert("The flip was heads but you chose tails...you lose!");
} else if (
    coinFlipResult === "tails" &&
    choice.trim().toLowerCase() === "heads"
) {
    window.alert("The flip was tails but you chose heads...you lose!");
} else if (
    coinFlipResult === "tails" &&
    choice.trim().toLowerCase() === "tails"
) {
    window.alert("The flip was tails and you chose tails...you win!");
} else {
    alert("Invalid input!");
}
