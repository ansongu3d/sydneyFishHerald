import { Link } from 'react-router-dom'
import Article from '../pages/Article';

function HeadLineTopic({ headline }) {
  const { description, fishSize, fishImage,fishingGear,location } = headline;
  console.log(description);
  // const [readMore, setReadMore] = useState(false);
  // const linkName = readMore ? "Read Less << " : "Read More >> ";
  // const extraContent = <p className="extra-content">{description}</p>;
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
      <p>{description.slice(0,400)}</p>
      <Link to={`/article`} className='ReadMore'>
        Read More...
      </Link>
      <Article headline={headline}/>
    </div>
  );
}

export default HeadLineTopic;
