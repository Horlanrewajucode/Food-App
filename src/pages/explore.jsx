import ExploreHero from "../components/exploreHero";
import ExploreJollof from "../components/exploreJollof";
import ExplorePopular from "../components/explorePopular";
import MenuCategories from "../components/menuCategories";
import SoupsSwallow from "../components/soupsSwallow";

export default function Explore() {
  return (
    <>
      <ExploreHero />
      <MenuCategories />
      <ExplorePopular />
      <ExploreJollof />
      <SoupsSwallow />
    </>
  );
}
