import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton";
import ExpandaplePanal from "./ExpandaplePanal";
import Button from "./Button";
import AlbumListItem from "./AlbumListItem";
export default function AlbumList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const [addAlbum, result] = useAddAlbumMutation();
  let content;
  if (isLoading) {
    content = <Skeleton times={3} className="w-full h-10"></Skeleton>;
  } else if (error) {
    content = <div>Error Loading Albums </div>;
  } else {
    content = data.map((album) => {
      return <AlbumListItem key={album.id} album={album}></AlbumListItem>;
    });
  }
  const handleClick = () => {
    addAlbum(user);
  };
  return (
    <div>
      <div className="flex flex-row justify-between m-2 items-center">
        <h3 className="text-lg font-bold">Albums for {user.name}</h3>
        <Button loading={result.isLoading} onClick={handleClick}>
          Add Album
        </Button>
      </div>

      <div>{content}</div>
    </div>
  );
}
