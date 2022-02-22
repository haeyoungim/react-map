import logo from './logo.svg';
import './App.css';
import { useEffect,useRef } from 'react';

const { kakao, cloud } = window;
let mapRef = null;

function MapContainer() {
  mapRef = useRef();
  useEffect(() => {
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(33.45, 126.57),
      level: 3
    };
    var map = new kakao.maps.Map(container, options);
    mapRef.curren = map;
    // 마커삽입
    var markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: markerPosition
    });
    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
  });

  return (
    <div id='map' style={{ width: '500px', height: '400px' }} />
  );
}

function App() {
  //useState, useEffect, useRef
  return (
    <div className="App">
      {MapContainer}
      <button onClick={ ()=>{
       var pos = new kakao.maps.LatLng(33.5, 126.5);
       mapRef.current.setCenter(pos);
      }}>좌표이동</button>
    </div>
  );
}

export default App;