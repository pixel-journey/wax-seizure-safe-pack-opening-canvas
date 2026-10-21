import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Three reveals a second',
  description: '3 in 1000 ms stay 3. 4 become one reveal. Nothing is animated.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
