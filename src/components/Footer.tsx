export default function Footer() {
  return (
    <footer className="text-white bg-gradient-to-l from-amber-500 to-red-500 py-4 sticky top-[100vh]">
      <div className="container w-[90%] mx-auto flex items-center justify-between">
        <div className="w-fit">Luca Casadei</div>
        <div className="justify-end gap-x-8 items-center flex w-fit">
          <a href="https://linkedin.com/in/casadeiluca">
            <img src="./linkedin.svg" className="max-w-8 max-h-8" alt="in" />
          </a>
          <a href="https://www.instagram.com/_lucacasadei/">
            <img
              src="./instagramfull.svg"
              className="max-w-8 max-h-8"
              alt="insta"
            />
          </a>
          <a href="https://github.com/luca-casadei">
            <img src="./github.svg" alt="gith" className="max-w-8 max-h-8" />
          </a>
        </div>
      </div>
    </footer>
  );
}
