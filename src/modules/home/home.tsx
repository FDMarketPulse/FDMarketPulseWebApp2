import React from "react";
import { Canvas } from "@react-three/fiber";
import { useSpring } from "@react-spring/core";
import { OrbitControls } from "@react-three/drei";
import Scene from "@/components/threejsModel/scene";
import { Button, Col, Row, Typography } from "antd";

const Home = () => {
  const [{ background, fill }, set] = useSpring(
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
      <Col span={8}>
        <Row>
          <Col span={24}>
            {" "}
            <Typography.Title level={2}>
              Stay Ahead of the Market with FDMarketPulse:
              <br />
              <span>
                Your Ultimate Source for Real-Time Financial Insights and
                Analysis!
              </span>
            </Typography.Title>
          </Col>
          <Col span={12}>
            <Button>Sign Up</Button>
          </Col>
          <Col span={12}>
            <Button>Sign In</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Home;
