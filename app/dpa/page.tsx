import LegalDocumentPage, { legalPageMetadata } from "@/components/LegalDocumentPage";

export const metadata = legalPageMetadata("dpa");

export default function DpaPage() {
  return <LegalDocumentPage slug="dpa" />;
}
