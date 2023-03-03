import "../styles/globals.css";
import Providers from "../Components/Providers";
import Header from "../Components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="flex flex-col w-screen gap-8 bg-cyan-50/20 dark:bg-cyan-800 text-cyan-800 dark:text-cyan-50 transition-all duration-700 overflow-x-hidden">
          <Providers>
            <Header />
            <div className="max-w-6xl mx-auto">{children}</div>
          </Providers>
      </body>
    </html>
  );
}
