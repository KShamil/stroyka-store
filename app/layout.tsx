import { Footer } from "../widgets/Footer/Footer";
import { Header } from "../widgets/Header/Header";
import "./globals.css";
import { Manrope, Poppins } from "next/font/google";
import styles from "./layout.module.css";
import { Providers } from "./providers";

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
    <html lang="en">
      <body className={manrope.className}>
        <Providers>
          <Header />
          <main className={styles.main}>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
