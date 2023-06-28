import React from "react";
import { Modal } from "antd";

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const NewsCard = ({ isModalOpen, setIsModalOpen }: Props) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Modal
      title="News xxx"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      destroyOnClose={true}
      // closable={true}
      mask={false}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default NewsCard;
