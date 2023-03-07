import { useContext, useEffect, useState } from "react";
import NavBar from "../NavBar";
import { accessTokenContext, spotifyApi } from "../Router";

export default function TopArtists() {
  let [topArtists, setTopArtists] = useState([]);
  let accessToken = useContext(accessTokenContext)[0];

  useEffect(() => {
    if(!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if(!accessToken) return;
    spotifyApi.getMyTopArtists().then(data => {
      setTopArtists(data.body.items);
    });
  }, [accessToken]);

  return (
    <>
      <NavBar accessToken={accessToken} spotifyApi={spotifyApi}/>
      <ul>
        {topArtists.map((artist) => {
            console.log(artist);
            return ( 
              <li key={artist.name}>
                <img alt="" src={artist.images[2].url}>
                </img>
                {artist.name}
              </li>
            );
        })}
     </ul>
    </>
  )
}