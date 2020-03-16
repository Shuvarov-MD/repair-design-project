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
  var mySwiperProjects = new Swiper ('.projects__swiper-container', {
    loop: true,
    pagination: {
      el: '.projects__swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.projects__swiper-button-next',
      prevEl: '.projects__swiper-button-prev',
    },
  });

  var next = $('.projects__swiper-button-next');
  var prev = $('.projects__swiper-button-prev');
  var bullets = $('.projects__swiper-pagination');


  bullets.css('left', prev.width() + 30);
  next.css('left', prev.width() + 25 + bullets.width() + 30);



  function mediaSize() {
    var swiperСontainer = $('.projects__swiper-container');
		if (window.matchMedia('(max-width: 992px)').matches) {
      prev.css('left', swiperСontainer.width()*0.3);
      bullets.css('left', prev.width() + 30 + swiperСontainer.width()*0.3);
      next.css('left', prev.width() + 25 + bullets.width() + 30 + swiperСontainer.width()*0.3);
      if (window.matchMedia('(max-width: 570px)').matches) {
        prev.css('left', swiperСontainer.width()*0.2);
        bullets.css('left', prev.width() + 30 + swiperСontainer.width()*0.2);
        next.css('left', prev.width() + 25 + bullets.width() + 30 + swiperСontainer.width()*0.2);
      }
    } else {
      prev.removeAttr('style');
      bullets.css('left', prev.width() + 30);
      next.css('left', prev.width() + 25 + bullets.width() + 30);
		}
  };

  mediaSize();
	window.addEventListener('resize', mediaSize, false);










  var mySwiperSteps = new Swiper ('.steps__swiper-container', {
    loop: true,
    pagination: {
      el: '.steps__swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.steps__swiper-button-next',
      prevEl: '.steps__swiper-button-prev',
    },
  });

  var nextStep = $('.steps__swiper-button-next');
  var prevStep = $('.steps__swiper-button-prev');
  var bulletsStep = $('.steps__swiper-pagination');

  nextStep.css('left', prevStep.width() + 25 + bulletsStep.width() + 30);
  bulletsStep.css('left', prevStep.width() + 30);



$(".slide-1").click(function(){
  mySwiperSteps[0].slideTo(1);
  mySwiperSteps[1].slideTo(1);
});

$(".slide-2").click(function(){
  mySwiperSteps[0].slideTo(2);
  mySwiperSteps[1].slideTo(2);
});

$(".slide-3").click(function(){
  mySwiperSteps[0].slideTo(3);
  mySwiperSteps[1].slideTo(3);
});

$(".slide-4").click(function(){
  mySwiperSteps[0].slideTo(4);
  mySwiperSteps[1].slideTo(4);
});

$(".slide-5").click(function(){
  mySwiperSteps[0].slideTo(5);
  mySwiperSteps[1].slideTo(5);
});

$(".slide-6").click(function(){
  mySwiperSteps[0].slideTo(6);
  mySwiperSteps[1].slideTo(6);
});


$(".toggle-button__content").click(function(e) {
  e.preventDefault();
  $(".toggle-button__content").removeClass('toggle-button__content--active');
  $(this).addClass('toggle-button__content--active');
})




});
