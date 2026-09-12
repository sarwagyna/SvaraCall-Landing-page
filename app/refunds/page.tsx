import LegalDocumentPage, { legalPageMetadata } from "@/components/LegalDocumentPage";

export const metadata = legalPageMetadata("refunds");

export default function RefundsPage() {
  return <LegalDocumentPage slug="refunds" />;
}
