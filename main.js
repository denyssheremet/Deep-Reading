const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));


window.addEventListener("load", function () {

    const $box = document.getElementById('box');
    const $search = document.getElementById('search');


    let quote = quotes[randomBetween(0, quotes.length-1)];
    $box.innerHTML = quote;



    $search.addEventListener('input', (event) => {
        const searchText = event.target.value;
        const regex = new RegExp(searchText, 'gi');

        let text = $box.innerHTML;
        text = text.replace(/(<mark class="highlight">|<\/mark>)/gim, '');

        const newText = text.replace(regex, '<mark class="highlight">$&</mark>');
        $box.innerHTML = newText;
    });

});