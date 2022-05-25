let searchButton = document.querySelector(".search__button");

searchButton.onclick = function (event) {
    event.preventDefault();

    let queryTerm = document.querySelector(".search__input").value;
    fetch('https://api.giphy.com/v1/gifs/search?api_key=xjwp1M9jRfJHXpSHpjBFy6pVumVdducE&q=' + queryTerm + '&limit=5&offset=0&rating=g&lang=en')
        .then(response => response.json())
        .then(apidata => {
            let gifs = apidata.data;

            let gifsContent = "";
            for (let gif of gifs) {
                gifsContent +=
                    `<div class='image'>
                    <img src="${gif.images.fixed_width.url}">
                    </div>`;
            }
            document.querySelector(".gifs").innerHTML = gifsContent;
        })
        .catch(error => console.log(error));
};