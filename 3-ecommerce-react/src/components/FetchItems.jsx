import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { itemActions } from "../store/itemsSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(itemActions.addInitialItems(items));
      })
      .catch((error) => console.log("error", error));

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return (
    <>
      {/* <div>
        Fetch Done : {fetchStatus.fetchDone}
        Currently Fetching: {fetchStatus.currentlyFetching}
      </div> */}
    </>
  );
};

export default FetchItems;
