// components/ClientLoadingWrapper.tsx
"use client";

import React, { useState, useEffect } from "react";

import { LoadingSpinner } from "./loading-spinner";

const ClientLoadingWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return <>{isLoading ? <LoadingSpinner /> : children}</>;
};

export default ClientLoadingWrapper;
