import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeName } from "../../store/modules/user/actions";
import { Container } from "./style";

const UserCard = () => {
  const user = useSelector((e) => e.user);
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleClick = () => {
    dispatch(changeName(name));
  };

  return (
    <Container>
      <h3>User name: {user.name}</h3>
      <div>
        <input value={name} onChange={(e) => setName(e.target.value)}></input>
        <button onClick={handleClick}>Change </button>
      </div>
    </Container>
  );
};

export default UserCard;
