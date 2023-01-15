import Login from "./Login";
import TopTracks from "./pages/TopTracks";
import TopArtists from "./pages/TopArtists";
import TopGenres from "./pages/TopGenres";
import RecentlyPlayed from "./pages/RecentlyPlayed";
import Recommendations from "./pages/Recommendations";
import User from "./pages/User";
import React, { createContext, useEffect, useState, useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import useAuth from "./useAuth";

function Callback() {
  const code = new URLSearchParams(window.location.search).get("code");
  let [accessToken, setAccessToken] = useContext(accessTokenContext);
  setAccessToken(useAuth(code));
  return (
    <>
      {accessToken && <Navigate replace to="/toptracks" />}
    </>
  );
}

export const accessTokenContext = createContext(null);

export default function Router() {
  let [accessToken, setAccessToken] = useState(null);
  return (
    <>
      <accessTokenContext.Provider value={[accessToken, setAccessToken]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}>
            </Route>
            <Route path="/callback" element={<Callback />}>
            </Route>
            <Route path="/toptracks" element={<TopTracks />}>
            </Route>
            <Route path="/topartists" element={<TopArtists />}>
            </Route>
            <Route path="/topgenres" element={<TopGenres />}>
            </Route>
            <Route path="/recentlyplayed" element={<RecentlyPlayed />}>
            </Route>
            <Route path="/recommendations" element={<Recommendations />}>
            </Route>
            <Route path="/user" element={<User />}>
            </Route>
          </Routes>
        </BrowserRouter>
      </accessTokenContext.Provider>
    </>
  );
}