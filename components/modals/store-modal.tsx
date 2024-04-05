"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "../ui/modal";

export const StoreModal = () => {
  const storeModal = useStoreModal();
  return (
    <Modal
      title="Create store"
      description="add a new store to manage product and categories"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Galuque store form
    </Modal>
  );
};
