import Navbar from './_components/Navbar';
import HomePage from './_components/HomePage';
import BackgroundOpacity from './_shared/BackgroundOpacity';
import MenuPage from './_components/MenuPage';
import AboutPage from './_components/AboutPage';

export default async function Home() {
  return (
    <>
      <div className="background fixed inset-0" />
      <BackgroundOpacity />
      <Navbar />
      <div className="container">
        <HomePage />
        <MenuPage />
        <AboutPage />
      </div>
    </>
  );
}
