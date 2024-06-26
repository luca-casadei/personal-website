export default function Footer() {
  const imagePath: string = "../../resources/navigation/"
  return (
    <footer className="text-white bg-gradient-to-l from-amber-500 to-red-500 py-4 sticky top-[100vh]">
      <div className="flex mx-3 items-center">
        <div className="mr-auto w-1/3">© 2023 Luca Casadei</div>
        <div className="w-2/3 gap-5 flex flex-row items-center justify-end">
          <a href="https://linkedin.com/in/casadeiluca">
            <img src={imagePath + "linkedin.svg"} alt="in" className="max-h-8 max-w-8" />
          </a>
          <a href="https://github.com/luca-casadei">
            <img src={imagePath + "github.svg"} alt="gith" className="max-h-8 max-w-8" />
          </a>
          <a href="mailto:admin@lucacasadei.net">
            <img
              src={imagePath + "email.png"}
              alt="emailIcon"
              className="max-h-8 max-w-8"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
