import Layout from "./components/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main className="text-black bg-white">
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
      </Layout>
    </main>
  );
}

