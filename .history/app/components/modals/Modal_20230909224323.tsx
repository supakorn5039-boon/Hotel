"use client";

import React, { useState } from "react";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryLabel?: string;

export default function Modal({ isOpen,onClose,onSubmit,title,body,footer,actionLabel,disabled,secondaryAction,secondaryLabel } : ModalProps) {
  
  const [showModal,setShowModal] = useState(false);
    return (


      <div>Modals</div>
  )
  
}