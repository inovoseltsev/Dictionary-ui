import React, {useState} from "react";

import HomeMenu from "../HomeMenu";

import './index.css'

export default function HomeCover() {

  const [caption] = useState('Dicter')
  const [tagline] = useState('Study with us')

  return (
      <div className={'home-cover'}>
        <div className={'home-cover-center'}>
          <HomeMenu caption={caption} tagline={tagline}/>
        </div>
      </div>
  );
}