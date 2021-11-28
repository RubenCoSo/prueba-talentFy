import "../App.css";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

function HomePage() {
  const navigate = useNavigate();

  const handleButtons = (e) => {
    const route = e.target.value;
    navigate(route);
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
    </div>
  );
}

export default HomePage;
