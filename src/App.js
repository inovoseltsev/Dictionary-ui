import React, {useEffect} from "react";
import StartPage from "./pages/StartPage";
import {useDispatch, useSelector} from "react-redux";
import {refreshUser} from "./actions/auth";
import UserPage from "./pages/UserPage";
import {IntlProvider} from "react-intl";
import {getLanguage} from "./helpers/languageChooser";

export default function App() {

  const dispatch = useDispatch();
  const {locale} = useSelector(state => state.userReducer);
  const language = getLanguage(locale);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch])

  return (
    <IntlProvider locale={locale} messages={language}>
      <div className="App">
        <StartPage/>
        <UserPage/>
      </div>
    </IntlProvider>
  );
}
