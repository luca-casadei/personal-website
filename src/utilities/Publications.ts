export enum PublicationCategory {
  REPOSITORY = "Repository",
  UNIVERSITA = "Appunti universitari",
  DOCUMENTAZIONE = "Documentazione",
  NESSUNA = "N/A",
}

export type PublicationDetails = {
  imgSrc: string;
  description: string;
  title: string;
  link: string;
  category: PublicationCategory;
};

export const publications: PublicationDetails[] = [
  {
    title: "Introduzione a Google Apps Script",
    imgSrc: "gas.png",
    description:
      "Questa documentazione e codice sono stati realizzati in occasione del progetto \"Gestione Segnalazioni\" per il comune di Mercato Saraceno, non si tratta del codice del gestionale in sé ma di una documentazione da me redatta per gli studenti dell'istituto superiore Blaise Pascal di cesena, per aiutarli qualora fossero anch'essi coinvoilti nel progetto.",
    link: "https://drive.google.com/drive/folders/1l2stDUTmLVUQk2QYZnt6sNwoCTTouTKY?usp=sharing",
    category: PublicationCategory.DOCUMENTAZIONE,
  },
  {
    title: "Sorgente di questo sito",
    imgSrc: "architecture.png",
    description:
      "Il sorgente completo di questo sito, realizzato con l'infrastruttura Vite + TypeScript + React. In allegato la repository github principale con continuous integration e delivery. Una parte per l'invio delle Mail è realizzata esternamente al sito stesso, con delle REST APIs implementate separatamente.",
    link: "https://github.com/luca-casadei/personal-website",
    category: PublicationCategory.REPOSITORY,
  },
  {
    title: "APIs di questo sito",
    imgSrc: "express.png",
    description:
      "Il sorgente delle REST APIs per l'invio delle mail realizzate con Node.js e Express. Queste sono hostate attraverso la piattaforma Microsoft Azure.",
    link: "https://github.com/luca-casadei/personal-website-apis",
    category: PublicationCategory.REPOSITORY,
  }
];
