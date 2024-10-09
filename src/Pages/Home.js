import Navbar from "../Component/NavBar/Navbar";
import SectionOne from "../Component/Home/Section One/SectionOne";
import SectionTwo from "../Component/Home/Section Two/SectionTwo";
import SectionThree from "../Component/Home/Section Three/SectionThree";
import SectionFour from "../Component/Home/Section Four/SectionFour";


function Home() {
    return ( 
        <>
        <Navbar/>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        </>
     );
}

export default Home;
