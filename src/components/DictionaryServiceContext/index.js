import React from "react";

const {
  Provider: DictionaryServiceProvider,
  Consumer: DictionaryServiceConsumer
} = React.createContext();

export {
  DictionaryServiceProvider,
  DictionaryServiceConsumer
}