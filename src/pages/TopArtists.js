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
    spotifyApi.getMyTopArtists({
      limit: 50,
      time_range: "long_term"
    }).then(data => {
      setTopArtists(data.body.items);
    });
  }, [accessToken]);

  return (
    <>
      <NavBar accessToken={accessToken} spotifyApi={spotifyApi}/>
      <ol>
        {topArtists.map((artist) => {
            console.log(artist);
            return ( 
              <li className="mt-2" key={artist.name} style={{color: "#FFFFFF"}}>
                <img alt="" src={artist.images[2].url} width="95" height="95">
                </img>
                <p>
                  {artist.name}
                </p>
              </li>
            );
        })}
      </ol> 
    </>
  )
}