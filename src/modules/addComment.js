const displayComment = (newComment) => {
  let today = new Date().toISOString().slice(0, 10);
  const commentContent = document.querySelector('.result');
  commentContent.innerHTML += `<div>${today} ${newComment.username} : ${newComment.comment}</div>`
};

const addComment = async (newComment, url) => {
  const getURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1PzqD6Qshuxs8IJlxxL7/comments?item_id=${newComment.item_id}`
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(newComment),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then (displayComment(newComment));
}
export default addComment;
