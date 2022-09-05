import Intro from "../components/intro/Intro";
import IntroInfo from "../components/introInfo/IntroInfo";
import MainSlider from "../components/mainSlider/MainSlider";
import Search from "../components/search/Search";

const MainPage = () => {

  return (
    <main>
      <Intro />
      <IntroInfo />
      <MainSlider />
      <Search />
    </main>
  )
}

export default MainPage