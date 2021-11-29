import "../App.css";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
const API_URL = process.env.REACT_APP_SERVER_URL;

function HomePage() {
  const [userData, setUserData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  console.log(useContext(AuthContext));

  const handleButtons = (e) => {
    const route = e.target.value;
    navigate(route);
  };

  const handleButtonUserData = () => {
    console.log(`user`, user);

    const storedToken = localStorage.getItem("authToken");

    if (storedToken) {
      const userId = user._id;
      axios
        .get(`${API_URL}/userData/${userId}`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
          setUserData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setErrorMessage("Error 403 : Unathorized");
    }
  };
  return (
    <div className="App">
      <Button
        variant="primary"
        className="button"
        value="/signUp"
        onClick={handleButtons}
      >
        Sign up
      </Button>
      <Button
        variant="primary"
        className="button"
        value="/logIn"
        onClick={handleButtons}
      >
        Log in
      </Button>
      <Button
        variant="primary"
        className="button"
        value="/logIn"
        onClick={handleButtonUserData}
      >
        User data
      </Button>
      {userData ? (
        <>
          <p>Name: {userData.name}</p>
          <p>Surname: {userData.surname}</p>
          <p>Email: {userData.email}</p>
        </>
      ) : null}
      {errorMessage ? <span>{errorMessage}</span> : null}
    </div>
  );
}

export default HomePage;
