import Header from "@/components/Header";
import HeaderSlider from "@/components/HeaderSlider";
import Services from "@/components/Services";
import Calculator from "@/components/Calculator";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="px-6 md:px-16 lg:px-32">
        <HeaderSlider />
        <Services/>
        <Calculator/>
        <Banner/>
      </div>
      <Footer />
    </>


  )
}
