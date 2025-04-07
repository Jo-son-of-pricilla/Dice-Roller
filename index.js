// function rolldice(){
//     const numOfdice = document.getElementById("numOfDice").value;
//     const diceResult = document.getElementById("diceResult");
//     const diceImages = document.getElementById("diceImages");
//     const value = [];
//     const image = [];

//     for(let i = 0; i < numOfdice; i++){
//         const value = Math.floor(Math.random() * 6) + 1;
//         value.push(value);
//         image.push(`<img src="assets/${value}.png">`);
//     }

//     diceResult.textContent =`dice: ${value.join(',')}`;
// }


// DICE ROLLER PROGRAM

function rollDice(){

    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="assets/${value}.png" alt="Dice ${value}">`);
    }

    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}