/* eslint-disable no-alert */
import NewComment from './newComment.js';
import addComment from './addComment.js';

const comments = async (product) => {
  const cardsContainer = document.querySelector('.app_container');
  const productList = document.querySelector('.app_content');
  console.log(product);
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${process.env.API_KEY}/comments?item_id=${product.id}`;
  const comments = await fetch(url).then((response) => response.json());
        console.log(comments);
        productList.innerHTML += `
        <div class= 'modal-container'>
        <div class="modal" id="exampleModal${product.id}" >
            <div class="modal-content">
              <button class= 'close' type="button">Close</button>
              <div class="modal-body">
                <img src="${product.image}" alt="Sample photo" class="card-image" />
                <h5 class="modal-title" id="exampleModalLabel">${product.name}</h5>
                <h5 class= "comment-head">Add a comment</h5>
                <form class= 'form-content'>
                  <input type="text" class= 'names' id="fname${product.id}" name="${product.id}" placeholder="Your name" autocomplete="off" required>
                  <textarea id="ta${product.id}" class= 'description' name="ta${product.id}" rows="4" cols="50" placeholder="Your insights" required></textarea>
                  <button type="button" class="btn btn-primary btnAddComment">Comment</button>
                </form>
                <div class= 'result'>
                  <h4>Comments</h4>
                </div>
              </div>
            </div>
        </div>
      </div>
        `;



const commentContent = cardsContainer.querySelector('.result');
comments?.forEach((element) => commentContent.innerHTML += `<div>${element.creation_date} ${element.username} : ${element.comment}</div>`)
  cardsContainer.addEventListener('click', (e) => {
    // Comment's URL
    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${process.env.API_KEY}/comments`;

    if (e.target.classList.contains('btnAddComment')) {
      if (e.target.parentElement[0].value !== '' && e.target.parentElement[1].value) {
        // Your name
        const username = e.target.parentElement[0].value;
        // Your insights
        const comment = e.target.parentElement[1].value;
        // ID object
        const newComment = new NewComment(username, comment, product.id);

        // Add comment in API
        addComment(newComment, url);

        // Clear inputs
        e.target.parentElement[0].value = '';
        e.target.parentElement[1].value = '';
      } else {
        alert('Insert a comment');
      }
    }
  });
};

export default comments;
