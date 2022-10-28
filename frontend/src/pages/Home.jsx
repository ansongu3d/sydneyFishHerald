import HeadLineTopic from "../components/HeadLineTopic";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import salmon from "../assets/salmon.svg";
import marlin from "../assets/marlin.svg";
import bream from "../assets/bream.svg";
import trout from "../assets/trout.svg";
import tuna from "../assets/tuna.svg";

export default function Home() {
  const [headline, setHeadline] = useState([]);
  const [BaitFishingTopics, setBaitFishingTopics] = useState([]);
  const [LureFishingTopics, setLureFishingTopics] = useState([]);
  const [FlyingFishingTopics, setFlyingFishingTopics] = useState([]);
  const [TrollingFishingTopics, setTrollingFishingTopics] = useState([]);
  // NOTE: only need one useEffect here

  useEffect(async () => {
    await axios.get("/api/topics/allNews").then((res) => {
      console.log(res.data);
      setHeadline(res.data.maxFish);
      setBaitFishingTopics(res.data.baitFishing);
      setLureFishingTopics(res.data.lureFishing);
      setFlyingFishingTopics(res.data.flyingFishing);
      setTrollingFishingTopics(res.data.trollingFishing);
    });
  }, []);

  if (
    !headline.length ||
    !BaitFishingTopics.length ||
    !FlyingFishingTopics.length ||
    !TrollingFishingTopics.length ||
    !LureFishingTopics.length
  ) {
    return <Spinner />;
  }
  return (
    <div className="News_Container">
      <section className="Max-Fishing">
        <div className="headline">
          <h3>CATCH OF THE DAY</h3>
          <img className="DailyFish vectorImg" src={tuna} alt="tuna" />
          <HeadLineTopic newsTopic={headline[0]} />
        </div>
      </section>
      <section className="Bait-Fishing">
        <div className="headline">
          <h3>Bait Fishing Daily Tips</h3>
          <img className="BaitFish vectorImg" src={bream} alt="bream" />
          <HeadLineTopic newsTopic={BaitFishingTopics[0]} />
        </div>
      </section>
      <section className="Lure-Fishing">
        <div className="headline">
          <h3>Lure Fishing Daily Tips</h3>
          <img className="LureFish vectorImg" src={salmon} alt="salmon" />
          <HeadLineTopic newsTopic={LureFishingTopics[0]} />
        </div>
      </section>
      <section className="Flying-Fishing">
        <div className="headline">
          <h3>Flying Fishing Daily Tips</h3>
          <img className="FlyingFish vectorImg" src={trout} alt="trout" />
          <HeadLineTopic newsTopic={FlyingFishingTopics[0]} />
        </div>
      </section>
      <section className="Trolling-Fishing">
        <div className="headline">
          <h3>Trolling Fishing Daily Tips</h3>
          <img className="TrollingFish vectorImg" src={marlin} alt="marilin" />
          <HeadLineTopic newsTopic={TrollingFishingTopics[0]} />
        </div>
      </section>
    </div>
  );
}
