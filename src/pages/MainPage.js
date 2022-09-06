import EarnWithUs from "../components/earn-with-us/EarnWithUs";
import Gallery from "../components/gallery/Gallery";
import Intro from "../components/intro/Intro";
import IntroInfo from "../components/introInfo/IntroInfo";
import MainSlider from "../components/mainSlider/MainSlider";
import NewsMain from "../components/news-main/NewsMain";
import Search from "../components/search/Search";

const MainPage = () => {

  return (
    <main>
      <Intro />
      <IntroInfo />
      <MainSlider />
      <Search />
      <Gallery />
      <EarnWithUs />
      <NewsMain />
    </main>
  )
}

export default MainPage