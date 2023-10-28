import "./Header.css";
import IsLogIn from "./IsLogIn";

const Header = () => {
  return (
    <div className="border">
      <div className="logIn">
        <IsLogIn />
      </div>
      <div>
        <h2 className="Heading">This is Header</h2>
        <div className="item">
          <a href="">home</a>
          <a href="">service</a>
          <a href="">project</a>
          <a href="">about</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
