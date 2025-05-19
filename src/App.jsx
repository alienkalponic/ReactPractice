import {Fragment} from "react";
import {CardData} from "../components/CardData";
import {Header} from "../Blog/Header";
import {Body} from "../Blog/Body";
import { Footer } from "../Blog/Footer";

export const App=()=>{
  return (
    <>
      {/* <CardData /> */}
      <Header/>
      <Body/>
      <Footer/>
    </>
  );
}



export default App
