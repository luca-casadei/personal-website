export type ProjectProps = {
  title: string;
  description: string;
  link: string;
  image: string;
};

export const projects: ProjectProps[] = [
  {
    title: "Falco CodeGen - Creatore di codici per pezzi metalmeccanici",
    description:
      "Utilizzando la piattaforma Google Apps Script è stato realizzato un applicativo utile ai dipendenti dell'azienda FALCO S.R.L. di Imola per la creazione e la gestione di codici commerciali per l'organizzazione interna ed esterna di pezzi metalmeccanici.",
    link: "https://www.lucacasadei.net/progetti/",
    image: "screenfalcocodegen.png",
  },
];
