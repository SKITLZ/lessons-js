const plusBtnEl = document.getElementById('plus-btn');
if (plusBtnEl) {
  plusBtnEl.addEventListener('click', () => {
    console.log('plus button clicked');
  });
}

const minusBtnEl = document.getElementById('minus-btn');
if (minusBtnEl) {
  minusBtnEl.addEventListener('click', () => {
    console.log('minus button clicked');
  });
}

document.getElementById('hello-btn').addEventListener('click', () => {
  console.log('hello button clicked');
});
