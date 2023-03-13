import { useContext, useEffect, useState } from "react";
import NavBar from "../NavBar";
import { accessTokenContext, spotifyApi } from "../Router";

export default function RecentlyPlayed() {
  let [recentlyPlayedTracks, setRecentlyPlayedTracks] = useState([]);
  let accessToken = useContext(accessTokenContext)[0];

  useEffect(() => {
    if(!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    spotifyApi.getMyRecentlyPlayedTracks({
      limit: 50,
      after: 0
    }).then((data) => {
      setRecentlyPlayedTracks(data.body.items);
      console.log(data.body.items);
    });
  }, [accessToken]);

  return (
    <>
      <NavBar accessToken={accessToken} spotifyApi={spotifyApi}/>
      <ul>
        {recentlyPlayedTracks.map((track) => {
            return ( 
              <li key={track.track.name} style={{color: "#FFFFFF"}}>
                {track.track.name}
              </li>
            );
        })}
      </ul>
    </>
  );
}