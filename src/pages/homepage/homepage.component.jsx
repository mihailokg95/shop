import "./style.scss";
import logo from "../../assets/logo.svg";
import Directory from "../../components/directory/directory.component";

function Homepage() {
  return (
    <div className="homepage">
      <img src={logo} alt="logo" />
      <Directory />
    </div>
  );
}

export default Homepage;
