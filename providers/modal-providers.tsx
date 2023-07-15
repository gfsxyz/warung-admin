"use client";

import { useState, useEffect } from "react";

import { StoreModal } from "@/components/modals/store-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  //prevent render on server side that cause hydration error
  if (!isMounted) return null;

  return (
    <>
      <StoreModal />
    </>
  );
};
