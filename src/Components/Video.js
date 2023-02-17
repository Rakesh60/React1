import "./Video.css";

function Video({type,id,title, views, channel = "Channel name", time, verified }) {
  return (
    <>
      <div className="container">
        <div className="pic">
          <img src={`https://picsum.photos/id/${id}/240/160`} alt="placeimg"></img>
        </div>
        <div className="title">{title}</div>

        <div className="channel">
          {channel} {verified && "✔️"}
        </div>
        <div className="views">
          {views} views <span>.</span> {time}{" "}
        </div>
        <div>
          <ol type={type}>
              <li>Hello</li>
              <li>World</li>
              <li>Hello</li>
              <li>World</li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default Video;
