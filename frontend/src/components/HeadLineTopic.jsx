import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";

function HeadLineTopic() {
  const [headline, setHeadline] = useState([]);
  const [BaitFishingTopics, setBaitFishingTopics] = useState([]);

  // NOTE: only need one useEffect here
  // useEffect(async() => {
  //   axios.get('/api/topics/all').then((res) => {
  //     console.log(res.data)
  //     setAllTopics(res.data)
  //   })
  // }, [])

  useEffect(async () => {
    axios.get("/api/topics/allNews").then((res) => {
      console.log(res.data);
      setHeadline(res.data.maxFish);
      setBaitFishingTopics(res.data.baitFishing)
    });
    // axios.get("/api/topics/BaitFishingTopics").then((res) => {
    //   console.log(res.data);
    //   setBaitFishingTopics(res.data);
    // });
  }, []);

  if (!headline.length || !BaitFishingTopics.length) {
    return <Spinner />;
  }

  return (<>
    <section>
      {/* <p>{JSON.stringify(allTopics)}</p> */}
      <div className="topic-desc headline">
        <h3>CATCH OF THE DAY</h3>
        <p>{headline[0].description}</p>
        <p>
          <strong>Fish Size: </strong>
          {headline[0].fishSize} (mm)
        </p>
        <img className="fish-img" src={headline[0].fishImage} />
      </div>
    </section>
    <section>
      {/* <p>{JSON.stringify(allTopics)}</p> */}
      <div className="topic-desc headline">
        <h3>CATCH OF THE DAY</h3>
        <p>{BaitFishingTopics[0].description}</p>
        <p>
          <strong>Fish Size: </strong>
          {BaitFishingTopics[0].fishSize} (mm)
        </p>
        <img className="fish-img" src={BaitFishingTopics[0].fishImage} />
      </div>
    </section>
    </>
  );
}

export default HeadLineTopic;
