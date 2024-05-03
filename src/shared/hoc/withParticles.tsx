import { FunctionComponent, useMemo } from 'react';
import { useCallback } from 'react';
import Particles from 'react-particles';
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from 'tsparticles-slim'; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import type {
  Container,
  Engine,
  RecursivePartial,
  IOptions,
} from 'tsparticles-engine';
import { useTheme } from '../hooks';

export const ParticlesLayout = ({
  children,
}: React.PropsWithChildren): JSX.Element => {
  const { theme } = useTheme();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions: Partial<RecursivePartial<IOptions>> = useMemo(
    () => ({
      zIndex: -1,
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'grab',
          },
        },
      },
      particles: {
        color: {
          value: theme === 'dark' ? '#fff' : '#000',
        },
        links: {
          color: theme === 'dark' ? '#fff' : '#000',
          distance: 150,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: false,
          speed: 0.3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.4,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [theme],
  );

  return (
    <>
      {children}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
      />
    </>
  );
};

export const withParticles = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>,
) => {
  return function withLayoutComponent(props: T) {
    return (
      <ParticlesLayout>
        <Component {...props} />
      </ParticlesLayout>
    );
  };
};
