import Button from '../UI/Button';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative flex h-screen items-center justify-center bg-gray-900 bg-opacity-50 bg-cover bg-center"
      style={{ backgroundImage: "url('/src/assets/images/ignite.jpg')" }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="mb-6 text-5xl font-bold">Hi, I'm Mahmoud AlWattar</h1>
        <p className="mb-8 text-xl">Frontend Developer | Designer</p>
        <div className="flex justify-center space-x-4">
          <Button href="#projects">View My Work</Button>
          <Button href="#contact" variant="outline">Contact Me</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;