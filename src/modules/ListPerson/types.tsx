type PersonType = {
  name: string;
  presentation?: string;
  picture?: string;
  details?: string;
};

type ListPersonProps = {
  list: PersonType[];
  className?: string;
};

export type { PersonType, ListPersonProps };
