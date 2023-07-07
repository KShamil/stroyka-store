import { AboutCompany } from '@/widgets/AboutCompany/AboutCompany';
import { AboutContacts } from '@/widgets/AboutContacts/AboutContacts';
import { Metadata } from 'next';
import React from "react";

export const metadata:Metadata = {
  title: "Stroyka-store - Контакты"
};

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
