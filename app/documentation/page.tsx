import { AboutDocumentation } from '@/widgets/AboutDocumentation/AboutDocumentation';
import { Metadata } from 'next';
import React from "react";

export const metadata:Metadata = {
  title: "Stroyka-store - Документация"
};

export default function DocumentationPage(): JSX.Element {
  return (
    <>
      <main>
        <AboutDocumentation />
      </main>
    </>
  );
}
