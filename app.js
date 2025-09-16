'use strict'

document.getElementById('buscarBtn').addEventListener('click', buscarImagens);

function buscarImagens() {
  const raca = document.getElementById('racaInput').value.toLowerCase().trim();
  const url = `https://dog.ceo/api/breed/${raca}/images`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('imagensContainer');
      container.innerHTML = '';

      if (data.status === 'success') {
        data.message.slice(0, 6).forEach(imgUrl => {
          const card = document.createElement('div');
          card.className = 'card';

          const img = document.createElement('img');
          img.src = imgUrl;
          img.alt = raca;

          const caption = document.createElement('p');
       

          card.appendChild(img);
          card.appendChild(caption);
          container.appendChild(card);
        });
      } else {
        container.innerHTML = `<p>Raça não encontrada. Tente novamente.</p>`;
      }
    })
    .catch(error => {
      console.error('Erro:', error);
      document.getElementById('imagensContainer').innerHTML = `<p>Erro ao buscar imagens.</p>`;
    });
}
