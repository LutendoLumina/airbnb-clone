import Banner from "./Banner";
import Card from "./Card";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Banner />
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
      </div>
    </div>
  );
};

export default Home;
