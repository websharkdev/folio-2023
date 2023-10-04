"use client";

import { useEffect, useState } from "react";

export const ModalProvider = () => {
  const [isMountend, setIsMountend] = useState<boolean>(false);

  useEffect(() => {
    setIsMountend(true);
  }, []);

  if (!isMountend) return null;
};
