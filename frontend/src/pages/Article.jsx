import HeadLineTopic from "../components/HeadLineTopic";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";

export default function Article() {
  const [headline, setHeadline] = useState({});
   const { description, fishSize, fishImage,fishingGear,location,_id } = headline;

  // NOTE: only need one useEffect here
  const { articleId } = useParams();

  useEffect(async () => {
    axios.get(`/api/topics/article/${articleId}`).then((res) => {
      console.log(res.data);
      setHeadline(res.data);
    //   setBaitFishingTopics(res.data.baitFishing);
    });
  }, [articleId]);

  if (!headline) {
    return <Spinner />;
  }
  return (
    <>
      <section>
        {/* <p>{JSON.stringify(allTopics)}</p> */}
        <div className="topic-desc headline">
        <p>
        <strong>Fishing Gear: </strong>
        {fishingGear}
      </p>
      <p>
        <strong>Fishing Spot: </strong>
        {location}
      </p>
      <p>
        <strong>Fish Size: </strong>
        {fishSize} (mm)
      </p>
      <img className="fish-img" src={fishImage} />
      <p>{description}</p>
        </div>
      </section>
    </>
  );
}
