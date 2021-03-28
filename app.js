const colors = ["blue", "purple", "rgba(0, 0, 0", "#a52a2a"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color")

btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    //console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber]
})

function getRandomNumber () {
    return Math.floor(Math.random() * colors.length);
}