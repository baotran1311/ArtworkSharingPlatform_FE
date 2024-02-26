import React, { useEffect } from "react";
import "./RequestOrderDetail.scss";
import { Avatar, Button } from "antd";
import { AiFillMessage } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";
import { LeftCircleTwoTone } from "@ant-design/icons";
import api from "../../config/axios";

function RequestOrderDetail({ choice, setChoice }) {
  const isMobile = useMediaQuery({ maxWidth: 785 });
  useEffect(() => {
    const fetchData = async () => {
      const data = await api.get("/getOrderRequest-creator");
      console.log(data.data.data);
    };
    fetchData();
  }, []);
  return (
    <div className={`request-order-detail ${choice != -1 ? "active" : ""}`}>
      {isMobile ? (
        <LeftCircleTwoTone
          twoToneColor="#b42d81"
          style={{
            transform: "translateY(2em) translateX(1.5em)",
            fontSize: "1.4em",
          }}
          onClick={() => setChoice(-1)}
        />
      ) : null}
      <div className="request-order-detail__head">
        <div className="request-order-detail__head__title">
          Title: Logo for brand
        </div>
        <div className="request-order-detail__head__deadline">
          Deadline: 30/4/2023
        </div>
      </div>
      <div className="request-order-detail__detail">
        <div className="request-order-detail__detail__creator">
          <div className="request-order-detail__detail__creator__right">
            <Avatar
              src="https://cdn.dribbble.com/users/5746/avatars/normal/e52950dff35a8a8671c8151e2efd95b6.jpg?1673376793"
              className="request-order-detail__detail__creator__right__avatar"
            />
            <div className="request-order-detail__detail__creator__right__info">
              <h3>Dennis Salvatier - tanoshiboy</h3>
              <span>Member since January 2, 2024</span>
            </div>
          </div>
          <div className="request-order-detail__detail__creator__left">
            <AiFillMessage />
          </div>
        </div>
        <div className="request-order-detail__detail__payment">
          <h3>Payment:</h3>
          <h3>45 $</h3>
        </div>
        <div className="request-order-detail__detail__description">
          <h3>Job Description: </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adip elit. Phasellus non est
            ipsum. Aliquam a ante dui.{" "}
          </p>
        </div>
        <div className="request-order-detail__detail__confirm">
          <Button className="request-order-detail__detail__confirm__cancel">
            Cancel Offer
          </Button>
          <Button className="request-order-detail__detail__confirm__accept">
            Accept Offer
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RequestOrderDetail;
