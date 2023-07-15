'use client'

import { Footer } from "../widgets/Footer/Footer";
import { Header } from "../widgets/Header/Header";
import "./globals.css";
import { Manrope, Poppins } from "next/font/google";
import styles from "./layout.module.css";
import { Providers } from "./providers";
import store from "@/store/store";
import { Provider } from "react-redux/es/exports";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={manrope.className}>
        <Providers>
          <Provider store={store}>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
          </Provider>
        </Providers>
      </body>
    </html>
  );
}
