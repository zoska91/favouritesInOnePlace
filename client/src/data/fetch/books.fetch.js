export const fetchBooks = async (key, value) => {
  const resp = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${value}`,
    {
      method: 'GET',
    }
  );
  const json = await resp.json();
  return json.items;
};

export const fetchOneBooks = async value => {
  const resp = await fetch(
    `https://www.googleapis.com/books/v1/volumes/${value}`,
    {
      method: 'GET',
    }
  );
  const json = await resp.json();
  return json;
};
