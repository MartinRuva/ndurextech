"use client";
import Herosection from './src/components/Herosection';
import Main from './src/components/Main';
import FloatingActionButton from './src/components/FloatingActionButton';
import Herosliderlayout from './src/components/Herosliderlayout';
import Logo from './src/components/logo';
import { AboutUsSection } from './src/components/AboutUsSection';
import footer from './src/components/footer';


export default function Page() {
  return (
      <> 
      <Logo />
      <Main />
      <Herosection />
      <Herosliderlayout />
      <FloatingActionButton />
      <AboutUsSection />
      <footer />
      </>
  );
}
