import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ops And Code — Frontend Starter",
  description: "Next.js starter structure for modular frontends",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
