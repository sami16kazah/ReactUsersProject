import { faker } from "@faker-js/faker";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const addUser = createAsyncThunk("users/add", async () => {
  const res = await axios.post("http://localhost:3005/users",{
    name : faker.name.fullName(),

  });
  //dev only
  await pause(2000);
  //
  return res.data;
});

//dev only

const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export { addUser };
