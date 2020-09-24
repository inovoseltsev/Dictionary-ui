import React from "react";
import {Link} from "react-router-dom";

import ControlButton from "../ControlButton";

import './index.css'

export default function HomeMenu({caption, tagline}) {

    return (
        <div className={'home-menu'}>
            <h1>{caption}</h1>
            <p>{tagline}</p>
            <div className={'control-buttons'}>
                <Link to={'/sign-in'}>
                    <ControlButton name={"Sign in"}/>
                </Link>
                <Link to={'/sign-up'}>
                    <ControlButton name={"Sign up"}/>
                </Link>
            </div>
        </div>
    );
}