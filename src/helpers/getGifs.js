export const getGifs = async (category, limit) => {
  let url;
  if (!category) {
    url = `https://api.giphy.com/v1/gifs/trending?api_key=yk9wiBBkzYjtwINPM710rob5xHetafje&limit=${limit}`;
  }
  if (category && !limit) {
    url = `https://api.giphy.com/v1/gifs/search?api_key=yk9wiBBkzYjtwINPM710rob5xHetafje&q=${category}&limit=20`;
  }
  if (category && limit) {
    url = `https://api.giphy.com/v1/gifs/search?api_key=yk9wiBBkzYjtwINPM710rob5xHetafje&q=${category}&limit=${limit}`;
  }

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }));

  return gifs;
};
