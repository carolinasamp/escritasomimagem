type PersonType = {
  name: string;
  presentation: string;
  picture: string;
};

type ListPersonProps = {
  list: PersonType[];
};

export type { PersonType, ListPersonProps };
