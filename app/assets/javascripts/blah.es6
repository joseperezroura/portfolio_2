$(document).on("turbolinks:load", function () {
	console.log("helloooooo!")
	// $(".js-jose").on("click", ScrollToPortfolio);

//
// $(".js-well").mouseover(function() {
//     $(this).animate({ marginTop: 80 });
//     $(this).animate({ marginTop: -15 });
// })

$(function() {

    var quotes = $(".js-quotes");
    var quoteIndex = -1;

    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(700)
            .delay(700)
            .fadeOut(700, showNextQuote);
    }

    showNextQuote();

})();

});


// function ScrollToPortfolio(x){
// 	x.preventDefault();
// 	window.scroll(0, 510)
// }
