import {
  AlexMartoni,
  CamilaFigueiredo,
  CeciliaNazare,
  ClaraMatheus,
  ElianaLourenco,
  MarciaAberx,
  MarcioVasconcellos,
  MiriamPaiva,
  RaquelBeatriz,
  SandraCavalcante,
  ThaisFlores,
} from "../assets";

export const OrganizingCommitteeList = [
  {
    name: "Alex Martoni",
    presentation: "PPG Letras/ PUC Minas",
    picture: AlexMartoni,
  },
  {
    name: "Camila Figueiredo",
    presentation: "Editora UFMG",
    picture: CamilaFigueiredo,
  },
  {
    name: "Cecília Nazaré de Lima",
    presentation: "Escola de Música/UFMG",
    picture: CeciliaNazare,
  },
  {
    name: "Clara Matheus Nogueira",
    presentation: "Faculdade de Letras – Poslit/ FALE/UFMG",
    picture: ClaraMatheus,
  },
  {
    name: "Eliana Lourenço de Lima Reis",
    presentation: "Faculdade de Letras/ UFMG",
    picture: ElianaLourenco,
  },
  {
    name: "Márcia Arbex",
    presentation: "Faculdade de Letras – Poslit/UFMG/CNPq",
    picture: MarciaAberx,
  },
  {
    name: "Márcio de Vasconcellos Serelle",
    presentation: "PPGCOM e PPG Letras/ PUC Minas",
    picture: MarcioVasconcellos,
  },
  {
    name: "Miriam de Paiva Vieira",
    presentation: "DELAC/ Promel/ UFSJ/ CNPq",
    picture: MiriamPaiva,
  },
  {
    name: "Raquel Beatriz Junqueira Guimarães",
    presentation: "PPG Letras/ PUC Minas – CESPUC",
    picture: RaquelBeatriz,
  },
  {
    name: "Sandra Maria Silva Cavalcante",
    presentation: "PPG Letras/ PUC Minas",
    picture: SandraCavalcante,
  },
  {
    name: "Thaïs Flores Nogueira Diniz",
    presentation: "Faculdade de Letras – Poslit/ UFMG/ CNPq",
    picture: ThaisFlores,
  },
].sort((a, b) => a.name.localeCompare(b.name));
