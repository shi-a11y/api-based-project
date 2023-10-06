const quoteText=document.querySelector(".quote"),
authorname=document.querySelector(".author.name"),
quoteBtn=document.querySelector("button");
soundbtn=document.querySelector(".sound"),
copybtn=document.querySelector(".copy"),
twitterbtn=document.querySelector(".twitter"),

function randomquote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText="loading quote...";
   fetch("https://api.quotable.io/random").then(res=> res.json()).then(result=>{
    
    quoteText.innertext = result.content;
    authorname.innertext = result.author;
    quoteBtn.innerText="New quote";
    quoteBtn.classList.remove("loading");
    
    
   });
}


soundbtn.addEventListener("click",()=>{

let utterance=new SpeechSynthesisUtterance('${quoteText.innertext} by ${authorname.innertext} ');
speechSynthesis.speak(utterance);

});
quoteBtn.addEventListener('click',randomquote);

copybtn.addEventListener("click",()=>{

    navigator.clipboard.writeText(quote.innerText);
    });

    
twitterbtn.addEventListener("click",()=>{

    let tweeturl='https://twitter.com/intent/tweet?url=${quote.innerText}';
    window.open(tweeturl,"_blank");
    });






quoteBtn.addEventListener("click", randomquote);