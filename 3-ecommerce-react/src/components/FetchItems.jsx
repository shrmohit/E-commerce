import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { itemActions } from "../store/itemsSlice";
import { fetchingStatusActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  console.log(fetchStatus);

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;

    // dispatch(fetchingStatusActions.markFetchingStarted());

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(itemActions.addInitialItems(items[0]));

        console.log("Items fetched", items);
      });

    return () => {
      // controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
};

export default FetchItems;
