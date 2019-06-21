const url = 'https://jsonplaceholder.typicode.com/users';


const jsonApi = () => {
  return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      return myJson
    });

}

export default jsonApi;

