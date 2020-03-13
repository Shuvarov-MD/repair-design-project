/*document.addEventListener("DOMContentLoaded", event => {
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

});*/


$(document).ready(function () {
  var modal = $('.modal'),
    modalBtn = $('[data-toggle=modal]'),
    closeBtn = $('.modal__close'),
    modalDialog = $(".modal__dialog");


  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  modal.on('click', function (e){
    if (!modalDialog.is(e.target) && modalDialog.has(e.target).length === 0){
      modal.toggleClass('modal--visible');
    }
  });

  $(this).keydown(function (eventObject) {
    if (eventObject.which == 27 && modal.hasClass('modal--visible')) {
      modal.toggleClass('modal--visible');
    }
  });


    //Кнопка наверх
    var btn = $('.button__scroll-top');

    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('button__scroll-top--show');
      } else {
        btn.removeClass('button__scroll-top--show');
      }
    });

    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });


  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  bullets.css('left', prev.width() + 30);
  next.css('left', prev.width() + 25 + bullets.width() + 30 );




});
