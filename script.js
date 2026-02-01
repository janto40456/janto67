fetch("http://localhost:3000/games")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("game-list");

    data.forEach(game => {
      const div = document.createElement("div");
      div.className = "game";
      div.innerHTML = `
        <h2>${game.name}</h2>
        <p>แรงค์: ${game.rank}</p>
        <p>ราคา: ${game.price} บาท</p>
        <button>ติดต่อซื้อ</button>
      `;
      list.appendChild(div);
    });
  });
