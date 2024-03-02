import React, { useEffect, useState } from "react";
import "./JobsView.scss";
import { Button, Card } from "antd";
import Tag from "../tags/Tag";
import RoundedBtn from "../rounded-button/RoundedButton";
import api from "../../config/axios";
import { getDifTime } from "../../assets/hook/useGetTime";
function JobsView({ title, description, price, date }) {
  const data = ["web", "mobile", "animation"];
  const tags = data.map((tag) => {
    return { tag };
  });
  console.log(date);
  return (
    <div className="jobsview">
      <Card className="jobsview__cart" bordered={false}>
        <h1>{title}</h1>
        <div className="jobsview__cart__info">
          <img src="https://cdn.dribbble.com/users/13307/avatars/normal/Mike3.jpg?1382537343" />
          <p>Posted {getDifTime(date)}</p>
        </div>
        <div className="jobsview__cart__info-details">
          <p>${price}</p>
          <p>Experience level</p>
        </div>
        <div className="jobsview__cart__description">
          <p>{description}</p>
        </div>
        <div style={{ display: "flex", marginTop: "1em" }}>
          {data.map((tag) => {
            return <Button className="jobsview__cart__tag">{tag}</Button>;
          })}
        </div>

        <Button className="jobsview__cart__submit">Approve</Button>
      </Card>
    </div>
  );
}

export default JobsView;
