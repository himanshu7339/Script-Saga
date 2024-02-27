// app/components/ThemeSwitcher.tsx
"use client";
import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex gap-6">
   
      {theme === "light" ? (
        <Button  color="primary"
        variant="flat" onClick={() => setTheme("dark")}>Dark Mode</Button>
      ) : (
        <Button
          color="primary"
          variant="flat"
          onClick={() => setTheme("light")}
        >
          Light Mode
        </Button>
      )}
    </div>
  );
}
