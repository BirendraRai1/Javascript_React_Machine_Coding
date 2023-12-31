const container = document.querySelector(".container");

// bubbling
container.addEventListener("click", function (e) {
  const targetElem = e.target;
  const isreply = targetElem.classList.contains("reply");
  // if isreply is present create a input and a button
  if (isreply) {
    //  < !-- < div class="comment-reply-container" >
    //     <input type="text" placeholder="write your comment">
    //         <button class="btn-submit">submit</button>
    //     </>
    // -->

    createReplyInput(e);
  } else {
    const isSubmit = targetElem.classList.contains("btn-submit");
    // create the reply
    if (isSubmit == false) return;
    createComment(e);
  }
});

function createComment(e) {
  // <div class="comment-container">
  //           <div class="comment-card">
  //             <h3 class="comment_text">I am Good</h3>
  //             <div class="reply">Reply</div>
  console.log(
    "e.target inside createComment is",
    e.target.parentNode.children[0]
  );
  const commentContainer = document.createElement("div");
  commentContainer.setAttribute("class", "comment-container");
  const input = e.target.parentNode.children[0];
  console.log("input.value", input.value);
  commentContainer.innerHTML = ` <div class="comment-card">
            <h3 class="comment_text">${input.value} ? </h3><div class="reply">Reply</div>
        </div>`;
  const commentReplyBox = e.target.parentNode;
  const commentCard = commentReplyBox.parentNode;
  commentCard.replaceChild(commentContainer, commentReplyBox);
}

function createReplyInput(e) {
  const fragment = document.createDocumentFragment();
  const replyContainer = document.createElement("div");
  const input = document.createElement("input");
  const button = document.createElement("button");

  replyContainer.setAttribute("class", "comment-reply-container");

  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "write your comment");
  button.setAttribute("class", "btn-submit");
  button.textContent = "submit";

  replyContainer.appendChild(input);
  replyContainer.appendChild(button);
  fragment.appendChild(replyContainer);
  console.log(
    "e.target.parentNode inside createReplyInput",
    e.target.parentNode
  );

  e.target.parentNode.appendChild(fragment);
}
