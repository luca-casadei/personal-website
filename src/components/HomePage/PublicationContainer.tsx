import { useState } from "react";
import { PublicationCategory, publications } from "../../utilities/Publications";
import Publication from "./Publication";

export default function PublicationContainer() {
  let publicationFound: boolean = false;
  const categoryArray: string[] = Object.values(PublicationCategory);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const imagePath : string = "../resources/research/"

  async function setCategory(event: React.ChangeEvent<HTMLSelectElement>) {
    await setSelectedCategory(event.currentTarget.value);
  }

  async function setSearch(event: React.ChangeEvent<HTMLInputElement>) {
    await setSearchTerm(event.currentTarget.value.toLowerCase());
  }

  return (
    <section className="flex flex-col bg-gradient-to-b rounded-lg from-orange-400 to-red-500 items-center gap-3 p-3 min-h-16">
      <div className="flex md:flex-row flex-col w-full gap-3">
        <search className="flex flex-row gap-2">
          <input id="publicationSearchBar" onChange={setSearch} type="search" placeholder="Ricerca per testo" className="rounded-md text-oxford-blue text-center p-1" />
          <img src={imagePath + "search.svg"} alt="searchIcon" width={35} height={35} />
        </search>
        <select title="Categories" onChange={setCategory} name="category" className="md:ml-auto rounded-md text-oxford-blue p-1">
          <option value={"everything"}>Tutte</option>
          {
            categoryArray.map((category, i) => (
              <option key={"catid=" + i} value={category}>{category}</option>
            ))
          }
        </select>
      </div>
      <div className="flex flex-col justify-center h-full gap-3">
        {
          publications.map((details, i) => {
            if (selectedCategory === details.category || selectedCategory === "everything" || selectedCategory === "") {
              if (details.description.toLowerCase().includes(searchTerm) || details.title.toLowerCase().includes(searchTerm)) {
                publicationFound = true;
                return (
                  <Publication key={"PublicationId=" + i} {...details} />
                )
              }
            }
          })
        }
        {
          !publicationFound ? <div className="text-center flex md:flex-row flex-col gap-3 items-center">
            <img src={imagePath + "searchnothing.png"} className="w-10 h-10" alt="nothingFoundIcon" />
            <div className="justify-center flex flex-col">Nessuna pubblicazione trovata con l'attuale ricerca</div>
          </div> : <></>
        }
      </div>
    </section>
  );
}
