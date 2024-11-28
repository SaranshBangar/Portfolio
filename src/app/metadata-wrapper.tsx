import MetaData from "@/components/metadata";
import RootLayout from "./layout";

export default function MetadataWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <MetaData />
      <RootLayout>{children}</RootLayout>
    </html>
  );
}
