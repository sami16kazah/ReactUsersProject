import { useEffect } from "react";
import { fetchUser } from "../store";
import { useSelector } from "react-redux";
import { addUser } from "../store";
import UsersListItem from "./UsersListItem";
import Button from "./Button";
import Skeleton from "./Skeleton";
import useThunk from "../hooks/useThunk";
export default function UsersList() {
  const [doFetchUsers, isLoadingUsers, errorLoadingUsers] = useThunk(fetchUser);
  const [doAddUsers, isAddingUsers, errorAddingUsers] = useThunk(addUser);

  const { data } = useSelector((state) => {
    return state.users;
  });
  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handelAddingUser = () => {
    doAddUsers();
  };

  if (errorLoadingUsers) {
    return <div>{errorLoadingUsers}</div>;
  }
  const renderedUsers = data.map((user) => {
    return <UsersListItem key={user.id} user={user}></UsersListItem>;
  });
  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>

        <Button loading={isAddingUsers} onClick={handelAddingUser}>
          {" "}
          + Add User
        </Button>

        {errorAddingUsers && "error creating user"}
      </div>
      {isLoadingUsers ? (
        <Skeleton times={10} className="h-10 w-full"></Skeleton>
      ) : (
        renderedUsers
      )}
    </div>
  );
}
