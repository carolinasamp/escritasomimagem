import { imageUrls } from "../assets";

export const OrganizingCommitteeList = [
  {
    name: "Alex Martoni",
    presentation: "PPG Letras/ PUC Minas",
    picture: imageUrls.AlexMartoni,
  },
  {
    name: "Camila Figueiredo",
    presentation: "Editora UFMG",
    picture: imageUrls.CamilaFigueiredo,
  },
  {
    name: "Cecília Nazaré de Lima",
    presentation: "Escola de Música/UFMG",
    picture: imageUrls.CeciliaNazare,
  },
  {
    name: "Clara Matheus Nogueira",
    presentation: "Faculdade de Letras – Poslit/ FALE/UFMG",
    picture: imageUrls.ClaraMatheus,
  },
  {
    name: "Eliana Lourenço de Lima Reis",
    presentation: "Faculdade de Letras/ UFMG",
    picture: imageUrls.ElianaLourenco,
  },
  {
    name: "Márcia Arbex",
    presentation: "Faculdade de Letras – Poslit/UFMG/CNPq",
    picture: imageUrls.MarciaAberx,
  },
  {
    name: "Márcio de Vasconcellos Serelle",
    presentation: "PPGCOM e PPG Letras/ PUC Minas",
    picture: imageUrls.MarcioVasconcellos,
  },
  {
    name: "Miriam de Paiva Vieira",
    presentation: "DELAC/ Promel/ UFSJ/ CNPq",
    picture: imageUrls.MiriamPaiva,
  },
  {
    name: "Raquel Beatriz Junqueira Guimarães",
    presentation: "PPG Letras/ PUC Minas – CESPUC",
    picture: imageUrls.RaquelBeatriz,
  },
  {
    name: "Sandra Maria Silva Cavalcante",
    presentation: "PPG Letras/ PUC Minas",
    picture: imageUrls.SandraMaria,
  },
  {
    name: "Thaïs Flores Nogueira Diniz",
    presentation: "Faculdade de Letras – Poslit/ UFMG/ CNPq",
    picture: imageUrls.ThaisFlores,
  },
].sort((a, b) => a.name.localeCompare(b.name));
