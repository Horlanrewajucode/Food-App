import PopularCategories from "../components/categories";
import ChefsSpecial from "../components/chefsSpecial";
import HomeScreen from "../components/homeScreen";
import NewAddition from "../components/newAddtion";
import SearchBox from "../components/searchBox";

function Home() {
  return (
    <div>
      <HomeScreen />
      <SearchBox />
      <PopularCategories />
      <ChefsSpecial />
      <NewAddition />
    </div>
  );
}

export default Home;
