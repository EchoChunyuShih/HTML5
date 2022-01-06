function doFirst() {
  //先跟html畫面產生關聯，再建立聆聽事件
  let area = document.getElementById("map");
  let position = new google.maps.LatLng(24.9852833, 121.2209475);
  let options = {
    zoom: 14, //0~22
    center: position,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };

  let map = new google.maps.Map(area, options);
  let marker = new google.maps.Marker({
    // map: map,
    // position: position,

    //object-shotrhand
    map,
    position,
    //title: "where are you?",
    //icon: "../images/punk.jpg",
  });
  marker.setTitle("聖德基督學院");
  marker.setIcon("../images/witch.gif");
}
window.addEventListener("load", doFirst);

// controls 可辨識的 ex:小人
// layers 原本沒有的 ex: marker, 塞車紅線
// services：
