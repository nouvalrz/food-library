import { Geist, Geist_Mono, Quicksand } from "next/font/google";
import "./globals.css";
import Toast from "@/ui/Toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: {
    default: "Koki Rumahan",
    template: "%s | KokiRumahan",
  },
  description: "Cari resep dari chef ternama disini",
  keywords: ["resep", "masakan", "kuliner", "makanan"],
  icons: {
    icon: "/koki-rumahan-logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${quicksand.variable} antialiased`}
      >
        {children}
        <Toast />
      </body>
    </html>
  );
}
