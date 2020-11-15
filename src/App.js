import React, {useEffect} from "react";
import StartPage from "./pages/StartPage";
import {useDispatch} from "react-redux";
import {refreshUser} from "./actions/auth";
import UserPage from "./pages/UserPage";

export default function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch])

  return (
    <div className="App">
      <StartPage/>
      <UserPage/>
    </div>
  );
}
