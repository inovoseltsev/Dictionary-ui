import createApiCall, {API_V1_URL} from "../helpers/createApiCall";

const DEFAULT_URL = "term-groups/";

export async function getById(id) {
  return await createApiCall({
    url: API_V1_URL + DEFAULT_URL + `${id}/`
  });
}

export async function getAllByUserId(id) {
  return await createApiCall({
    url: API_V1_URL + DEFAULT_URL + `users/${id}/`
  });
}

export async function update(termGroupData) {
  const {cardId, name, content} = termGroupData;
  const termGroup = {name, description: content};
  return await createApiCall({
    url: API_V1_URL + DEFAULT_URL + `${cardId}/`,
    method: "PUT",
    data: termGroup
  })
}

export async function deleteById(id) {
  return await createApiCall({
    url: API_V1_URL + DEFAULT_URL + `${id}/`,
    method: "DELETE"
  })
}
