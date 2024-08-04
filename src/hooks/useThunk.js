import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

export default function useThunk(thunk) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const runThunk = useCallback((...args) => {
    setIsLoading(true);
    dispatch(thunk(...args))
      .unwrap()
      .catch((err) => {
        setError(err);
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [dispatch, thunk]);
  return [runThunk, isLoading, error];
}
