import React, { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    //컴포넌트가 마운트 될때, 업데이트 될 때 마다 호출되는 함수 (effect)
    const requestOptions = {
      method: 'GET',
      redirect: 'follow' // fetch 를 request 할 때 옵션을 전달.
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostpopular&maxResults=25&key=AIzaSyBCDHhOZnkzAJo-B5JHTtdXD3yZcuIW_Vk", requestOptions)
      .then(response => response.json()) // request를 json으로 변환 하고
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error)); // error 가 발생하면 console 에 error라고 출력

  }, []);// 텅 빈 배열은 최초 한번만 호출된다.

  return <VideoList videos={videos} />
}

export default App;
