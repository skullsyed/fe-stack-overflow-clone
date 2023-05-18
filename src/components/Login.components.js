import {
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  CardLink,
  CardBody,
} from "reactstrap";
import "./login.components.css";
import "bootstrap/dist/css/bootstrap.css";

function LoginComponents() {
  return (
    <Container className="bg-light border login-container">
      <h2>Login</h2>
      <Form>
        <FormGroup floating>
          <Input
            className="email-input"
            id="exampleEmail"
            name="email"
            placeholder="Email"
            type="email"
          />
          <Label for="exampleEmail">Email</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            className="password-input"
            id="examplePassword"
            name="password"
            placeholder="Password"
            type="password"
          />
          <Label for="examplePassword">Password</Label>
        </FormGroup>{" "}
        <CardBody className="link-body">
          <CardLink className="forgot-pass" href="#">
            Forgot Password
          </CardLink>
          <CardLink className="signup" href="/signup">
            Signup
          </CardLink>
        </CardBody>
        <Button className="submit-btn">Submit</Button>
      </Form>
    </Container>
  );
}

export default LoginComponents;
