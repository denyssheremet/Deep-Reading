const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
var counter = 0;




window.addEventListener("load", function () {

    const $box = document.getElementById('box');
    const $search = document.getElementById('search');

    var prevState = "";
    let quote = quotes[randomBetween(0, quotes.length - 1)];
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

    window.addEventListener('keyup', function(event) {
        if (event.keyCode === 39 || event.keyCode === 13 ) {
            prevState = "";
            let quote = quotes[randomBetween(0, quotes.length - 1)];
            $box.innerHTML = quote;
            $search.value = "";
            counter = 0;
        }
      });

});