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

  const { volumeInfo } = json;
  const book = {
    id: value,
    image: volumeInfo.imageLinks?.thumbnail,
    rating: volumeInfo.averageRating,
    name: volumeInfo.title,
    officialSite: volumeInfo.infoLink,
    premiered: volumeInfo.publishedDate,
  };

  return book;
};
