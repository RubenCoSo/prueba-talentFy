import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameSurname, setNameSurname] = useState("");
  //   const [name, setName] = useState("");
  //   const [surname, setSurname] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleNameSurname = (e) => {
    setNameSurname(e.target.value);
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // let nameSurnameArray = nameSurname.split(/(\s+)/);

    const requestBody = { email, password, nameSurname };

    axios.post(`${API_URL}/auth/login`, requestBody);
  };
  return (
    <Form className="signup" onSubmit={handleLoginSubmit}>
      <Form.Group className="mb-3" controlId="formBasicNameSurname">
        <Form.Label>Name & Surname</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your password"
          name="nameSurname"
          value={nameSurname}
          onChange={handleNameSurname}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={handleEmail}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter your password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
