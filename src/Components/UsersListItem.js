import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import useThunk from "../hooks/useThunk";
import { deleteUser } from "../store";
import ExpnadaplePanal from "./ExpandaplePanal";
import AlbumList from "./AlbumsList";
export default function UsersListItem({ user }) {
  const [doRemoveUser, isLoading, errorDeleting] = useThunk(deleteUser);
  const handleClick = () => {
    doRemoveUser(user);
  };
  const header = (
    <>
      <Button className="mr-3" loading={isLoading} onClick={handleClick}>
        <GoTrashcan></GoTrashcan>
      </Button>
      {errorDeleting ? errorDeleting.error : ""}
      {user.name}
    </>
  );
  return <ExpnadaplePanal header={header}>
    <AlbumList user={user}></AlbumList>
  </ExpnadaplePanal>;
}
