import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="container mx-auto">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
