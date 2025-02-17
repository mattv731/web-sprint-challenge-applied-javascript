import axios from 'axios';
// import { data } from 'msw/lib/types/context';

const Card = (article) => {

  const img = document.createElement('img');
  img.setAttribute('src', article['authorPhoto']);
  const span = document.createElement('span');

  const authorName = article['authorName'];
  span.textContent = `By  ${authorName}`;
  
  const div = [];
  for (let i = 0; i < 4; i++){
    div.push(document.createElement('div'));
  }

  div[0].classList.add('card');
  div[0].appendChild(div[1]);
  div[0].appendChild(div[2]);
  div[0].appendChild(span);

  div[1].classList.add('headline');
  div[1].textContent = article['headline'];
  div[1].addEventListener('click', () => {
    console.log(article['headline'])
  })

  div[2].classList.add('author');
  div[2].appendChild(div[3]);
  div[2].appendChild(span);

  div[3].classList.add('img-container');
  div[3].appendChild(img)

return div[0]
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {
  const appendSpot = document.querySelector(selector);
  axios.get(`http://localhost:5000/api/articles`)

  .then(response => {
    const information = [response.data.articles.bootstrap, response.data.articles.javascript, response.data.articles.jquery, response.data.articles.node, response.data.articles.technology];
    information.forEach(item => {
      item.forEach(element => {
        appendSpot.appendChild(Card(element))
      })
    })

  })
  .catch(error =>
    console.error('error'))
}
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
// }

export { Card, cardAppender }
