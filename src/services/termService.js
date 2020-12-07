import createApiCall, {API_V1_URL} from "../helpers/createApiCall";

const DEFAULT_URL = "terms/";


export async function getById(id) {
  return await createApiCall({
    url: API_V1_URL + DEFAULT_URL + id
  });
}

export async function getAllByGroupId(groupId) {
  return await createApiCall({
    url: API_V1_URL + DEFAULT_URL + `term-groups/${groupId}`
  });
}

export async function createTerm(term) {
  return await createApiCall({
    url: API_V1_URL + DEFAULT_URL,
    method: "POST",
    data: term
  });
}

export async function update(id, term) {
  return await createApiCall({
    url: API_V1_URL + DEFAULT_URL + id,
    method: "PUT",
    data: term
  });
}

export async function deleteById(id) {
  return await createApiCall({
    url: API_V1_URL + DEFAULT_URL + id,
    method: "DELETE"
  });
}
