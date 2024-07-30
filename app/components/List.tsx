import React, { ReactNode } from "react";
import FadeIn, { FadeInStagger } from "./FadeIn";
import Border from "./Border";
import clsx from "clsx";

interface ListProps {
  className?: string;
  children: ReactNode;
}

const List: React.FC<ListProps> = ({ className, children }) => {
  return (
    <FadeInStagger>
      <ul role="list" className={clsx("text-base text-neutral-600", className)}>
        {children}
      </ul>
    </FadeInStagger>
  );
};

interface ListItemProps {
  title?: string;
  children: ReactNode;
}

export const ListItem: React.FC<ListItemProps> = ({ title, children }) => {
  return (
    <li className="group mt-10 first:mt-0">
      <FadeIn>
        <Border className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
          {title && (
            <strong className="font-semibold text-red-500">{`${title}. `}</strong>
          )}
          {children}
        </Border>
      </FadeIn>
    </li>
  );
};

export default List;
