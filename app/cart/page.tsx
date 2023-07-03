import { AboutCart } from "@/widgets/AboutCart/AboutCart";
import { AddToCart } from "@/widgets/AddToCart/AddToCart";
import React from "react";
import styles from './Cart.module.css'

export default function Page(): JSX.Element {
  return (
    <>
      <main className={styles.main}>
        <AboutCart />
        <AddToCart />
      </main>
    </>
  );
}
