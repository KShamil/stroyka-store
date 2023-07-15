import { Metadata } from "next";
import styles from "./Profile.module.css";
import { Profile } from "@/widgets/Profile/Profile";

export const metadata: Metadata = {
  title: "Профиль",
};

export default async function ProfilePage() {
  return (
    <main className={styles.main}>
      <Profile />
    </main>
  );
}
