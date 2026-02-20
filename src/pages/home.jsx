import PopularCategories from "../components/categories";
import ChefsSpecial from "../components/chefsSpecial";
import HomeScreen from "../components/homeScreen";
import SearchBox from "../components/searchBox";

function Home() {
  return (
    <div>
      <HomeScreen />
      <SearchBox />
      <PopularCategories />
      <ChefsSpecial />
    </div>
  );
}

export default Home;
