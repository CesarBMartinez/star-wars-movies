/* SWAPI Wrapper with fetch */

const ROOT_URL = 'https://swapi.co/api';

class Swapi {
  async get(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  // Get all movies
  films() {
    return this.get(`${ROOT_URL}/films`);
  }

  // Get content from resources URL array
  fetchResources(resourcesURL = []) {
    const promises = [];
    for (let i = 0; i < resourcesURL.length; i++) {
      promises.push(this.get(resourcesURL[i]));
    }
    return Promise.all(promises);
  }
}

export default new Swapi();
