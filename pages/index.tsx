import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../Components/Header';
import Hero from '../Components/Hero';  
import About from '../Components/About';
import WorkExperience from '../Components/WorkExperience';
import Skills from '../Components/Skills';
import Projects from '../Components/Projects';
import ContactMe from '../Components/ContactMe';

const Home: NextPage = () => {
  return (
   <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y
   snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20
   scrollbar-thumb-[#F7AB0A]/80">
    <Head>
      <title>Mudit&apos;s Portfolio</title>
    </Head>
    
    <Header />

    <section id="hero" className='snap-start'>
      <Hero />
    </section>

    <section id='about' className='snap-center'>
      <About />
    </section>

    <section id="experience" className="snap-center">
      <WorkExperience />
    </section>

    <section id="skills" className="snap-start">
      <Skills />
    </section>

    <section id="projects" className="snap-start">
      <Projects />
    </section> 

    <section id='contact' className="snap-start">
      <ContactMe /> 
    </section>
      </div>
  );
}

export default Home;
