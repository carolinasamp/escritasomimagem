type ListItem = {
  id: string;
  tabName: string;
  content: JSX.Element;
};

type InternalTabsProps = {
  list: ListItem[];
};

export { InternalTabsProps, ListItem };
