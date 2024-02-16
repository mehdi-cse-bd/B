import { Navbar, Button, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

const Header = () => {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Link to="/">
        <span className="text-3xl">MehdiMyMan</span>
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search ... "
          rightIcon={AiOutlineSearch}
        />
      </form>

      {/* <Link to="/dashboard">
        <Button color="gray">Dashboard</Button>
      </Link>
      <Link to="/projects">
        <Button color="gray">Projest's</Button>
      </Link>
      <Link to="/about">
        <Button color="gray">About</Button>
      </Link> */}

      <Navbar.Collapse>
        <Navbar.Link active={path === "/"}>
          <Link to="/dashboard">Dashboard</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"}>
          <Link to="/projects">Projest's</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
      </Navbar.Collapse>
      <div>
        <Button color="gray">
          <FaMoon />
        </Button>
      </div>
      <Link to="/register">
        <Button outline gradientDuoTone="tealToLime">
          Register
        </Button>
      </Link>
      <Link to="/sign-in">
        <Button outline gradientDuoTone="redToYellow">
          Sign In
        </Button>
      </Link>
    </Navbar>
  );
};

export default Header;
