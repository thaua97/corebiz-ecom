import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header"
import ListItens from "../../components/ListItens";
import Newslatter from "../../components/Newslatter";

export default function Home () {
  return (
    <>
      <Header/>
      <Banner />
      <ListItens />
      <Newslatter />
      <Footer />
    </>
  );
}