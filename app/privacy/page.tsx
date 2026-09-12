import LegalDocumentPage, { legalPageMetadata } from "@/components/LegalDocumentPage";

export const metadata = legalPageMetadata("privacy");

export default function PrivacyPage() {
  return <LegalDocumentPage slug="privacy" />;
}
