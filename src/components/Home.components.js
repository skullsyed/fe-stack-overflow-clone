import { Container, Nav, NavItem, NavLink, Button } from "reactstrap";

function HomeComponents() {
  return (
    <div>
      <div className="header">
        {" "}
        <Button className="product-btn" color="primary" size="sm">
          Product
        </Button>
        <Button className="customer-btn" color="primary" size="sm">
          Customer
        </Button>
        <Button className="usecases-btn" color="primary" size="sm">
          Use Cases
        </Button>
        <Button className="login-btn" color="primary" size="sm">
          Login
        </Button>
        <Button className="signup-btn" color="secondary" size="sm">
          Signup
        </Button>
      </div>
      <div className="middle-page">.</div>
      <div className="nav-bar">
        <Nav vertical>
          <NavItem>
            <NavLink href="#">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Questions</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Tags</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Users</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Jobs</NavLink>
          </NavItem>
        </Nav>
      </div>
    </div>
  );
}

export default HomeComponents;
