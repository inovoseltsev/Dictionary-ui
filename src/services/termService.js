import createApiCall, {API_V1_URL} from "../helpers/createApiCall";

export async function createTerm(term) {
  return await createApiCall({
    url: API_V1_URL + "terms",
    method: "POST",
    data: term
  })
}