import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Navigator.scss";
import { navFooterConfig, navHeaderConfig } from "./config";
import { useMediaQuery } from "react-responsive";
import { Button, Drawer, Space } from "antd";
import { AlignLeftOutlined, CloseCircleOutlined } from "@ant-design/icons";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

function Navigator({ status }) {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 920 });
  const navList = status == "footer" ? navFooterConfig : navHeaderConfig;
  const isFooter = status == "footer";
  return (
    <div id={`${isFooter ? "footer" : "header"}`} className="navigator">
      {isFooter ? (
        navList.map((nav) => (
          <Link className="navigator__nav" to={nav.path} key={nav.title}>
            {nav.title}
          </Link>
        ))
      ) : isMobile ? (
        <nav animate={isOpen ? "open" : "closed"}>
          <Button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            style={{
              border: "none",
              boxShadow: "none",
              backgroundColor: "transparent",
            }}
          >
            <AlignLeftOutlined style={{ fontSize: "1.5em" }} />
          </Button>
          <Drawer
            title={
              <Space>
                <Button
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                  style={{ border: "none" }}
                >
                  <CloseCircleOutlined style={{ fontSize: "1.5em" }} />
                </Button>
              </Space>
            }
            placement="left"
            closable={false}
            open={isOpen}
            key="left"
            className="rs-nav-header"
          >
            {navList.map((nav) => (
              <Link className="navigator__nav" to={nav.path} key={nav.title}>
                {nav.title}
              </Link>
            ))}
          </Drawer>
        </nav>
      ) : (
        navList.map((nav) => (
          <Link className="navigator__nav" to={nav.path} key={nav.title}>
            {nav.title}
          </Link>
        ))
      )}
    </div>
  );
}

export default Navigator;
