const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
  (entries) => {
    console.log(entries);
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    /*threshold takes a value between 0 and 1.By default the percentage is 0
     *it means that the element is just about to be visible on the screen when it is
     *going to be intersecting 1 means the element must be 100 percent present on the screen
     *before the animation plays**/
    threshold: 0.5,
  }
);

cards.forEach((card) => {
  observer.observe(card);
});
//observer.observe(cards[0]);
