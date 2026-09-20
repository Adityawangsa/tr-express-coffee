import { Header } from "./Header";
import { Footer } from "./Footer";
import { BottomMobileNav } from "./BottomMobileNav";

export function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <BottomMobileNav />
    </>
  );
}

export default Layout;
