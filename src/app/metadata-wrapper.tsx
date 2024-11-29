import CustomHead from "@/components/metadata";
import RootLayout from "./layout";

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
