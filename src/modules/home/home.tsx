import React from "react";
import {Canvas} from "@react-three/fiber";
import {useSpring} from "@react-spring/core";
import {OrbitControls} from "@react-three/drei";
import Scene from "@/components/threejsModel/scene";
import {Col, Divider, Row, Typography} from "antd";
import SignIn from "@/modules/authentication/signIn";
import SignUp from "@/modules/authentication/signUp";
import {useRootSelector} from "@/infra/hooks";
import {UserSel} from "@/infra/features/user";
import SignOutButton from "@/modules/authentication/signOut";

const Home = () => {
  const [set] = useSpring({ background: "#f0f0f0", fill: "#202020" }, []);

  const userAuth = useRootSelector(UserSel.userAuthState);
  return (
    <Row align={"middle"} justify={"center"}>
      <Col span={8}>
        <div style={{ position: "relative", width: "100%", height: "50vh" }}>
          <Canvas>
            <Scene setBg={set} />s
            <OrbitControls
              enablePan={true}
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
          </Canvas>
        </div>
      </Col>
      <Col span={12}>
        <Row gutter={16}>
          <Col span={24}>
            <Typography.Title level={2}>
              Stay Ahead with FDMarketPulse:
              <br />
              <Typography.Title level={5}>
                Your Ultimate Solution for Real-Time Insights and Analysis
                infuse with Power of GPT!
              </Typography.Title>
              <br />
              {userAuth.user ? (
                <Typography.Title level={3}>
                  Welcome {userAuth.user?.displayName}!
                </Typography.Title>
              ) : (
                <div>
                  <Row gutter={32}>
                    <Col span={10}>
                      <SignIn />
                    </Col>
                    <Divider type="vertical" style={{ height: "100%",color:"white" }} />
                    <Col span={10}>
                      <SignUp />
                    </Col>
                  </Row>
                </div>
              )}
            </Typography.Title>
          </Col>
          <Col span={24}>
            <SignOutButton/>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Home;
