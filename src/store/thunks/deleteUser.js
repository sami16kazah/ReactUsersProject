
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const deleteUser = createAsyncThunk("users/delete", async (user) => {
   await axios.delete(`http://localhost:3005/users/${user.id}`);
  //dev only
  await pause(2000);
  //
  return user;
});

//dev only

const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export { deleteUser };
