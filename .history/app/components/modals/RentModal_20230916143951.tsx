"use client";

import useRentModal from "@/app/hooks/useRentModal";
import Modal from "./Modal";

export default function RentModal() {
  const rentModal = useRentModal();
  return (
    <Modal
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={rentModal.onClose}
      actionLabel="submit"
      title="Airbnb your home!"
    />
  );
}
