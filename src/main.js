//CONTROLS FOR PLAY

document.getElementById("dealBtn").addEventListener("click", deal);

document.getElementById("hitBtn").addEventListener("click", () => {player.hit();});

document.getElementById("standBtn").addEventListener("click", stand);