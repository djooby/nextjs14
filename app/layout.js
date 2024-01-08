import "./globals.css";
export const metadata = {
  title: "Home - NextJS 14",
  description: "I am learning Nextjs 14",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <div className="bg-white h-screen w-full grid place-items-center">
          {children}
        </div>
      </body>
    </html>
  );
}
