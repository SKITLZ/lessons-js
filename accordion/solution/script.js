const accordionTopElArr = document.querySelectorAll('.acc__top');
accordionTopElArr.forEach((topEl) => {
  topEl.addEventListener('click', (event) => {
    const contentEl = event.currentTarget.nextElementSibling;
    contentEl.classList.toggle('open');
  });
});
