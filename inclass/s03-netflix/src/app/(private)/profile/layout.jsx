"use client";

import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const PrivateLayout = ({ children }) => {
  const router = useRouter();

  const { currentUser } = useAuthContext();

  useEffect(() => {
    if (!currentUser) {
      router.push("/login");
    }
  }, []);

  return <div>{children}</div>;
};

export default PrivateLayout;
