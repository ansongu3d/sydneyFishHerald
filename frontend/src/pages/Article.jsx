// import HeadLineTopic from "../components/HeadLineTopic";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";

export default function Article() {
  const [headline, setHeadline] = useState();
  // const { description, fishSize, fishImage, fishingGear, location } = headline;

  // NOTE: only need one useEffect here
  const { articleId } = useParams();

  useEffect(async () => {
    axios.get(`/api/topics/article/${articleId}`).then((res) => {
      console.log(res.data);
      setHeadline(res.data);
    });
  }, [articleId]);

  if (!headline) {
    return <Spinner />;
  }
  return (
    <>
      <section>
        <div className="Article_Info">
          <p>
            <strong>Fishing Gear: </strong>
            {headline.fishingGear}
          </p>
          <p>
            <strong>Fishing Spot: </strong>
            {headline.location}
          </p>
          <p>
            <strong>Fish Size: </strong>
            {headline.fishSize} (mm)
          </p>
        </div>
        <div>
          <img className="fish-img" src={headline.fishImage} alt="fish image" />

          <p className="R-detail">{headline.description}</p>
        </div>
      </section>
    </>
  );
}
