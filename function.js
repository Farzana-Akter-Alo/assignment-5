// function for nav bar
const heartCountA = document.getElementById("heartcount");
const coinCountA = document.getElementById("coincount");
const copyCountA = document.getElementById("copycount");

let heartcount = 0;
let coincount = 100;
let copycount = 0;

const cardHearts = document.querySelectorAll(".card-heart");
const cardCallBtns = document.querySelectorAll(".card-call");
const cardCopyBtns = document.querySelectorAll(".card-copy");

cardHearts.forEach((btn) => {
  btn.addEventListener("click", () => {
    heartcount++;
    heartCountA.textContent = heartcount;
  });
});

// fuction for card
cardCopyBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card");
    const textToCopy = card.querySelector("span").textContent;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        copycount++;
        copyCountA.textContent = copycount;
        alert(`Copied"${textToCopy}" successfully!`);
      })
      .catch((err) => console.log(err));
  });
});
