// let counter = 0;
// let decrease = document.getElementById('decrease');
// let reset = document.getElementById('reset');
// let increase = document.getElementById('increase');

// decrease.addEventListener('click', function(){
//     document.getElementById('value').innerText = decreaseCounter();
// });
// increase.addEventListener('click', function(){
//     document.getElementById('value').innerText = increaseCounter();
// });
// reset.addEventListener('click', function(){
//     document.getElementById('value').innerText = resetValue();
// });
// function decreaseCounter(){
//     let counterDecrease = --counter;
//     return counterDecrease;
// }
// function increaseCounter(){
//     let counterIncrease = ++counter;
//     return counterIncrease;
// }
// function resetValue(){
//     let resetCounter = counter - document.getElementById('value').innerText;
//     return resetCounter;
// }

// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
console.log(btns);

btns.forEach(function (item) {
    console.log(item);
    item.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    console.log(styles);
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});
