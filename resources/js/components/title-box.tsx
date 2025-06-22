import { ReactNode } from "react";

enum Icon {
  articles = "assets/images/box/articles.gif",
  shop = "assets/images/box/shop.gif",
}

interface TitleBoxProps {
  title?: string | null;
  description?: string | null;
  icon?: Icon | null;
  image?: string | null;
  small?: boolean;
  imageIsBadge?: boolean;
  titleClasses?: string;
  descriptionClasses?: string;
  children?: ReactNode;
}

function TitleBox({
  title = null,
  description = null,
  icon = null,
  image = null,
  small = false,
  imageIsBadge = false,
  titleClasses = "font-semibold dark:text-white",
  descriptionClasses = "text-slate-700 dark:text-slate-400",
  children,
}: TitleBoxProps) {
  const hasChildren = !!children;

  return (
    <div className="flex w-full flex-col justify-between lg:h-16 lg:flex-row">
      <div
        className={`flex h-full items-center justify-start rounded-md bg-gradient-to-r from-zinc-100 to-zinc-50/90 pr-6 ${hasChildren ? "w-full lg:w-2/3" : "w-full"}`}
      >
        <div className={`flex h-full w-18 items-center ${imageIsBadge ? "justify-center" : "justify-start"}`}>
          {icon && <i className={`icon h-10 w-10 bg-[url('/assets/images/box/articles.gif')] bg-no-repeat`}></i>}

          {image && (
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
              <img src={image} alt="" className={!imageIsBadge ? "h-8 w-8 object-contain" : "image-rendering-pixelated h-8 w-8 object-contain"} />
            </div>
          )}
        </div>

        <div className="flex flex-col">
          {title && <span className={`${titleClasses} ${small ? "text-sm" : ""}`} dangerouslySetInnerHTML={{ __html: title }} />}

          {description && (
            <span className={`${descriptionClasses} ${small ? "text-xs" : "text-sm"}`} dangerouslySetInnerHTML={{ __html: description }} />
          )}
        </div>
      </div>

      {hasChildren && (
        <div className="mt-2 h-full lg:mt-0 lg:w-1/3">
          <div className="flex h-full w-full items-center justify-end gap-3">{children}</div>
        </div>
      )}
    </div>
  );
}

export { Icon, TitleBox };
