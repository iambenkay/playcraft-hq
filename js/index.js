const tL = document.getElementById('btn');
const list = document.getElementById('menu2');
const close_btn = document.querySelector(".close-btn");

tL.addEventListener('click', () => {
  console.log(list.style.display);
  if (list.style.display == 'none' || list.style.display == '') {
    list.style.display = 'flex';
    list.style.width = '100%';
  } else {
    list.style.display = 'none';
    list.style.width = '0';
  }
});

close_btn.addEventListener('click', () => {
  list.style.display = 'none'
})