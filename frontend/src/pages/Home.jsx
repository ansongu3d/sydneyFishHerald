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
        <div className="News-Title">CATCH OF THE DAY</div>
        <div className="fish_imgV"><img className="DailyFish vectorImg" src={tuna} alt="tuna" /></div>
        <HeadLineTopic newsTopic={headline[0]} />
      </section>
      <section className="Bait-Fishing">
        <div className="News-Title">Bait Fishing Daily Tips</div>
        <div className="fish_imgV"><img className="BaitFish vectorImg" src={bream} alt="bream" /></div>
        <HeadLineTopic newsTopic={BaitFishingTopics[0]} />
      </section>
      <section className="Lure-Fishing">
        <div className="News-Title">Lure Fishing Daily Tips</div>
        <div className="fish_imgV"><img className="LureFish vectorImg" src={salmon} alt="salmon" /></div>
        <HeadLineTopic newsTopic={LureFishingTopics[0]} />
      </section>
      <section className="Flying-Fishing">
        <div className="News-Title">Flying Fishing Daily Tips</div>
        <div className="fish_imgV"><img className="FlyingFish vectorImg" src={trout} alt="trout" /></div>
        <HeadLineTopic newsTopic={FlyingFishingTopics[0]} />
      </section>
      <section className="Trolling-Fishing">
        <div className="News-Title">Trolling Fishing Daily Tips</div>
        <div className="fish_imgV"><img className="TrollingFish vectorImg" src={marlin} alt="marilin" /></div>
        <HeadLineTopic newsTopic={TrollingFishingTopics[0]} />
      </section>
    </div>
  );
}
