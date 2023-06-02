import { AboutCompany } from '@/widgets/AboutCompany/AboutCompany';
import { AboutContacts } from '@/widgets/AboutContacts/AboutContacts';
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
