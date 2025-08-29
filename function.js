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

// function for call history
const historyList = document.getElementById("historyList");
const clearBtn = document.getElementById("clearHistory");

cardCallBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (coincount >= 20) {
      const confirmCall = confirm(
        "📞 Call successful!\n Calling\n Your call is connected."
      );
      if (confirmCall) {
        coincount -= 20;
        coinCountA.textContent = coincount;

        const now = new Date();
        const time = now.toLocaleTimeString();
        const li = document.createElement("li");
        li.className = " mx-5 p-2 bg-white rounded shadow flex justify-between";
        li.textContent = `Call made at ${time}`;
        historyList.appendChild(li);
      }
    } else {
      alert(
        "❌ You don’t have enough coins. You need 20 coins to make a call."
      );
    }
  });
});

clearBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
});
