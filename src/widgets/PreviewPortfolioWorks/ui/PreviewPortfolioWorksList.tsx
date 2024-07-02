import { PreviewPortfolioWorksItem } from './PreviewPortfolioWorksItem';

export interface IPreviewWorkLinks {
  title: string;
  description: string;
  file: { url: string };
}

export interface ICurrentWork {
  title: IPreviewWorkLinks['title'];
  description: IPreviewWorkLinks['description'];
  link: string;
}

export interface PreviewPortfolioWorksListProps {
  works: { fields: IPreviewWorkLinks }[];
  workLinks: string[];

  currentWork: ICurrentWork;
  handleChangeCurrentWork: (currentWork: ICurrentWork) => void;
}

export const PreviewPortfolioWorksList = ({
  works,
  workLinks,
  currentWork,
  handleChangeCurrentWork,
}: PreviewPortfolioWorksListProps) =>
  !!works.length &&
  works.map(({ fields: { description, file, title } }, idx) => {
    const linkOfCurrentPortfolioWork = file.url;

    const isChoosenLink =
      title.toLowerCase() === currentWork.title.toLowerCase();

    const seoDescription = title + description;

    return (
      <div
        key={idx}
        className="porfolio-page__preview-element"
        onClick={() => {
          if (!title) return;

          const work = workLinks[title as any] as any;

          if (!work) return;

          handleChangeCurrentWork({
            title: work.title,
            description: work.description,
            link: work.link,
          });
        }}
      >
        <PreviewPortfolioWorksItem
          isChoosen={isChoosenLink}
          link={linkOfCurrentPortfolioWork}
          seoDescription={seoDescription}
        />
      </div>
    );
  });
