"use client";
import { useEffect } from "react";

// --- ANA DASHBOARD BILEŞENİ ---
const App = () => {

  useEffect(() => {
    const isAuthanticated = localStorage.getItem("isAuthenticated") === "true" 
    if (!isAuthanticated) {
      window.location.href = "/login";
      return;
    }
    window.location.href = "/dashboard";
  }, []);

  return  null;
};

export default App;
