import { useContext, useEffect, useState } from "react"; 
import NavBar from "../NavBar";
import SpotifyWebApi from "spotify-web-api-node";
import { accessTokenContext } from "../Router";

const spotifyApi = new SpotifyWebApi({
  clientId: "f5ed848b465b4d0493abd385f2729186",
  clientSecret: "68dbc0d503524af684bd7e2967422070",
  redirectUri: "http://localhost:3000",
});

export default function TopTracks() {
  let [topTracks, setTopTracks] = useState([]);
  let [accessToken, setAccessToken] = useContext(accessTokenContext);

  useEffect(() => {
    if(!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
    console.log("first useeffect");
  }, [accessToken]);

  useEffect(() => {
    if(!accessToken) return;
    console.log("second useeffect");
    spotifyApi.getMyTopTracks().then(data => {
      setTopTracks(data.body.items);
    });
  }, [accessToken])

  return (
    <>
      <NavBar accessToken={accessToken} spotifyApi={spotifyApi}/>
      <ul>
        {topTracks.map((track) => {
          console.log(track);
            return( 
              <li key={track.name}>
                {track.name}
                <img alt="" src={track.album.images[2].url}>
                </img>
              </li>
            );
          //}
        })}
     </ul>
    </>
  )
}