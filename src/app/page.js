import Hero from './components/hero';
import AboutSection from './components/home2'
import AboutBiogreen from './components/home3'
import CertificatesReportsTestimony from './components/home4'

const HomePage = () => {
  return (
    <div>
      <Hero />
      < AboutSection/>
      <AboutBiogreen/>
      <CertificatesReportsTestimony/>
    </div>
  );
};

export default HomePage;