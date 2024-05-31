import { AppLayout, Header } from '@/widgets';
import client from '../../contentful';
import { EntrySkeletonType } from 'contentful';
import { IHeaderFields } from '@/shared/types/contentful';
import { ThemeProvider } from '@/shared/lib/context/ThemeContext';
import { CursorProvider } from '@/shared/lib/context/CursorContext';
import { ProgressLayout } from '@/widgets/ProgressLayout';

const PortfolioPageLayout = async ({ children }: React.PropsWithChildren) => {
  const header = await client.getEntries<EntrySkeletonType<IHeaderFields>>({
    content_type: 'header',
    limit: 2,
  });

  const [headerContent] = header.items as any;

  const logoUrl = headerContent?.fields?.logo?.fields?.file?.url;
  const socials = headerContent?.fields?.socials;

  return (
    <ThemeProvider>
      <CursorProvider>
        <ProgressLayout>
          <AppLayout
            Header={<Header logoUrl={logoUrl} socials={socials || []} />}
          >
            {children}
          </AppLayout>
        </ProgressLayout>
      </CursorProvider>
    </ThemeProvider>
  );
};

// const portofolioWithParticles = PortfolioPageLayout

export default PortfolioPageLayout;
