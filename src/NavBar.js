import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from'./transparent-green.png'

export default function NavBar({ accessToken, spotifyApi }) {
  let [profilePicture, setProfilePicture] = useState("");
  let [userName, setUserName] = useState("");

  useEffect(() =>  {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken])

  useEffect(() => { 
    if(!accessToken) return;
    spotifyApi.getMe().then((data) => {
      setProfilePicture(data.body.images[0].url);
    });
  }, [accessToken]);

  useEffect(() => {
    if(!accessToken) return;
    spotifyApi.getMe().then((data) => {
      setUserName(data.body.display_name);
    })
  }, [accessToken])

  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img src={logo} width="60" height="60" class="d-inline-block align-top" alt=""></img>
          <a className="navbar-brand" href="#">Statify</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
         <Link className="nav-link" to="/toptracks">Top Tracks</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/topartists">Top Artists</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/recentlyplayed">Recently Played</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/recommendations">Recommendations</Link>
      </li>
    </ul>
  </div>
</nav>

      <Outlet />
    </>
  );
}
