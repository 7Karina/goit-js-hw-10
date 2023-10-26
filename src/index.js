fetch('https://api.thecatapi.com/v1/breeds')
  .then(resp => {
    if (!resp.ok) {
      throw new Error();
    }
    return resp.json();
  })
  .then(data => console.log(data))
  .catch(err => console.log(err));
