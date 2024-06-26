import Footer from "../../modules/user/Footer/Footer";
import SearchAppBar from "../../modules/user/Header/Header";
import SimpleSlider from "../../modules/user/Slider/SimpleSlider";
import first_image from "../../../assets/images/slider-images/img_first.jpg"
import Navbar from "../../modules/user/Navbar/Navbar";
import { Box, CssBaseline } from "@mui/material";
import ImageSlider from "../../modules/user/Slider/SimpleSlider";
const Dashboard = ({ children = <></> }) => {

  return <>
    <CssBaseline />
    <SearchAppBar />
    <Navbar />
    <ImageSlider />
    {children}
    <Footer />
  </>
};

export default Dashboard;
