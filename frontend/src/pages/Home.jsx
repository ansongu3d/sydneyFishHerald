import HeadLineTopic from "../components/HeadLineTopic";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";

export default function Home() {
  const [headline, setHeadline] = useState([]);
  const [BaitFishingTopics, setBaitFishingTopics] = useState([]);

  // NOTE: only need one useEffect here


  useEffect(async () => {
    axios.get("/api/topics/allNews").then((res) => {
      console.log(res.data);
      setHeadline(res.data.maxFish);
      setBaitFishingTopics(res.data.baitFishing)
    });

  }, []);

  if (!headline.length || !BaitFishingTopics.length) {
    return <Spinner />;
  }
  return (<>
    <section>
      {/* <p>{JSON.stringify(allTopics)}</p> */}
      <div className="topic-desc headline">
        <h3>CATCH OF THE DAY</h3>
        <HeadLineTopic headline={headline[0]}/> 
  
      </div>
    </section>
    <section>
      <div className="topic-desc headline">
        <h3>Bait Fishing Daily Tips</h3>
        <HeadLineTopic headline={BaitFishingTopics[0]}/> 
      </div>
    </section>
    </>
  );}
