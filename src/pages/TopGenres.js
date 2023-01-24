import { useContext, useEffect, useState } from "react"; 
import NavBar from "../NavBar";
import { accessTokenContext, spotifyApi } from "../Router";

export default function TopGenres() {
  let [genreSeeds, setGenreSeeds] = useState([]);
  let accessToken = useContext(accessTokenContext)[0];

  useEffect(() => {
    if(!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if(!accessToken) return;
    spotifyApi.getMyRecentlyPlayedTracks().then(data => {
      setGenreSeeds(data);
      console.log(genreSeeds);
    });
  }, [accessToken]);

  return (
    <>
      <NavBar accessToken={accessToken} spotifyApi={spotifyApi}/>
      <ul>
     </ul>
    </>
  );
}
