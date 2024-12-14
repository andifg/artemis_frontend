import "./BottomNavigator.scss";
import TestSvg from "../../assets/meat.svg";

function BottomNavigator() {
  const addMeat = () => {
    console.log("Add meat");
  };

  return (
    <div className="bottom-navigator">
      Hello
      <div className="bottom-navigator-circle">
        <img
          src={TestSvg}
          alt="test"
          onClick={addMeat}
          style={{ width: "50px" }}
        />
      </div>
    </div>
  );
}

export { BottomNavigator };
