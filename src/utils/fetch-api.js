const URL = 'https://swapi.co/api';

class FetchApi {
  async get(uri) {
    const response = await fetch(`${URL}/${uri}`);
    const data = await response.json();
    return data;
  }

  films() {
    return this.get('films');
  }
}

export default FetchApi;
