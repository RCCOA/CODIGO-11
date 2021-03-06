// const promesa = new Promise(function(resolve, reject) {
//   setTimeout(function(){
//     reject([0,1,2,3]);
//     // resolve(true)
//   }, 3000)
// });

// console.log(promesa)

// promesa
//   .then((response) => {
//     console.log('response',response);
//   })
//   .catch((err) => {
//     console.log('error', err);
//   });

//   fetch('https://swapi.dev/api/people')
//   .then((resolve) => {
//     return resolve.json();
//   })
//   .then((people) => {
//     console.log('people', people);
//   })
//   .catch((err) => {
//     console.log('error en promesa', err);
//   });
// console.log('pokemon', pokemon);

async function main() {
  function createPokemon(pokemons) {
    pokemons.results.map(async (pokemon) => {
      const response = await fetch(pokemon.url);
      const pokemonDetail = await response.json();
      const container = document.querySelector('#container');

      let article = document.createElement('article');
      article.innerHTML = `
        <figure>
          <img src=${pokemonDetail.sprites.front_default} alt=${pokemonDetail.name}/>
        </figure>
        ${pokemonDetail.name}
      `;

      article.onclick = function () {
        container.innerHTML = '';
        console.log('pokemonDetail', pokemonDetail);

        container.appendChild(article);
      };

      container.appendChild(article);
      //console.log('pokemon', pokemon);
    });
  }

  const responseJsonPokemons = await fetch(
    'https://pokeapi.co/api/v2/pokemon/'
  );
  const responsePokemons = await responseJsonPokemons.json();
  createPokemon(responsePokemons);
  console.log('responsePokemons', responsePokemons);


  // fetch('https://pokeapi.co/api/v2/pokemon/')
  //   .then((resolve) => {
  //     return resolve.json();
  //   })
  //   .then((pokemon) => {
  //     createPokemon(pokemon);
  //   })
  //   .catch((err) => {
  //     console.log('error en promesa', err);
  //   });
}

main();

async function prueba () {
  const promesa = new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolver([0,1,2,3,4]);
    }, 2000);
  });

  try {
    const response = await promesa;
    console.log('response', response);
  } catch (e) {
    console.log('error', e);
  }

  // promesa
  // .them ((response) => {
  //   console.log('response', response);
  // })
  // .catch((err) => {
  //   console.log('error', err);
  // });
}

prueba();