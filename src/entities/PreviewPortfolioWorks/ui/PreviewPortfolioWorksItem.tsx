import Image from 'next/image';
import cn from 'classnames';

interface PreviewPortfolioWorksItemProps {
  isChoosen: boolean;
  link: string;
  seoDescription: string;
}

export const PreviewPortfolioWorksItem = ({
  isChoosen,
  link,
  seoDescription,
}: PreviewPortfolioWorksItemProps) => {
  return (
    <div className="porfolio-page__image-wrapper">
      <Image
        className={cn(`object-cover`, {
          'scale-75': isChoosen,
        })}
        fill
        src={`https:${link}`}
        alt={seoDescription}
      />
    </div>
  );
};
