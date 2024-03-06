let myFirstPromise =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({movies: [
            {id: 1, title: "블랙위도우"},
            {id: 2, title: "엔드게임"},
            {id: 3, title: "아이언맨"},
        ]
    })}, 2000);
});

myFirstPromise.then(
    result => {
        result.movies.forEach(function(movie) {
            console.log(movie);
        })
    },

    error => {
        console.log(error);
    }
)