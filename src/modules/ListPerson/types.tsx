type PersonType = {
  name: string;
  presentation?: string;
  picture?: string;
  caption?: string;
  details?: string;
};

type ListPersonProps = {
  list: PersonType[];
  className?: string;
};

export type { PersonType, ListPersonProps };
