import { SetStateAction, useEffect, useState } from 'react'
import './globals.css'
import Landing from './components/Landing '
import Header from './components/Header'
import Skills from './components/Skills'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { motion } from "framer-motion"
import { LINKS } from './data/Links'
import { useInView } from 'react-intersection-observer';
import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Grid } from 'react-loader-spinner'
import { COMPONENTBACKGROUND } from './data/Classes'

export default function App() {
  //Nav
  useEffect(() => {
    document.documentElement.classList.remove('dark')
  }, [])

  const [section, setSection] = useState('landing')
  const [landingRef, landingView, landinEntry] = useInView();
  const [skillsRef, skillsView, skillsEntry] = useInView();
  const [workRef, workView, workEntry] = useInView();
  const [contactRef, contactView, contacEntry] = useInView();

  const scrollToSection = (section: SetStateAction<string>) => {
    setSection(section)
    switch (section) {
      case 'landing':

        landinEntry?.target.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'skills':
        skillsEntry?.target.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'work':
        workEntry?.target.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        contacEntry?.target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;

    }
  };
  useEffect(() => {
    if (landingView) {
      setSection('landing')
    } else if (skillsView) {
      setSection('skills')
    } else if (workView) {
      setSection('work')

    } else if (contactView) {
      setSection('contact')

    }
  }, [landingView, skillsView, workView, contactView]);

  // Particles
  const [isReady, setIsReady] = useState(false)

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {
    setTimeout(() => {
      setIsReady(true);
    }, 1200);
    ;
  }, []);

  if (!isReady) {
    return (
      <>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
        />
        <div className= {`w-full flexCenter relative z-50 ${COMPONENTBACKGROUND} h-screen`}>
          <Grid
            height="80"
            width="80"
            color="#78350f"
            ariaLabel="loading"

          />
        </div>
      </>
    )
  }

  return (
    <div className=''>
      <Header></Header>
      <nav className=' fixed max-lg:bottom-2 max-lg:w-full flexCenter z-50 lg:right-2 lg:h-full'>
        <div className='flex gap-x-6 lg-gap-x-10 px-4 py-3 rounded-full lg:flex-col lg:gap-y-10 bg-black/10'>
          {LINKS.map((link) => (
            <button onClick={() => scrollToSection(link.section)} key={link.title} className={`${section === link.section ? 'text-white' : 'text-black'} relative group`}>
              <motion.span className='h-12 w-12  flexCenter rounded-full' animate={{
                backgroundColor: ['#eee7d8', '#eee7d8', '#c0afa1', '#a69082', '#eee7d8'],
                transition: { duration: 10, repeat: Infinity, ease: 'easeInOut' }
              }}>{link.icon}</motion.span>
              <span className=' absolute max-lg:bottom-[61px] max-lg:-right-3 lg:right-[66px] lg:top-2 text-white bg-black regular-14 px-2 rounded-md hidden group-hover:flex'>
                {link.title}
                <span className='h-2 w-2 bg-black absolute max-lg:top-4 max-lg:right-1/2 translate-x-1/2 lg:top-[6px] lg:right-[1px] rotate-45 rounded-sm'></span>
              </span>
            </button>
          ))}
        </div>
      </nav>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            // color: {
            //   value: "#0d47a1",
            // },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 150,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ebe7d8",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 100,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 7 },
            },
          },
          detectRetina: true,
        }}
      />
      <div ref={landingRef}>
      </div>
      <Landing></Landing>

      <div ref={skillsRef}>
      </div>
      <Skills></Skills>

      <div ref={workRef}>
      </div>
      <Work></Work>

      <Contact></Contact>
      <div ref={contactRef}>
      </div>

      <Footer></Footer>
    </div>
  )
}
