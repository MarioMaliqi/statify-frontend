import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";

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
      <nav>
        <ul className="flex">
          <li className="mr-6">
            <Link to="/toptracks">Top Tracks</Link>
          </li>
          <li className="mr-6">
            <Link to="/topartists">Top Artists</Link>
          </li>
          <li className="mr-6">
            <Link to="/topgenres">Top Genres</Link>
          </li>
          <li className="mr-6">
            <Link to="/recentlyplayed">Recently Played</Link>
          </li>
          <li className="mr-6">
            <Link to="/recommendations">Recommendations</Link>
          </li>
          <li className="mr-6">
            <a className="text-gray-400 cursor-not-allowed" href="/#">
              <span>
                {userName}
              </span>
              <img src={profilePicture}>
              </img>
            </a>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}