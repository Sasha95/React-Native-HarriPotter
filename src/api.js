import axios from "axios";

export const getCharacters = async house => {
  const hse = String(house).toLowerCase();
  const URL = `http://hp-api.herokuapp.com/api/characters/house/${hse}`;
  const res = await axios(URL);
  return res;
};
