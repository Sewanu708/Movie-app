export async function useSearchDetails(id, options) {
  let response;
  try {
    response = await fetch(`https://api.themoviedb.org/3/movie/${id}`, options);

    if (!response.ok) {
      try {
        response = await fetch(
          `https://api.themoviedb.org/3/tv/${id}?language=en-US`,
          options
        );
      } catch (error) {
        console.log(error);
      }
    }
    return await response?.json();
  } catch (error) {
    console.log(error);
  }
}
