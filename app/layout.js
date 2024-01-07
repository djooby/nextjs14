import "./globals.css";
import Header from "@/components/header";
import "bootstrap/dist/css/bootstrap.css";
import BootstrapClient from "@/components/bootstrapClient";

export const metadata = {
  title: "NextJS 14",
  description: "I am learning Nextjs 14",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
