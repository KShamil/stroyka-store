import { AboutCompany, AboutContacts } from "@/widgets";
import React from "react";

export default function ContactsPage(): JSX.Element {
  return (
    <>
      <main>
        <AboutContacts />
        <AboutCompany />
      </main>
      ;
    </>
  );
}
