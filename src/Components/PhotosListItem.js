import { useRemovePhotoMutation } from "../store";
import { GoTrashcan } from "react-icons/go";
export default function PhotosListItem({ photo }) {
  const [removePhoto, results] = useRemovePhotoMutation();
  const handelRemovePhoto = () => {
    removePhoto(photo);
  };
  return (
    <div className="relative m-2 cursor-pointer" onClick={handelRemovePhoto}>
      <img className="h-20 w-20" src={photo.url} alt="random pics"></img>
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
        <GoTrashcan className="text-3xl"></GoTrashcan>
      </div>
    </div>
  );
}
