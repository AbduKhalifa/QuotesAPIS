

const anotherQuoteButton = document.getElementById("another_quote");
const previousQuoteButton = document.getElementById("previous_quote");
const selection = document.getElementById("selection")




anotherQuoteButton.addEventListener("click", () => {
    quote.getAQuote();
});
previousQuoteButton.addEventListener("click", () => {
    quote.setPreviousQouteInDOM();
});
selection.addEventListener("change", ({ target }) => {
    quote.changeType(target.value)
})