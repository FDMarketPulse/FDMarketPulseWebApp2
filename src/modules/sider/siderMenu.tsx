import React, {useState} from "react";
import {Col, Menu, MenuProps, Row} from "antd";
import {Link, useLocation} from "react-router-dom";
import {
    FundFilled,
    FundOutlined,
    HomeFilled,
    HomeOutlined,
    ReadFilled,
    ReadOutlined,
    SlidersFilled,
    SlidersOutlined,
    UserOutlined,
    WalletFilled,
    WalletOutlined,
} from "@ant-design/icons";
import MyLogo from "../../assets/logo.svg"

const SiderMenu = () => {
  const location = useLocation();
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const data = [
    {
      key: "/home",
      icon: hoveredIcon === "/home" ? HomeFilled : HomeOutlined,
      label: (
          <Link exact to={"/home"} onMouseEnter={() => setHoveredIcon("/home")} onMouseLeave={() => setHoveredIcon(null)}>
            <span>Home</span>
          </Link>
      ),
    },
    {
      key: "/macro",
      icon: hoveredIcon === "/macro" ? SlidersFilled : SlidersOutlined,
      label: (
          <Link exact to={"/macro"} onMouseEnter={() => setHoveredIcon("/macro")} onMouseLeave={() => setHoveredIcon(null)}>
            <span>Macro</span>
          </Link>
      ),
    },
    {
      key: "/news",
      icon: hoveredIcon === "/news" ? ReadFilled : ReadOutlined,
      label: (
          <Link exact to={"/news"} onMouseEnter={() => setHoveredIcon("/news")} onMouseLeave={() => setHoveredIcon(null)}>
            <span>News</span>
          </Link>
      ),
    },
    {
      key: "/analysis",
      icon: hoveredIcon === "/analysis" ? FundFilled : FundOutlined,
      label: (
          <Link exact to={"/analysis"} onMouseEnter={() => setHoveredIcon("/analysis")} onMouseLeave={() => setHoveredIcon(null)}>
            <span>Analysis</span>
          </Link>
      ),
    },
    {
      key: "/portfolio",
      icon: hoveredIcon === "/portfolio" ? WalletFilled : WalletOutlined,
      label: (
          <Link exact to={"/portfolio"} onMouseEnter={() => setHoveredIcon("/portfolio")} onMouseLeave={() => setHoveredIcon(null)}>
            <span>Portfolio</span>
          </Link>
      ),
    },
    {
      key: "/user",
      icon: UserOutlined,
      label: "User",
    },
  ];

  const onClick: MenuProps["onClick"] = (e) => {
  };

  return (
      <>
          <Row justify={"center"}>
              <Col span={24} style={{display:"flex",justifyContent:"center"}}>
                  <img src={MyLogo} alt="Logo"          style={{ width: 100}}/>
              </Col>
          </Row>

        <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={[location.pathname]}
            onClick={onClick}
        >

          {data.map((d) => (
              <Menu.Item key={d.key} icon={React.createElement(d.icon)}>
                {d.label}
              </Menu.Item>
          ))}
        </Menu>
      </>
  );
};

export default SiderMenu;
