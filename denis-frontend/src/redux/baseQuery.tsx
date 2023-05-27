/* eslint-disable @typescript-eslint/indent */
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";

const baseQuery = fetchBaseQuery({ baseUrl: "http://localhost:5001/" });
const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  return baseQuery(args, api, extraOptions);
};

export default baseQueryWithReauth;
