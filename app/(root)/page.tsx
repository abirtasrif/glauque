"use client";

import { Modal } from "@/components/ui/modal";

const SetupPage = () => {
  return (
    <div className="p-6">
      <Modal
        title="Test"
        description="Modal Description"
        isOpen
        onClose={() => {}}
      >
        Children
      </Modal>
    </div>
  );
};

export default SetupPage;
