import createApiCall, {API_V1_URL} from "../helpers/createApiCall";

export async function getById(id) {
  return await createApiCall({
    url: API_V1_URL + `terms/${id}`
  })
}

export async function getAllByGroupId(groupId) {
  return await createApiCall({
    url: API_V1_URL + `terms/term-groups/${groupId}`
  })
}

export async function createTerm(term) {
  return await createApiCall({
    url: API_V1_URL + "terms",
    method: "POST",
    data: term
  })
}