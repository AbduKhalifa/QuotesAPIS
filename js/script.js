
const quote = {
    isLoading: true,
    type: "happiness",
    quote: undefined,
    previousQuote: undefined,

    //Methods 
    getAQuote: async function () {
        this.isLoading = true;
        this.setPreviousQuoteInObject();
        this.controlDisplaySpinner();
        try {
            const res = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${this.type}`, {
                headers: {
                    'X-Api-Key': 'zgrtelXIdbVJEXgsqMoJEhBgE8q2rXsA8KlXvUqN'
                }
            })
            const resposeQoute = await res.json();
            this.quote = resposeQoute[0];
            this.isLoading = false
            this.controlDisplaySpinner();
            this.fillContent(this.quote.author,this.quote.quote)
        } catch (error) {
            if(this.previousQuote){
                this.quote = this.previousQuote;
                this.isLoading = false ;
                this.fillContent(this.quote.author,this.quote.quote)
            }
        }
    },
    setPreviousQuoteInObject:function() {
        this.previousQuote = this.quote
    },
    setPreviousQouteInDOM:function(){
        this.fillContent(this.previousQuote.author,this.previousQuote.quote)
    },
    changeType: function (newType = this.type) {
        this.type = newType;
    },
    controlDisplaySpinner:function(){
        const spinner = document.getElementById("spinner");
        const content = document.getElementById("quote");
        if(this.isLoading){
            spinner.style.display = ""
            content.style.display = "none"
        }else{
            spinner.style.display = "none"
            content.style.display = ""
        }
    },
    fillContent:function(authorName,quote){
        const author = document.getElementById("author");
        const textQuote = document.getElementById("text");
        author.innerHTML = authorName;
        textQuote.innerHTML = quote;
    }
}

quote.getAQuote()


