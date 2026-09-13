import { Header } from "./Header";
import { Footer } from "./Footer";
import { BottomMobileNav } from "./BottomMobileNav";

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#f8f3eb] text-stone-900">
      <Header />
      {children}
      <Footer />
      <BottomMobileNav />
    </div>
  );
}

export default Layout;
