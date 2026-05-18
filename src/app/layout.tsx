import type { Metadata } from "next";
import { Cairo, Amiri, Aref_Ruqaa } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic"],
  variable: "--font-amiri",
  weight: ["400", "700"],
  display: "swap",
});

const aref = Aref_Ruqaa({
  subsets: ["arabic"],
  variable: "--font-aref",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "زفّة • منصة دعوات الأفراح الأنيقة",
  description:
    "صمّم دعوة فرحك في دقائق — ٥٠٠ قالب فاخر، صور حقيقية، أنيميشن وموسيقى، ولينك خاص بدعوتك تشاركه مع كل أحبابك.",
  keywords: [
    "دعوة فرح",
    "دعوة فرح إلكترونية",
    "كروت أفراح",
    "دعوة زفاف",
    "زفّة",
    "wedding invitation",
    "Egypt wedding",
  ],
  openGraph: {
    title: "زفّة • دعوة فرحك بشكل يليق بفرحتك",
    description: "٥٠٠ قالب راقي • أنيميشن • موسيقى • RSVP • ٥٠ ج فقط",
    type: "website",
    locale: "ar_EG",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${amiri.variable} ${aref.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
