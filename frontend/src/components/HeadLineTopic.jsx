import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";

function HeadLineTopic() {
  const [headline, setHeadline] = useState([]);
  // NOTE: only need one useEffect here
  // useEffect(async() => {
  //   axios.get('/api/topics/all').then((res) => {
  //     console.log(res.data)
  //     setAllTopics(res.data)
  //   })
  // }, [])

  useEffect(async () => {
    axios.get("/api/topics/maxFish").then((res) => {
      console.log(res.data);
      setHeadline(res.data);
    });
    // axios.get("/api/topics/BaitFishingTopics").then((res) => {
    //   console.log(res.data);
    //   setBaitFishingTopics(res.data);
    // });
  }, []);

  if (!headline.length) {
    return <Spinner />;
  }

  return (
    <section>
      {/* <p>{JSON.stringify(allTopics)}</p> */}
      <div className="topic-desc headline">
        <h3>Description of catch</h3>
        <p>{headline[0].description}</p>
        <p>
          <strong>Fish Size: </strong>
          {headline[0].fishSize} (mm)
        </p>
        <img className="fish-img" src={headline[0].fishImage} />
      </div>
    </section>
  );
}

export default HeadLineTopic;
