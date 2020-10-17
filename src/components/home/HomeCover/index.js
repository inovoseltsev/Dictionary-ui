import React from "react";

import HomeMenu from "../HomeMenu";

import './index.css'

export default function HomeCover() {

  return (
    <div className={'home-cover'}>
      <div className={'home-cover-center'}>
        <HomeMenu caption={"Dicter"} tagline={"Study with us"}/>
      </div>
    </div>
  );
}
