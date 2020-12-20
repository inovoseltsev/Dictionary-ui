import React from "react";
import StartPage from "../../pages/StartPage";
import UserPage from "../../pages/UserPage";
import {useIntl} from "react-intl";
import {LanguageMessageContext} from "../../context"

export default function AppStarter() {

  const lang = useIntl();

  const getLangMessage = (id, objects) => {
    return lang.formatMessage({id}, objects)
  }

  return (
    <LanguageMessageContext.Provider value={getLangMessage}>
      <div className="App">
        <StartPage/>
        <UserPage/>
      </div>
    </LanguageMessageContext.Provider>
  );
}
