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

export async function getAllByFolderId(id) {
  return await createApiCall({
    url: API_V1_URL + DEFAULT_URL + `term-group-folders/${id}`
  });
}

export async function createForUser(termGroup) {
  return await createApiCall({
    url: API_V1_URL + DEFAULT_URL + "users",
    method: "POST",
    data: termGroup
  });
}

export async function createForFolder(termGroup) {
  return await createApiCall({
    url: API_V1_URL + DEFAULT_URL + "term-group-folders",
    method: "POST",
    data: termGroup
  });
}

export async function update(termGroup) {
  return await createApiCall({
    url: API_V1_URL + DEFAULT_URL + `${termGroup.id}/`,
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
