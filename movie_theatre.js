let movie_name = ['3 idiot','demon slayer','Avenger: end game','stand by me 2','frozen 2']
let movie_picture = ['https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg','http://cdn.shopify.com/s/files/1/0367/9101/products/A2Poster_grande.jpg?v=1605513807','https://images-na.ssl-images-amazon.com/images/I/81%2BNup8-8NL._SL1500_.jpg','https://animeanime.global/wp-content/uploads/2020/10/361169.jpg','https://cdn.europosters.eu/image/750/posters/frozen-2-woods-i81804.jpg']

const d = document.querySelector("");

function addMovie(){
    let name = document.querySelector('.input_name').value;
    movie_name.unshift(name);
    let pic = document.querySelector('.input_picture').value;
    movie_picture.unshift(pic);
    document.querySelector(".movie_name1").innerHTML = movie_name[0];
    document.querySelector(".movie_name2").innerHTML = movie_name[1];
    document.querySelector(".movie_name3").innerHTML = movie_name[2];
    document.querySelector(".movie_name4").innerHTML = movie_name[3];
    document.querySelector(".movie_name5").innerHTML = movie_name[4];
    document.querySelector(".movie_picture1").innerHTML = `<img class="fit" src="${movie_picture[0]}">`;
    document.querySelector(".movie_picture2").innerHTML = `<img class="fit" src="${movie_picture[1]}">`;
    document.querySelector(".movie_picture3").innerHTML = `<img class="fit" src="${movie_picture[2]}">`;
    document.querySelector(".movie_picture4").innerHTML = `<img class="fit" src="${movie_picture[3]}">`;
    document.querySelector(".movie_picture5").innerHTML = `<img class="fit" src="${movie_picture[4]}">`;

}