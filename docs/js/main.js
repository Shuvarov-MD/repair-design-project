document.addEventListener("DOMContentLoaded", event => {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const modalDialog = document.querySelector('.modal__dialog');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  };


  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);


  document.addEventListener('keydown', event => {
    if(event.key == 'Escape' && modal.classList.contains('modal--visible')) {
      switchModal();
    }
  });

  modal.addEventListener('click', event => {
    const target = event.target;
    const itsModalDialog = target == modalDialog || modalDialog.contains(target);
    const itsCloseBtn = target == closeBtn;
    const modalActive = modal.classList.contains('modal--visible');

    if (!itsModalDialog && !itsCloseBtn && modalActive) {
      switchModal();
    }
  });

});


