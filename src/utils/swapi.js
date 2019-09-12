/* SWAPI Wrapper with fetch */

const URL = 'https://swapi.co/api';

class Swapi {
  async get(uri) {
    const response = await fetch(`${URL}/${uri}`);
    const data = await response.json();
    return data;
  }

  films() {
    return this.get('films');
  }
}

export default new Swapi();
