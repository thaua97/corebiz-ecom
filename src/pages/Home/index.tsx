import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header"
import ProductList from "../../components/ProductList";
import Newslatter from "../../components/Newslatter";

export default function Home () {
  return (
    <>
      <Header/>
      <Banner />
      <ProductList />
      <Newslatter />
      <Footer />
    </>
  );
}