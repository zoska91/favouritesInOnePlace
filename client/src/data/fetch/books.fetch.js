export const fetchBooks = async ({ value }) => {
  console.log(value);
  const resp = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${value}`,
    {
      method: 'GET',
    }
  );
  const json = await resp.json();
  console.log(json);
  return json;
};
