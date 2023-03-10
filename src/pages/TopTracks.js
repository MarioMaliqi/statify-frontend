import { useContext, useEffect, useState } from "react"; 
import NavBar from "../NavBar";
import { accessTokenContext, spotifyApi } from "../Router";

export default function TopTracks() {
  let [topTracks, setTopTracks] = useState([]);
  let accessToken = useContext(accessTokenContext)[0];

  useEffect(() => {
    document.body.style.backgroundColor = "#131516";
  });
  
  useEffect(() => {
    if(!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if(!accessToken) return;
    spotifyApi.getMyTopTracks({
      limit: 50,
      time_range: "long_term"
    }).then(data => {
      setTopTracks(data.body.items);
    });
  }, [accessToken]);

  

  return (
    <>
      <NavBar accessToken={accessToken} spotifyApi={spotifyApi}/>
      <ul>
        {topTracks.map((track) => {
          console.log(track);
            return ( 
              <li key={track.name} style={{color: "#FFFFFF"}}>
                <img alt="" src={track.album.images[2].url}>
                </img>
                  {track.name}
                <br></br>
              </li>
            );
        })}
      </ul> 
    </>
  )
}