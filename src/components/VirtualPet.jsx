import { useDispatch, useSelector } from "react-redux";
import { play, feed, reset } from "../features/pet/petSlice";

const VirtualPet = () => {
  const dispatch = useDispatch();
  const { name, happiness, hunger } = useSelector((state) => state.pet);

  return (
    <div>
      <h2>{name}</h2>
      <p>Happiness: {happiness}</p>
      <p>Hunger: {hunger}</p>
      <button onClick={() => dispatch(play())}>Play</button>
      <button onClick={() => dispatch(feed())}>Feed</button>
      <button onClick={() => dispatch(reset())}>Reset happiness & hunger</button>
    </div>
  );
};

export default VirtualPet;
