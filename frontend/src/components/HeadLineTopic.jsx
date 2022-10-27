import { useState } from "react";
import './HeadLineTopic.css';

function HeadLineTopic({ headline }) {
  const { description, fishSize, fishImage,fishingGear,location } = headline;
  console.log(description);
  const [readMore, setReadMore] = useState(false);
  const linkName = readMore ? "Read Less << " : "Read More >> ";
  const extraContent = <p className="extra-content">{description}</p>;
  return (
    <div className="HeadLine">
      {/* <a
        className="read-more-link"
        onClick={() => {
          setReadMore(!readMore);
        }}
      >
        <h2>{linkName}</h2>
      </a> */}
     {/* {readMore && extraContent} */}
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
      <p>{description.slice(0,300)}</p>
    </div>
  );
}

export default HeadLineTopic;
