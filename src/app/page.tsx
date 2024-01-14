import Navbar from './_components/Navbar';
import MainSection from './_components/MainSection';
import BackgroundOpacity from './_shared/BackgroundOpacity';
import MenuSection from './_components/MenuSection';
import AboutSection from './_components/AboutSection';
import Footer from './_components/Footer';

export default async function Home() {
  return (
    <>
      <div className="background fixed inset-0" />
      <BackgroundOpacity />
      <div className="data-scroller">
        <Navbar />
        <div className="container">
          <MainSection />
          <MenuSection />
          <AboutSection />
        </div>
        <Footer />
      </div>
    </>
  );
}
