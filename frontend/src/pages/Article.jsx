
export default function Article({ headline }) {
  const { description, fishSize, fishImage, fishingGear, location } = headline;

  return (
    <div className="HeadLine">
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
  );
}
