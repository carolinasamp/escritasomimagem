type Tab = {
  label: string;
};

type TabsProps = {
  tabs: Tab[];
  onChangeTab: (index: number) => void;
};

export type { Tab, TabsProps };
