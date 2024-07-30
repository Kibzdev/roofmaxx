import React from 'react';
import clsx from 'clsx';

// Define the prop types for TagList
interface TagListProps {
  className?: string;
  children: React.ReactNode;
}

export function TagList({ className, children }: TagListProps) {
  return (
    <ul role="list" className={clsx(className, "flex flex-wrap gap-4")}>
      {children}
    </ul>
  );
}

// Define the prop types for TagListItem
interface TagListItemProps {
  className?: string;
  children: React.ReactNode;
}

export function TagListItem({ className, children }: TagListItemProps) {
  return (
    <li
      className={clsx(
        "rounded-full bg-neutral-100 px-4 py-1.5 text-base text-red-500",
        className
      )}
    >
      {children}
    </li>
  );
}
