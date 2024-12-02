
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function AuthLayout({ children }: {
    readonly children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body
          // {...bind()}
          className={cn(`min-h-screen w-full bg-white text-black flex ${geistSans.variable} ${geistMono.variable} antialiased`, {"debug-screens": process.env.NODE_ENV === "development" } )}
        >
          <div className="flex flex-col w-full items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            {children}
          </div>
        </body>
    </html>
    );
  }