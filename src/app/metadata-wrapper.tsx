import RootLayout from "./layout";
import CustomHead from "@/components/metadata";

export default function MetadataWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <CustomHead />
      <RootLayout>{children}</RootLayout>
    </html>
  );
}
