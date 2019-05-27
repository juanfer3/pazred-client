import axios from 'axios';

// const URL = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=d6c8cd5b2e080637e0f3c77eeb023bf5&format=json'
const URL = 'http://localhost/pazred/web/index.php/api/data-files/';

var config = {
    headers: {
        //'Content-Type': 'application/json',
        'Content-Type': 'multipart/form-data',
    }
  };

function newGalery(galery) {
    console.log(galery);
    /** return posts*/
    return axios.post(URL + 'create', galery)
        .then(function(response){
        console.log(response);
        return response.data;
    })
}

export {
    newGalery
}