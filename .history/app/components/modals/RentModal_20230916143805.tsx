"use client";

import useRentModal from "@/app/hooks/useRentModal";
import Modal from "./Modal";

export default function RentModal() {
  return <Modal isOpen={RentModal.isOpen} title="Airbnb your home!" />;
}
