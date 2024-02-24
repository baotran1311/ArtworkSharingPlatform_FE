import { useState } from "react";
import image1 from "../../assets/Cremo-white.png";
import { AiFillMessage, AiOutlineLogout, AiOutlineUser } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import { AiOutlineInbox } from "react-icons/ai";
import "./layoutLeft.scss";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../Context/StateProvider";
import { MdLightMode } from "react-icons/md";
function LayoutLeft() {
  const { theme, setTheme } = useStateValue();
  const [selectedLayout, setSelectedLayout] = useState("");
  const navigate = useNavigate();

  const handleTheme = () => {
    setTheme(!theme);
    localStorage.setItem("theme", !theme);
  };
  return (
    <div className="layoutLeft">
      <img className="layoutLeft--img" src={image1} alt="" />
      <div className="layoutLeft--menu">
        <div
          className={`layoutLeft--menu__icon ${
            selectedLayout === "artworks" ? "active_state" : ""
          }`}
          onClick={() => {
            setSelectedLayout("artworks");
            navigate("/creator-manage/artworks");
          }}
        >
          <AiOutlineUser />
        </div>
        <div
          className={`layoutLeft--menu__messenger ${
            selectedLayout === "message" ? "active_state" : ""
          }`}
          onClick={() => {
            setSelectedLayout("message");
            navigate("/creator-manage/room");
          }}
        >
          <AiFillMessage />
        </div>
        <div
          className={`layoutLeft--menu__addArtwork ${
            selectedLayout === "addArtwork" ? "active_state" : ""
          }`}
          onClick={() => {
            setSelectedLayout("addArtwork");
            navigate("/creator-manage/addArtwork");
          }}
        >
          <IoIosAddCircleOutline />
        </div>
        <div
          className={`layoutLeft--menu__avt ${
            selectedLayout === "avt" ? "active_state" : ""
          }`}
          onClick={() => {
            setSelectedLayout("avt");
            navigate("/creator-manage/requestOrder");
          }}
        >
          <AiOutlineInbox />
        </div>
        <div
          className="layoutLef--menu__ChangBackground"
          onClick={() => handleTheme()}
        >
          <MdLightMode />
        </div>
      </div>
      <div className="layoutLeft--logout" onClick={() => navigate("/login")}>
        <AiOutlineLogout />
      </div>
      <div
        className="layoutLeft--setting"
        onClick={() => navigate("/creator-manage/settings")}
      >
        <AiOutlineSetting />
      </div>
    </div>
  );
}

export default LayoutLeft;
