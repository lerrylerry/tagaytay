import Hero from "../component/hero";
import Navbar from "../component/NavbarHome";
import Gap from "../component/Gap";

const Home = () => {
    return(
        <div>
            <Navbar/>
            <Gap/>
            <Hero/>
        </div>
    );
};

export default Home;