const handleError = (errorMessage) => {
    window.alert(errorMessage);
  };

const apiInfo = {
    api: 'https://api.github.com/users/',
    endpoint: '/repos',
}

function createRepoElement({ name, html_url }) {
    const li = document.createElement('li');
    li.innerHTML = `<a href=${html_url}>${name}</a>`
    return li;
}

function buttonResult() {
    document.querySelector('#lista-repo').innerHTML = '';
    const mid = document.getElementById('input').value;
    const url = `${apiInfo.api}${mid}${apiInfo.endpoint}`;
    fetch(url)
    .then(response => response.json())
    .then((object) => {
      if (object.error) {
        throw new Error(object.error);
      } else {
        object.forEach((item) => {
          document.getElementById('lista-repo')
          .appendChild(createRepoElement(item));
        });
      }
    })
    .catch(error => handleError(error));
};
