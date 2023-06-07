// let response = fetch("https://gauravgitacc.github.io/postAppData/auctionData.json")
// // fetch return promise and that promise will indicate the status of network call : SUCCESS OR FAILURE

// // If success :
// response.then((serverResponse) => {
// // serverResponse is a instance of Response class. data is in encoded format. so, =>

// let data = serverResponse.json(); // json is method of Response class. so, we can access that method using dot operator
// // data is of pormise again, this promise is resolved when decoding of data is done successfully by json.

// data.then((result) => {
//     console.log(result);
// })

// data.catch ((error) => {
//     console.log("something error happen")
// })
// });

// response.catch((error) => {
//     console.log("some error", error)
// });

/* other way to fetch is (we will use this method because it is straight forward) */

const cardsContainer = document.getElementsByClassName("cards-container")[0];

function addDataOnToUI(resultList) {
    // takes care of DOM manupulation
    for (let i = 0; i < resultList.length; i++) {
        let card = resultList[i];

      let innerCard = `
                      <div class="top">
                          <div class="status">
                              <b class="status-chip ${card.status.toLowerCase()}">${card.status}</b>
                              <span class="case-number">${card.caseNumber}</span>
                          </div>
                          <span class="date">${card.date}</span>
                      </div>
                      <div class="bottom">
                          <b class="from-location">${card.fromLocation}</b>
                          <span class="to-location">${card.toLocation}</span>
                      </div>
  
                      <span class="price">${card.fare}</span>
                      `;
  
      let cardContainer = document.createElement("div");
      cardContainer.className = "card";
      cardContainer.innerHTML = innerCard;
      cardContainer.addEventListener("click", () => {
        document.cookie = `card=${JSON.stringify(card)}; path=/auction.html`
        window.location.href = "http://127.0.0.1:5500/auction.html"
      })
      cardsContainer.append(cardContainer);
    }
  }

async function fetchData() {
  try {
    const response = await fetch(
      "https://gauravgitacc.github.io/postAppData/auctionData.json"
    );
    //---> this return a promise. so, I will attach a await keyword to wait untill the promise is settled
    //     down i.e. either success or failure
    let data = await response.json();
    console.log(data)
    addDataOnToUI(data);
    //---> now control only come to line no 31 when 27 line is settled
  }
  catch(error) {
    alert("Something error occured", error);
  }
}

fetchData();


