import React from "react";
import { Metadata } from "next";
import styles from "./Catalog.module.css";
import { Catalog } from "@/widgets/Catalog/Catalog";

export const metadata: Metadata = {
  title: "Stroyka-store - Каталог",
};

export default function CatalogPage(): JSX.Element {
  return (
    <>
      <main className={styles.main}>
        <Catalog />
      </main>
    </>
  );
}
