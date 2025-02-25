import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";

const Home = () => {
  const items = useSelector((store) => store.items);

  return (
    <>
      <main>
        <div className="items-container">
          {Array.isArray(items) && items.length > 0 ? (
            items.map((item) => (
              <HomeItem
                item={item}
                key={item.id}
              />
            ))
          ) : (
            <p>No items available</p>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
