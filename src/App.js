import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {refreshUser} from "./actions/auth";
import {IntlProvider} from "react-intl";
import {getLanguage} from "./helpers/languageChooser";
import AppStarter from "./components/AppStarter";

export default function App() {

  const dispatch = useDispatch();
  const {locale} = useSelector(state => state.userReducer);
  const language = getLanguage(locale);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch])

  return (
    <IntlProvider locale={locale} messages={language}>
      <AppStarter/>
    </IntlProvider>
  );
}
