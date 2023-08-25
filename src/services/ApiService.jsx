const url = 'http://localhost:3000/resource';

export class ApiService {
  url;
  headers = { "Content-type": "application/json" }

  constructor(resource) {
    this.url = url.replace('resource', resource)
  }

  Get = async () => {
    return await fetch(this.url);
  }
  
  Show = async (id) => {
    return await fetch(`${this.url}/${id}`);
  }
  
  Create = async (data) => {
    return await fetch(this.url, {
      method: 'POST',
      body: data,
      headers: this.headers,
    })
  }
  
  Update = async (id, data) => {
    return await fetch(`${this.url}/${id}`, {
      method: 'POST',
      body: data,
      headers: this.headers,
    })
  }
  
  Delete = async (id) => {
    return await fetch(`${this.url}/${id}`, {
      method: 'DELETE',
    });
  }
}