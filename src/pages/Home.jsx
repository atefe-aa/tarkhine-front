import  { useEffect } from "react";
import Banner from "../ui/Banner";
import Branches from "../features/home/Branches";
import HomePageMenu from "../features/home/HomePageMenu";
import Introduction from "../features/home/Introduction";


function Home () {
  useEffect(()=> {
    document.title = "ترخینه | فروش غذا";
  }, [])

  return (
    <>
      <Banner />
      <HomePageMenu />
      <Introduction />
      <Branches />
    </>
  );
}

export default Home;
