import { Client, TablesDB, Query, ID } from "appwrite";

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const TABLE_ID = import.meta.env.VITE_APPWRITE_TABLE_ID;

const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(PROJECT_ID);

const tablesDB = new TablesDB(client);
export const updateSearch = async (searchTerm, movie) => {
  try {
    const result = await tablesDB.listRows(DATABASE_ID, TABLE_ID, [
      Query.equal("searchedTerm", searchTerm),
    ]);
    if (result.rows.length > 0) {
      const row = result.rows[0];
      await tablesDB.updateRow(DATABASE_ID, TABLE_ID, row.$id, {
        count: row.count + 1,
      });
    } else {
      await tablesDB.createRow(DATABASE_ID, TABLE_ID, ID.unique(), {
        searchedTerm: searchTerm,
        count: 1,
        movie_id: movie.id,
        poster_url: movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : "./no-movie-poster.png",
      });
    }
  } catch (error) {
    console.error("Error updating search metric:", error);
  }
};

export const getTrendingMovies = async () => {
  try {
    const result = (
      await tablesDB.listRows(DATABASE_ID, TABLE_ID, [
        Query.orderDesc("count"),
        Query.limit(5),
      ])
    ).rows;
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};
