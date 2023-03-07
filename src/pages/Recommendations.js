import { useContext, useEffect, useState } from "react";
import NavBar from "../NavBar";
import { accessTokenContext, spotifyApi } from "../Router";

export default function Recommendations() {
  let accessToken = useContext(accessTokenContext)[0];

  return (
    <>
     <div>
     </div>
    </>
  )
}