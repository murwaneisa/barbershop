import Footer from "../components/footer/Footer";
import Navbar from "../components/Navbar";

export const Layout = (props) => {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};
