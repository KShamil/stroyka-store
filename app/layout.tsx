"use client";

import { Footer } from "../widgets/Footer/Footer";
import { Header } from "../widgets/Header/Header";
import "./globals.css";
import { Manrope, Poppins } from "next/font/google";
import styles from "./layout.module.css";
import { Providers } from "./providers";
import store, { persistor } from "@/store/store";
import { Provider } from "react-redux/es/exports";
import { PersistGate } from "redux-persist/integration/react";

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
            <PersistGate loading={null} persistor={persistor}>
              <Header />
              <main className={styles.main}>{children}</main>
              <Footer />
            </PersistGate>
          </Provider>
        </Providers>
      </body>
    </html>
  );
}
