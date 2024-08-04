import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";
import { fetchUser } from "./thunks/fetchUser";
import { addUser } from "./thunks/addUser";
import { deleteUser } from "./thunks/deleteUser";
import { setupListeners } from "@reduxjs/toolkit/query";
import { albumsApi } from "./apis/albumsApi";
import {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} from "./apis/albumsApi";
import {
  photosApi,
  useAddPhotoMutation,
  useRemovePhotoMutation,
  useFetchPhotosQuery,
} from "./apis/photosApi";

export const store = configureStore({
  reducer: {
    users: userReducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(albumsApi.middleware)
      .concat(photosApi.middleware);
  },
});

setupListeners(store.dispatch);
export {
  userReducer,
  fetchUser,
  addUser,
  deleteUser,
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation,
};
