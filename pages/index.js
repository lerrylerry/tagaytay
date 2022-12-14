import Hero from "../component/Hero";
import Navbar from "../component/NavbarHome";
import Gap from "../component/Gap";
import Head from "next/head";

const Home = () => {
    return(
        <div>
            <Head>
                <title>Tagaytay</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <Navbar/>
            <Gap/>
            <Hero/>
        </div>
    );
};

export default Home;