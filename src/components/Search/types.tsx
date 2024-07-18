import { PersonType } from "../../modules/ListPerson/types";

type SearchProps = {
  list: PersonType[];
  onSearch: (person: PersonType[]) => void;
};

export type { SearchProps };
