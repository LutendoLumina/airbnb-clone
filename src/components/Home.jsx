import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "./Banner";
import Card from "./Card";
import "./Home.css";
import { listListing } from "../actions/listingAction";

const Home = () => {
  const dispatch = useDispatch();

  const listingList = useSelector((state) => state.listingList);
  const { loading, error, listings } = listingList;

  useEffect(() => {
    dispatch(listListing());
  }, [dispatch]);

  return (
    <div className="home">
      <Banner />
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div className="home_section">
          {listings.map((listing) => (
            <Card
              key={listing.id}
              src={listing.img}
              title={listing.title}
              description={listing.description}
              price={listing.price}
            />
          ))}
        </div>
      )}
      {/* <div className="home_section">
        <Card
          src="https://a0.muscache.com/im/pictures/hosting/Hosting-1612961478478331433/original/194e8a13-bff2-40b3-83c4-3778b88670d7.jpeg?im_w=1200"
          title="Online Experience"
          description="Unique activities we can do together, led by a world of hosts"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/hosting/Hosting-1612961478478331433/original/194e8a13-bff2-40b3-83c4-3778b88670d7.jpeg?im_w=1200"
          title="Online Experience"
          description="Unique activities we can do together, led by a world of hosts"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/hosting/Hosting-1612961478478331433/original/194e8a13-bff2-40b3-83c4-3778b88670d7.jpeg?im_w=1200"
          title="Online Experience"
          description="Unique activities we can do together, led by a world of hosts"
        />
      </div>
      <div className="home_section">
        <Card
          src="https://a0.muscache.com/im/pictures/hosting/Hosting-1612961478478331433/original/194e8a13-bff2-40b3-83c4-3778b88670d7.jpeg?im_w=1200"
          title="Online Experience"
          description="Unique activities we can do together, led by a world of hosts"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/hosting/Hosting-1612961478478331433/original/194e8a13-bff2-40b3-83c4-3778b88670d7.jpeg?im_w=1200"
          title="Online Experience"
          description="Unique activities we can do together, led by a world of hosts"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/hosting/Hosting-1612961478478331433/original/194e8a13-bff2-40b3-83c4-3778b88670d7.jpeg?im_w=1200"
          title="Online Experience"
          description="Unique activities we can do together, led by a world of hosts"
        />
      </div> */}
    </div>
  );
};

export default Home;
