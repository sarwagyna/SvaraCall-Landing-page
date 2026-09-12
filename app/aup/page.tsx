import LegalDocumentPage, { legalPageMetadata } from "@/components/LegalDocumentPage";

export const metadata = legalPageMetadata("aup");

export default function AupPage() {
  return <LegalDocumentPage slug="aup" />;
}
