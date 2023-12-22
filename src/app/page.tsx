import Navbar from './_components/Navbar';
import HomePage from './_components/HomePage';
import { twMerge } from 'tailwind-merge';
import BackgroundOpacity from './_shared/BackgroundOpacity';

export default async function Home() {
  return (
    <div className={twMerge('h-screen', 'h-[calc(100dvh)]')}>
      <Navbar />
      <section className="page">
        <BackgroundOpacity />
        <HomePage />
      </section>
    </div>
  );
}
