import { createApi } from "@reduxjs/toolkit/query/react";

import baseQueryWithReauth from "./baseQuery";
import { Game, AddGameRequest, EditGameRequest } from "./models/GameTypes";

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    addGame: builder.mutation<string, AddGameRequest>({
      query: (data) => ({
        url: "game/addNewGame",
        method: "POST",
        body: data,
      }),
    }),
    removeGame: builder.mutation<string, string>({
      query: (data) => ({
        url: `game/deleteGame/${data}`,
        method: "DELETE",
      }),
    }),
    editGame: builder.mutation<Game, EditGameRequest>({
      query: (data) => ({
        url: "game/updateGame",
        method: "PATCH",
        body: data,
      }),
    }),
    getAllGames: builder.query<Game[], void>({
      query: () => ({ url: "game/getAllGame" }),
    }),
    getSingleGame: builder.query<Game, string>({
      query: (data) => ({ url: `game/getById/${data}` }),
    }),
  }),
});

export const {
  useGetSingleGameQuery,
  useAddGameMutation,
  useEditGameMutation,
  useGetAllGamesQuery,
  useRemoveGameMutation,
} = api;
