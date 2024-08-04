import { useFetchPhotosQuery, useAddPhotoMutation } from "../store";
import Button from "./Button";
import PhotosListItem from "./PhotosListItem";
import Skeleton from "./Skeleton";
export default function PhotosList({ album }) {
  const {data, isFetching, error}= useFetchPhotosQuery(album);
  const [addPhoto, result] = useAddPhotoMutation();
  const handelAddPhoto = () => {
    addPhoto(album);
  };
  let content;
  if (isFetching) {
    content = <Skeleton className=" h-8 w-8 " times={4}></Skeleton>;
  } else if (error) {
    content = <div>Error Fetching Photos</div>;
  } else {
    content = data.map((photo) => {
        console.log(photo)
      return <PhotosListItem key={photo.id} photo={photo}></PhotosListItem>;
    });
  }

  return (
    <div>
      <div className="flex flex-row justify-between m-2 items-center">
        <h3 className="text-lg font-bold">Photos in {album.title}</h3>
        <Button loading={result.isLoading} onClick={handelAddPhoto}>
          + Add Photo
        </Button>
      </div>
      <div className="flex flex-row items-center justify-around m-10">{content}</div>
    </div>
  );
}
