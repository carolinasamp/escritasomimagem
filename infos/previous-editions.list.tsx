import { imageUrls } from "../assets";

type PreviousEditionInfoImageProps = {
  alt: string;
  src: string;
  link?: string;
};

type PreviousEditionInfoProps = {
  content: string;
  images: PreviousEditionInfoImageProps[];
};

const PreviousEditionInfo: PreviousEditionInfoProps[] = [
  {
    content: `As duas primeiras edições do evento tiveram como principal objetivo trazer para o debate acadêmico brasileiro questões teóricas, metodológicas e conceituais sobre o campo de estudo da intermidialidade. Naquele momento (2017 e 2019), a noção de intermidialidade começava a circular no Brasil. Nesse sentido, a fim de se introduzir seus marcos teórico-metodológicos, a primeira edição (2017) contou com a presença de dois dos principais pesquisadores do campo: Irina Rajewsky, que expôs modelos de estudo do texto literário a partir da intermidialidade; e Claus Clüver, que buscou refletir sobre o lugar dos estudos de intermidialidade no domínio acadêmico.`,
    images: [
      {
        alt: "Irina Rajewsky",
        src: imageUrls.IrinaRajewsky,
      },
      {
        alt: "Claus Clüver",
        src: imageUrls.ClausCluver,
      },
    ],
  },
  {
    content: `Em sua segunda edição (2019), o evento reuniu um grupo de convidados que buscou refletir sobre as zonas de indistinção entre diferentes práticas artísticas e culturais, como pintura e cinema (Walter Moser); poesia, digitalidade e bioarte (Eduardo Kac); e música, poesia e performance (José Miguel Wisnik).`,
    images: [
      {
        alt: "Eduardo Kac e Solange Ribeiro de Oliveira",
        src: imageUrls.EduardoKacSolange,
      },
      {
        alt: "Walter Moser, Miriam Vieira e Thaïs Flores Nogueira Diniz ",
        src: imageUrls.WalterMiriamThais,
      },
    ],
  },
  {
    content: `A terceira edição do evento, realizada em edição on line em outubro de 2021, propôs como tema a Natureza, buscando, desse modo, discutir as diversas formas como a Literatura, as Artes e as Mídias representam a natureza e se relacionam com ela em seus processos produtivos, questões especialmente relevantes em um período marcado pela pandemia de Covid-19, pela emergência climática e pelas tragédias envolvendo as barragens de Brumadinho e Mariana. O evento contou com a participação de Jørgen Bruhn (Linnaeus University, Suécia), Lauren S. Weingarden (Florida State University, Estados Unidos), Paulo C. Chagas (Universidade da California, Riverside, Estados Unidos) e Sophie Aymes (Université de Bourgogne, França).`,
    images: [
      {
        alt: "Jørgen Bruhn",
        src: imageUrls.JorgenBruhn,
      },
      {
        alt: `Lauren S. Weingarden`,
        src: imageUrls.LaurenWingarden,
      },
    ],
  },
  {
    content:
      "Os livros decorrentes das três edições do <strong>Escrita, som, imagem<strong> estão disponíveis para serem baixados gratuitamente por meio dos links abaixo:",
    images: [
      {
        alt: "Escrita, Som e Imagem: Perspectivas Contemporâneas - Vol.1",
        src: imageUrls.EBOOK_1,
        link: "https://drive.google.com/file/d/16Y_Cjsuarggxeb3JhXTrkoZb5QnuI7Np/view",
      },
      {
        alt: "Escrita, Som e Imagem: Leituras Ampliadas - Vol.2",
        src: imageUrls.EBOOK_2,
        link: "https://drive.google.com/file/d/1j4KWHDoFrE6aBf0tkD3RqeCpzIKDjKX_/view",
      },
      {
        alt: "Escrita, som, imagem: Natureza em Foco - Vol.3",
        src: imageUrls.EBOOK_3,
        link: "https://drive.google.com/file/d/1nYaUkAXnK2hM47vbrqVoWEHozq_GHyFK/view",
      },
    ],
  },
];

export { PreviousEditionInfo };
