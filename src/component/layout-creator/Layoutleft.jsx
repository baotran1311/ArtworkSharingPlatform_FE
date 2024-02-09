import { useState } from "react";
import image1 from "../../assets/Cremo-white.png";
import { AiOutlinePicture } from "react-icons/ai";
import { FaFacebookMessenger } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaSun } from "react-icons/fa";
import "./layoutLeft.scss";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../Context/StateProvider";
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
          <AiOutlinePicture />
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
          <FaFacebookMessenger />
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
          <img
            src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/405464790_1297996437578088_4420355434371338161_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=ZnPretXXkycAX_GtflG&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfDFPJVPqX37mYfRkEj9-V1pqIM7UWuwjC-_vNAems4Bhw&oe=65BCAB71"
            alt=""
          />
        </div>
        <div
          className="layoutLef--menu__ChangBackground"
          onClick={() => handleTheme()}
        >
          <FaSun />
        </div>
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
