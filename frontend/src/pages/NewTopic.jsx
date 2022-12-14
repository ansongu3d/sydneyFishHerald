import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createTopic } from "../features/topics/topicSlice";
import BackButton from "../components/BackButton";
import FileBase64 from "react-file-base64";

function NewTopic() {
  const { user } = useSelector((state) => state.auth);

  const [name] = useState(user.name);
  const [email] = useState(user.email);
  const [catogory, setCatogory] = useState("Bait Fishing");
  const [fishingGear, setfishingGear] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [fishSize, setFishSize] = useState(100);
  const [fishImage, setFishImage] = useState(null);
  // const [fishImageName, setFishImageName] = useState('')

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(
      createTopic({
        catogory,
        fishingGear,
        location,
        description,
        fishImage,
        fishSize,
      })
    )
      .unwrap()
      .then(() => {
        // We got a good response so navigate the user
        navigate("/topics");
        toast.success("New topic created!");
      })
      .catch(toast.error);
  };

  return (
    <>
      <section className="heading">
      <h1>Create New Topic</h1>
        <p>Please fill out the form below</p>
      </section>

      <section className="form">
        <div className="form-group">
          <label htmlFor="name">Angler Name</label>
          <input type="text" className="form-control" value={name} disabled />
        </div>
        <div className="form-group">
          <label htmlFor="email">Angler Email</label>
          <input type="text" className="form-control" value={email} disabled />
        </div>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="catogory">Catogory</label>
            <select
              name="catogory"
              id="catogory"
              value={catogory}
              onChange={(e) => setCatogory(e.target.value)}
            >
              <option value="Bait Fishing">Bait Fishing</option>
              <option value="Lure Fishing">Lure Fishing</option>
              <option value="Flying Fishing">Flying Fishing</option>
              <option value="Trolling Fishing">Trolling Fishing</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="Fish Size">Fish Size (MM)</label>
            <input
              name="fishSize"
              type="number"
              className="form-control"
              value={fishSize}
              onChange={(e) => setFishSize(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="fishingGear">Fishing Gear</label>
            <input
              name="fishingGear"
              type="text"
              className="form-control"
              value={fishingGear}
              onChange={(e) => setfishingGear(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Fishing Spot</label>
            <input
              name="location"
              type="text"
              className="form-control"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description of the Catch</label>
            <textarea
              name="description"
              id="description"
              className="form-control"
              placeholder="Please descript your fishing details"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="image">Upload Your Fish Image</label>

            <FileBase64
              type="file"
              multiple={false}
              onDone={({ base64 }) => setFishImage(base64)}
              // onDone={({ base64 }) => setFishImage('')}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block">Submit</button>
            <BackButton />
          </div>
        </form>
      </section>
    </>
  );
}

export default NewTopic;
