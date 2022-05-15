import headerImage from "../../../../../assets/header-image.png";

export function HeaderImage() {
  return (
    <div className="hidden md:block md:w-1/3">
      <img className="md:-ml-20" src={headerImage} alt="Desenho de uma menina estudando" />
    </div>
  );
}
