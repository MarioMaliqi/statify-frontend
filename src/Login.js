import React, { useEffect } from "react";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?" +
  "client_id=ea7be1d9b0224c26999adf7248f9fc41&" +
  "response_type=code&" +
  "redirect_uri=http://localhost:3000/callback&" +
  "scope=streaming%20user-read-recently-played%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-top-read%20user-read-playback-state%20user-modify-playback-state";

export default function Login() {
  
  useEffect(() => {
    document.body.style.backgroundColor = "#131516";
  });
  
  return (
    <div className="d-flex align-items-center justify-content-center" style={{height: "100%"}}>
      <a className="btn btn-outline-success " href={AUTH_URL}>Login With Spotify</a>
    </div>
  );
}