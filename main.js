const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
var counter = 0;


function changePageNumber(num, total) {
    var css = 'blockquote::after{ content: "' + num + "/" + total + '"; }';
    var style = document.createElement('style');

    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

    document.getElementsByTagName('head')[0].appendChild(style);
}


window.addEventListener("load", function () {

    const $box = document.getElementById('box');
    const $search = document.getElementById('search');
    const $paste = document.getElementById('paste');

    var prevState = "";
    let parCounter = 0;

    let randNumber = randomBetween(0, speeches.length - 1);
    quotes = speeches[randNumber][0]
    let quote = quotes[counter];
    document.getElementById("citation").innerHTML = speeches[randNumber][1];
    changePageNumber(parCounter + 1, quotes.length);

    $box.innerHTML = quote;


    $search.addEventListener('input', (event) => {
        var searchText = event.target.value;
        const regex = new RegExp(searchText, 'i');

        let text = $box.innerHTML;
        let prevText = text;
        text = text.replace(/(<mark class="highlight">|<\/mark>)/gim, '');

        var newText = text.replace(regex, '<mark class="highlight">$&</mark>');
        $box.innerHTML = newText;

        let newCounter = document.getElementsByClassName("highlight")[0].innerHTML.length;
        if (newCounter > counter && $box.innerHTML[0] === "<") {
            counter = newCounter;
            $search.value = document.getElementsByClassName("highlight")[0].innerHTML;
        } else {
            $search.value = prevState;
            $box.innerHTML = prevText;
        }
        prevState = $search.value;

    });

    $paste.addEventListener("keypress", (event) => {
        if (event.keyCode === 13) {
            quotes = prepareText($paste.value);
            prevState = "";
            parCounter = 0;
            $box.innerHTML = quotes[parCounter];
            $search.value = "";
            counter = 0;
        }
    });



    $search.addEventListener('keyup', function (event) {
        if (event.keyCode === 39 || event.keyCode === 13) {
            prevState = "";
            if (++parCounter >= quotes.length) { parCounter = 0; }
            $box.innerHTML = quotes[parCounter];
            $search.value = "";
            counter = 0;
            changePageNumber(parCounter + 1, quotes.length);
        }
    });

});