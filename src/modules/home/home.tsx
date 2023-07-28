import React from "react";
import { Col, Collapse, Divider, Row, Typography } from "antd";
import SignIn from "@/modules/authentication/signIn";
import SignUp from "@/modules/authentication/signUp";
import { useRootSelector } from "@/infra/hooks";
import { UserSel } from "@/infra/features/user";
import SignOutButton from "@/modules/authentication/signOut";
import MainSVG from "@/assets/main.svg";
import styles from "./Home.module.less";

const Home = () => {
  const userAuth = useRootSelector(UserSel.userAuthState);
  return (
    <Row align={"middle"} justify={"center"}>
      <Col
        xs={24}
        sm={24}
        md={8}
        lg={8}
        xl={8}
        className={styles["floating-box"]}
      >
        <img
          src={MainSVG}
          alt="Bull and Bear"
          className={styles["floating-image"]} // maximum width is 100% to prevent overflow on small screens
        />
      </Col>
      <Col xs={24} sm={24} md={24} lg={12} xl={12}>
        <Row gutter={16}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Typography.Title level={2}>
              Stay Ahead with FDMarketPulse:
              <br />
              <Typography.Paragraph level={5}>
                Your Ultimate Solution for Real-Time Insights and Analysis
                infused with the Power of GPT!
              </Typography.Paragraph>
              <br />
              {userAuth.user ? (
                <Typography.Title level={3}>
                  Welcome {userAuth.user?.displayName}!
                </Typography.Title>
              ) : (
                <div>
                  <Row gutter={32}>
                    <Col xs={24} sm={24} md={10} lg={10} xl={10}>


                      <SignIn />
                    </Col>
                    <Divider
                      type="vertical"
                      style={{ height: "100%", color: "white" }}
                    />

                    <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                      <SignUp />
                    </Col>
                  </Row>
                </div>
              )}
            </Typography.Title>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <SignOutButton />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Home;
