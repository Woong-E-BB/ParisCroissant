import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "파리크라상 브랜드몰",
  description:
    "파리바게뜨, 파리크라상, 파스쿠찌, 리나스, 커피앳웍스, 패션5, 다이닝, 상품권을 한 번에 만나는 브랜드 라이프 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKr.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  );
}
