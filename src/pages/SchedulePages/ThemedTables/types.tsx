type ListThemedTableContentType = {
  title_table: string;
  persons: string;
};

type ListThemedTableType = {
  table_number_title: string;
  table_title: string;
  table_hours: string;
  table_day: string;
  content: ListThemedTableContentType[];
};

type ListContentProps = {
  list: ListThemedTableType[];
  hours?: string;
  listFiltered?: boolean;
};

type SearchProps = {
  list: ListThemedTableType[];
  onSearch: (filteredList: ListThemedTableType[]) => void;
  inFocus: (focus: boolean) => void;
};

export {
  SearchProps,
  ListContentProps,
  ListThemedTableType,
  ListThemedTableContentType,
};
