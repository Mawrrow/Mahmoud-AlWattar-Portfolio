import MainLayout from './components/Layout/MainLayout';
import HeroSection from './components/Sections/HeroSection';
import AboutSection from './components/Sections/AboutSection';
import ProjectsSection from './components/Sections/ProjectsSection';
import ContactSection from './components/Sections/ContactSection';

const App = () => {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </MainLayout>
  );
};

export default App;