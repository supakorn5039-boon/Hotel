"use client";

import useRentModal from "@/app/hooks/useRentModal";
import Modal from "./Modal";

export default function RentModal() {
  const rentModal = useRentModal();
  return <Modal isOpen={rentModal.isOpen} title="Airbnb your home!" />;
}
