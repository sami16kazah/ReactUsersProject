import Button from "./Button";
import { GoTrashcan } from "react-icons/go";
import ExpandaplePanal from "./ExpandaplePanal";
import { useRemoveAlbumMutation } from "../store";
import PhotosList from "./PhotosList";
export default function AlbumListItem({ album }) {
    const [removeAlbum, result]= useRemoveAlbumMutation();
    const handelRemoveAlbum =()=>{
        removeAlbum(album);
    }
  const header = (
    <>
      <Button className="mr-2" loading={result.isLoading} onClick={handelRemoveAlbum}>
        <GoTrashcan></GoTrashcan>
      </Button>
      {album.title}
    </>
  );
  return (
    <ExpandaplePanal header={header}>
      <PhotosList album={album}></PhotosList>
    </ExpandaplePanal>
  );
}
