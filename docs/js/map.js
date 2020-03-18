//Карта Yandex
ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [47.244722, 39.723183],
          zoom: 17
      }, {
          searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Наш офис',
          balloonContent: 'Вход с ул. Нансена'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'img/marker.png',
          // Размеры метки.
          iconImageSize: [32, 32],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-16, -32]
      });

  myMap.geoObjects
      .add(myPlacemark);
});