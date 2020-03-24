
var check_if_load = false;

var myMapTemp, myPlacemarkTemp;


function init () {
  var myMapTemp = new ymaps.Map("map", {
    center: [47.244722, 39.723183],
    zoom: 17,
    controls: ['zoomControl', 'fullscreenControl'] 
  });

  myMapTemp.behaviors.disable(['scrollZoom']);

  var myPlacemarkTemp = new ymaps.Placemark([47.244722, 39.723183], {
      balloonContent: "Наш офис",
  }, {

      iconLayout: 'default#imageWithContent',

      iconImageHref: 'img/marker.png',

      iconImageSize: [32, 32],

      iconImageOffset: [-16, -32],
  });
  myMapTemp.geoObjects.add(myPlacemarkTemp);

  var layer = myMapTemp.layers.get(0).get(0);

}

function waitForTilesLoad(layer) {
  return new ymaps.vow.Promise(function (resolve, reject) {
    var tc = getTileContainer(layer), readyAll = true;
    tc.tiles.each(function (tile, number) {
      if (!tile.isReady()) {
        readyAll = false;
      }
    });
    if (readyAll) {
      resolve();
    } else {
      tc.events.once("ready", function() {
        resolve();
      });
    }
  });
}

function getTileContainer(layer) {
  for (var k in layer) {
    if (layer.hasOwnProperty(k)) {
      if (
        layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
        || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
      ) {
        return layer[k];
      }
    }
  }
  return null;
}

function loadScript(url, callback){
  var script = document.createElement("script");

  if (script.readyState){
    script.onreadystatechange = function(){
      if (script.readyState == "loaded" ||
              script.readyState == "complete"){
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = function(){
      callback();
    };
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}
var ymap = function() {
  $('.ymap-container').mouseenter(function(){
      if (!check_if_load) {
        check_if_load = true;
        loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function(){
           ymaps.load(init);
        });
      }
    }
  );
}

$(function() {
  ymap();

});