type ListItem = {
  id: string;
  tabName: string;
  content: JSX.Element;
};

type InternalTabsProps = {
  list: ListItem[];
  className?: string;
};

export { InternalTabsProps, ListItem };
