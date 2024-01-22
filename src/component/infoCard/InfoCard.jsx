import React from "react";
import "./styles.scss";
import { Card } from "@mui/material";

function InfoCard({ id, avatar, name, role, tags }) {
  return (
    <Card variant="infoCard" className="hero-marquee-item" key={id}>
      <div className="hero-marquee-item__info">
        <div className="hero-marquee-item__info__name">{name}</div>
        <div className="hero-marquee-item__info__title">{role}</div>

        <ul className="hero-marquee-item__info__tags">
          {tags.map((tag, index) => (
            <li className="hero-marquee-item__info__tags__tag" key={index}>
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div className="hero-marquee-item__media">
        <img
          alt="Mercedes Bazan"
          className="lazypreload lazyautosizes lazyloaded"
          data-sizes="auto"
          src={avatar}
        />
      </div>
    </Card>
  );
}

export default InfoCard;
