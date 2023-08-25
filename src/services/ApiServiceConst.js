const BASE_URL = 'http://localhost:3000/resource';
const headers = { "Content-type": "application/json" }

const getUrl = (resource) => {
  return BASE_URL.replace('resource', resource)
}

const Get = async (resource) => {
  const response = await fetch(getUrl(resource));
  return response.json();
}

const Show = async (resource, id) => {
  const response = await fetch(getUrl(`${resource}/${id}`));
  return response.json();
}

const Create = async (resource, data) => {
  const response = await fetch(getUrl(resource), {
    method: 'POST',
    body: data,
    headers,
  })
  return response.json();
}

const Update = async (resource, id, data) => {
  const response = await fetch(getUrl(`${resource}/${id}`), {
    method: 'POST',
    body: data,
    headers,
  })
  return response.json();
}

const Delete = async (resource, id) => {
  const response = await fetch(getUrl(`${resource}/${id}`), {
    method: 'DELETE',
  });
  return response.json();
}

export const ApiService = {
  Get,
  Show,
  Create,
  Update,
  Delete
}