import { AppLayout, ProgressLayout } from './layout';
import { Header, Seo } from '@/widgets';
import { BaseSeoProps } from '@/shared/types/seo.type';
import { HeaderNavigationListData } from '@/shared/constants/headerNavigationList';
import { Providers } from './providers/providers';

export interface IApplication {
  seoConfiguration: BaseSeoProps;

  headerConfiguration: {
    logoUrl: string;
    socials: HeaderNavigationListData[];
  };
}

export const App = ({
  children,
  seoConfiguration,
  headerConfiguration,
}: React.PropsWithChildren & IApplication) => {
  const SeoComponent = () =>
    Object.keys(seoConfiguration) ? (
      <Seo
        title={seoConfiguration.title || ''}
        description={seoConfiguration.description}
        previewImage={seoConfiguration.previewImage}
        locale={seoConfiguration.locale}
        isIndexablePage={seoConfiguration.isIndexablePage}
      />
    ) : null;

  const HeaderComponent = () =>
    Object.keys(headerConfiguration) ? (
      <Header
        logoUrl={headerConfiguration.logoUrl}
        socials={headerConfiguration.socials || []}
      />
    ) : null;

  return (
    <Providers>
      <ProgressLayout>
        <AppLayout Seo={SeoComponent()} Header={HeaderComponent()}>
          {children}
        </AppLayout>
      </ProgressLayout>
    </Providers>
  );
};
