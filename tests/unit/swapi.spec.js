import fetch from 'node-fetch';
import swapi from '@/utils/swapi';

global.fetch = fetch;

describe('Swapi', () => {
  it('get films and check response schema', async () => {
    const response = await swapi.films();

    expect(response).toBeDefined();
    expect(response.results.length).toBeGreaterThanOrEqual(1);

    // Check obj response schema
    const expectedObj = {
      title: expect.any(String),
      episode_id: expect.any(Number),
      opening_crawl: expect.any(String),
      director: expect.any(String),
      producer: expect.any(String),
      release_date: expect.any(String),
      characters: expect.any(Array),
      species: expect.any(Array),
      vehicles: expect.any(Array),
      planets: expect.any(Array),
      starships: expect.any(Array)
    };
    expect(response.results[0]).toMatchObject(expectedObj);
  }, 30000);

  it('get resources url', async () => {
    const resourcesURLs = [
      'https://swapi.co/api/people/1/',
      'https://swapi.co/api/people/3/',
      'https://swapi.co/api/people/5/',
      'https://swapi.co/api/people/13/',
      'https://swapi.co/api/people/14/',
      'https://swapi.co/api/people/27/',
      'https://swapi.co/api/people/84/',
      'https://swapi.co/api/people/85/',
      'https://swapi.co/api/people/86/',
      'https://swapi.co/api/people/87/',
      'https://swapi.co/api/people/88/'
    ];

    const responses = await swapi.fetchResources(resourcesURLs);
    expect(Array.isArray(responses)).toBe(true);
    expect(responses.length).toEqual(resourcesURLs.length);
  }, 30000);
});
