import React from 'react';
import {
  PortableTextReactComponents,
  PortableTextListComponent,
  PortableTextListItemComponent,
  PortableTextMarkComponent,
  PortableTextBlockComponent,
  PortableTextTypeComponent
} from '@portabletext/react';

// Custom bullet list component
const BulletList: PortableTextListComponent = ({ children }) => (
  <ul className="list-disc pl-5">{children}</ul>
);

// Custom numbered list component
const NumberedList: PortableTextListComponent = ({ children }) => (
  <ol className="list-decimal pl-5">{children}</ol>
);

// Custom list item component
const ListItem: PortableTextListItemComponent = ({ children }) => (
  <li className="mb-2">{children}</li>
);

// Default block component
const Block: PortableTextBlockComponent = ({ children }) => <p>{children}</p>;

// Default hard break component
const HardBreak: React.FC = () => <br />;

// Default type component (for custom types)
const DefaultType: PortableTextTypeComponent<any> = ({ value }) => (
  <>{JSON.stringify(value)}</>
);

// Default mark component (for custom marks)
const DefaultMark: PortableTextMarkComponent<any> = ({ children }) => (
  <>{children}</>
);

// Define your custom Portable Text components
const components: PortableTextReactComponents = {
  list: {
    bullet: BulletList,
    number: NumberedList,
  },
  listItem: ListItem,
  block: Block,
  hardBreak: HardBreak,
  types: {
    // Handle custom types here
    unknownType: DefaultType,
  },
  marks: {
    // Handle custom marks here
    unknownMark: DefaultMark,
  },
  unknownBlockStyle: Block, // Handle unknown block styles if necessary
  unknownList: BulletList, // Handle unknown lists if necessary
  unknownListItem: ListItem, // Handle unknown list items if necessary
  unknownMark: DefaultMark, // Add this line to handle unknown marks
  unknownType: DefaultType, // Add this line to handle unknown types
};

export default components;
