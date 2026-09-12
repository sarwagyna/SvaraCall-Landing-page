import LegalDocumentPage, { legalPageMetadata } from "@/components/LegalDocumentPage";

export const metadata = legalPageMetadata("terms");

export default function TermsPage() {
  return <LegalDocumentPage slug="terms" />;
}
