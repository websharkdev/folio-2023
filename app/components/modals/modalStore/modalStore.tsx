"use client";

import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/useStoreModal";

export const ModalStore = () => {
  const storeModal = useStoreModal();
  return (
    <Modal
      title="Create store"
      description=""
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Future create store
    </Modal>
  );
};
