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
        const regex = new RegExp(searchText, 'gi');

        let text = $box.innerHTML;
        let prevText = text;
        text = text.replace(/(<mark class="highlight">|<\/mark>)/gim, '');

        var newText = text.replace(regex, '<mark class="highlight">$&</mark>');
        $box.innerHTML = newText;

        let newCounter = document.getElementsByClassName("highlight")[0].innerHTML.length;
        if (newCounter > counter) {
            counter = newCounter;
        } else {
            $search.value = prevState;
            $box.innerHTML = prevText;
        }
        prevState = $search.value;
    });

});