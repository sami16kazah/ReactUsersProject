import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const fetchUser = createAsyncThunk("users/fetch", async () => {
  const res = await axios.get("http://localhost:3005/users");
  //dev only
  await pause(5000);
  //
  return res.data;
});

//dev only

const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export { fetchUser };
