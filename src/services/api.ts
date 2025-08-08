const BASE_URL = "https://www.thesportsdb.com/api/v1/json/3"; // hardcoded now, The env will be used in prod
export const get = (endpoint: string) => {
  return fetch(`${BASE_URL}/${endpoint}`).then((res) => res.json());
};
