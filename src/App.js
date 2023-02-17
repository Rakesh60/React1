import "./App.css";
import Video from "./Components/Video";
import videos from "./Components/data/data";



function App() {
  return (
    <div className="App">
      <div>Videos</div>
      {videos.map((video) => (
        <Video
          type={video.type}
          key={video.id} //crypto.random UUID
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
        ></Video>
      ))}
    </div>
  );
}

export default App;
