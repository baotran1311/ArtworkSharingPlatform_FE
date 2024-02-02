import React from "react";
import "./ListFeedback.scss";
import { FaHeart } from "react-icons/fa6";
import { AiOutlineComment } from "react-icons/ai";
import { MdOutlineIosShare } from "react-icons/md";
import RoomMessage from "../roomMessage/RoomMessage";
import { BiSend } from "react-icons/bi";
function ListFeedback() {
  return (
    <div className="listFeedback">
      <h1>Feedback</h1>
      <div className="listFeedback--interact">
        <div className="listFeedback--interact__like">
          <FaHeart /> 1320 likes
        </div>
        <div className="listFeedback--interact__cmt">
          <AiOutlineComment /> 2312 comments
        </div>
        <div className="listFeedback--interact__share">
          <MdOutlineIosShare /> 1320 likes
        </div>
      </div>

      <div className="listFeedback--comments">
        <div className="listFeedback--comments__detail">
          <RoomMessage
            avt="data:image/png;base64,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"
            name="Thinh"
            lastMessage="hok dep "
          />
        </div>
        <div className="listFeedback--comments__detail">
          <RoomMessage
            avt="https://st3.depositphotos.com/3431221/13621/v/450/depositphotos_136216036-stock-illustration-man-avatar-icon-hipster-character.jpg"
            name="HungLd"
            lastMessage="Thực tế nó không có vậy !"
          />
        </div>
        <div className="listFeedback--comments__detail">
          <RoomMessage
            avt="https://i.pinimg.com/736x/4e/41/80/4e41806d170438330304b85351eda597.jpg"
            name="HuongNTC"
            lastMessage="10diem ko noi nhieu~"
          />
        </div>
      </div>
      <div className="listFeedback--input">
        <img
          src="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/11/avatar-vo-tri-91.jpg"
          alt=""
        />
        <div className="listFeedback--input_wrap">
          <input type="text" />
          <div className="listFeedback--input_wrap__send">
            <BiSend />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListFeedback;
