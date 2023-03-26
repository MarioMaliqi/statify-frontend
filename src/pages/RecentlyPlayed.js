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
        {recentlyPlayedTracks.map((recent) => {
            return ( 
              <li className="mt-2"key={recent.track.name} style={{color: "#FFFFFF"}}>
                {recent.track.name}
              <ul>
              </ul>
                {recent.played_at}
              </li>
            );
        })}
      </ul>
    </>
  );
}