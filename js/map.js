ymaps.ready(init);
function init(){

    var myMap = new ymaps.Map("map", {
        center: [56.895555, 60.637315],
        zoom: 17,
        controls: []
    });

    var coords = [
        [56.895555, 60.637315],
    ];
    
    var myCollection = new ymaps.GeoObjectCollection({}, {
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: './img/marker.svg',
        iconImageSize: [58, 73],
        iconImageOffset: [-29, -73]
    });

    for (var i = 0; i < coords.length; i++) {
        myCollection.add(new ymaps.Placemark(coords[i]));
    }
    
    myMap.geoObjects.add(myCollection);

    myMap.behaviors.disable('scrollZoom');
}