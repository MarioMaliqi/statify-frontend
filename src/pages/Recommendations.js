import { useContext, useEffect, useState } from "react";
import NavBar from "../NavBar";
import { accessTokenContext, spotifyApi } from "../Router";

export default function Recommendations() {
  let accessToken = useContext(accessTokenContext)[0];
  let [genreSeeds, setGenreSeeds] = useState([]);
  
  useEffect(() => {
    if(!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    spotifyApi.getAvailableGenreSeeds().then(data => {
      setGenreSeeds(data.body.genres);
    });
  }, [accessToken]);

  return (
    <>
      <div>
        <NavBar accessToken={accessToken} spotifyApi={spotifyApi}/>
      </div>
    </>
  )
}