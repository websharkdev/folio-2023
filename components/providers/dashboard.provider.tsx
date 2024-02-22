"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

import { ReactNode, useLayoutEffect, useState } from "react";

const DashboardProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isClient, setIsClient] = useState<boolean>(false);

  useLayoutEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      {isClient && (
        <div className="flex justify-between items-center flex-col gap-20 min-h-screen">
          {children}
        </div>
      )}
    </ThemeProvider>
  );
};

export default DashboardProvider;
