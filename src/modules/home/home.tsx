import React from "react";
import {Canvas} from "@react-three/fiber";
import {useSpring} from "@react-spring/core";
import {OrbitControls} from "@react-three/drei";
import Scene from "@/components/threejsModel/scene";
import {Button, Col, Row, Typography} from "antd";

const Home = () => {
  const [ set] = useSpring(
    { background: "#f0f0f0", fill: "#202020" },
    []
  );

  // const data2 = useRootSelector(DashSel.sectorReturn)

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
            {" "}
            <Typography.Title level={2}>
              Stay Ahead with FDMarketPulse:
              <br />
              <Typography.Title level={5}>
                Your Ultimate Solution for Real-Time Insights and
                Analysis!
              </Typography.Title>
            </Typography.Title>
          </Col>
          {/*<Col span={12}>*/}
          {/*  <Button type={"primary"} block={true}>Sign Up</Button>*/}
          {/*</Col>*/}
          {/*<Col span={12} >*/}
          {/*  <Button block={true}>Sign In</Button>*/}
          {/*</Col>*/}
        </Row>
      </Col>
    </Row>
  );
};

export default Home;
