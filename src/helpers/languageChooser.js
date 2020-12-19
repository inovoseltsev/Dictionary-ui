import English from "../utils/lang/en.json"
import Ukrainian from "../utils/lang/ua.json"

export const EN = "EN";
export const UA = "UA";

export function getLanguage(locale) {
  switch (locale) {
    case EN:
      return English;

    case UA:
      return Ukrainian;

    default:
      return English;
  }
}
