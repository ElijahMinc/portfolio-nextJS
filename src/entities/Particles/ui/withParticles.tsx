import { FunctionComponent, useEffect, useState } from 'react';
import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine, RecursivePartial, IOptions } from 'tsparticles-engine';
import { EntrySkeletonType } from 'contentful';
import { useTheme } from '@/entities/Theme/lib/useTheme';
import { THEMES } from '@/entities/Theme/config/ThemeContext';
import { defaultParticleOptions } from '../constants/defaultParticlesOptions';
import { IHeaderFields } from '@/shared/types/contentful';

const ParticlesLayout = ({
  children,
}: React.PropsWithChildren): JSX.Element => {
  const [options, setOptions] = useState<RecursivePartial<IOptions>>(
    defaultParticleOptions,
  );

  const { theme } = useTheme();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      particles: {
        ...prevOptions.particles,
        color: {
          value: theme === THEMES.DARK ? '#fff' : '#000',
        },
        links: {
          ...(prevOptions?.particles?.links || {}),
          color: theme === THEMES.DARK ? '#fff' : '#000',
        },
      },
    }));
  }, [theme]);

  return (
    <>
      {children}
      <Particles id="tsparticles" init={particlesInit} options={options} />
    </>
  );
};

export const withParticles = <
  T extends Record<string, unknown> & {
    headerContent: EntrySkeletonType<IHeaderFields>;
  },
>(
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
