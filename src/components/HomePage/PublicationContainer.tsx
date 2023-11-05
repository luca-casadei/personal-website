import { useState } from "react";
import { PublicationCategory, publications } from "../../utilities/Publications";
import Publication from "./Publication";

export default function PublicationContainer() {
  const categoryArray: string[] = Object.values(PublicationCategory);
  const [selectedCategory, setSelectedCategory] = useState("");

  async function setCategory(event: React.ChangeEvent<HTMLSelectElement>) {
    await setSelectedCategory(event.currentTarget.value);
  }

  return (
    <section className="flex flex-col bg-gradient-to-b rounded-lg from-orange-400 to-red-500 items-center gap-3 p-3">
      <div className="flex flex-row w-full">
        <select onChange={setCategory} name="category" className="ml-auto rounded-md text-oxford-blue p-1">
          <option value={"everything"}>Tutte</option>
          {
            categoryArray.map((category,i) => (
              <option key={"catid="+i} value={category}>{category}</option>
            ))
          }
        </select>
      </div>
      {
        publications.map((details, i) => {
          if (selectedCategory === details.category || selectedCategory==="everything" || selectedCategory === "") {
            return (
              <Publication key={"PublicationId=" + i} {...details} />
            )
          }
        }
        )
      }
    </section>
  );
}
