let movieList = document.querySelector('.movie_list');
let noResults = document.querySelector('.no_results');
let searchBar = document.querySelector('.search_bar');
let buttonSearch = document.querySelector('.button_search');
let apikey = '6b6ec75b'; // backup - 25851263, 3fb5f5bd

buttonSearch.onclick = function (){
    while (movieList.firstChild){
        movieList.removeChild(movieList.firstChild);
    };

    let searchWords = searchBar.value;
    let url = 'http://www.omdbapi.com/?s=' + searchWords + '&apikey=' + apikey
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {

        if(data.Response === 'False'){
            noResults.classList.remove('hide');
            noResults.innerHTML = data.Error;
        } else {

            noResults.classList.add('hide');

            for(let i = 0; i < data.Search.length; i++){
                if (data.Search[i].Poster === 'N/A'){
                    data.Search[i].Poster = 'img/poster_stub.png';
                };
                let movieCard = document.createElement('div');
                movieCard.classList.add('movie_card');
                movieCard.classList.add('col25');
                movieCard.innerHTML =                         
                            '<div class="content">'+
                                '<div class="poster_cont">'+
                                    '<img class="poster" src="' + data.Search[i].Poster + '" alt=""></div>'+
                                '<h3>' + data.Search[i].Title + '</h3>'+
                                '<p>' + data.Search[i].Year + '</p>'+
                                '<p>' + data.Search[i].Type + '</p>'+
                            '</div>'+
                            '<a href="https://www.imdb.com/title/' + data.Search[i].imdbID + '" class="show_more" target="_blank">Go to IMDB</a>';
                movieList.appendChild(movieCard);
            };

        };
    });
};






    
