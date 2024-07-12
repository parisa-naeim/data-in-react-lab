const BASE_URL = "https://swapi.dev/api/starships";

const index = async () => {
  try {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    console.log("Data:", data);
    return data;
  } catch (err) {
    console.error(err);
  }
};

const search = async (name) => {
  try {
    const res = await fetch(`${BASE_URL}/?search=${name}`);
    const data = await res.json();
    console.log("Data:", data);
    return data;
  } catch (err) {
    console.error(err);
  }
};

export { index, search };
