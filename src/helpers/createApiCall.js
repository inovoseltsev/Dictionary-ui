import axios from "axios";
import config from "../config";

export const API_V1_URL = "api/v1/dictionary-api/";

export default async ({
                        url,
                        method = "GET",
                        data = {},
                        headers = {},
                        responseType = "json",
                        tokenRequired = true
                      }) => {

  const baseUrl = config.API_URL;
  const accessToken = localStorage.getItem("token");
  const reqOptions = {
    url: baseUrl + url,
    method,
    responseType,
    headers: {
      Authorization: tokenRequired ? `Bearer_${accessToken}` : null,
      ...headers
    },
    timeout: 60000,
    data
  };

  return axios(reqOptions)
    .then(res => {
      if (res.status >= 200 && res.status <= 300) {
        return res.data;
      }
      return res;
    })
};
