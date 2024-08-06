"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

const ToggleMode = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  });

  if (!mounted) {
    return <Button variant="secondary" size="icon" disabled={true}></Button>;
  }

  const light = theme === "light";

  return (
    <Button
      variant="secondary"
      size="icon"
      onClick={() => setTheme(`${light ? "dark" : "light"}`)}
    >
      {light ? (
        <Moon className="hover:cursor-pointer hover:primary" />
      ) : (
        <Sun className="hover:cursor-pointer hover:primary " />
      )}
    </Button>
  );
};

export default ToggleMode;
