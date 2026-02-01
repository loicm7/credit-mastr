import './App.css';
import './index.css'

//import heroSectionImage from './assets/InstrumentBoxTransparent.png';
import logo from "./assets/creditMastrLogoBlack.webp";
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import FeaturedSounds from './components/FeaturedSounds.jsx';
import ValueProposition from './components/ValueProposition.jsx';
import MultiGenreBeats from './components/MultiGenreBeats.jsx';
import Footer from './components/Footer';







function App() {
    

    return (

        <>

            <div className="isolate flex flex-col">
                {/* (blue) radial gradient backgrounf on top */}
                <div className="absolute top-0 z-[-2] h-full w-full bg-transparent bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(21,163,255,0)_100%)]"></div>

                 {/* BARRE DE NAVIGATION*/}
                    <Navbar logo={logo} />

                {/*
                <main className="overflow-clip rounded-b-32">
                    {/* HERO SECTION
                    <HeroSection heroSectionImage={heroSectionImage} />

                    {/* FEATURE SECTION
                    <FeaturedSounds />
                    
                </main > */}

                <main className="overflow-clip grid grid-cols-6 gap-x-4 gap-y-16">
                    {/* HERO SECTION*/}
                    <HeroSection heroSectionImage="InstrumentBoxTransparent_hu1l24" />

                    {/* FEATURE SECTION*/}
                    <FeaturedSounds />

                    {/* VALUE PROPOSITION SECTION*/}
                    <ValueProposition />

                    {/* MULTI GENRE BEATS SECTION*/}
                    <MultiGenreBeats />

                </main >

                {/* FOOTER */}
                <Footer />
            </div>

            {/* grid column 6 example 
            <div class="bg-gray-100 p-8">
                <div class="grid grid-cols-6 gap-x-4 gap-y-16">
                   
                    <div class="col-start-2 col-span-4 bg-blue-100  text-center">grid-column content</div>
                    <div class="col-start-2 col-span-4 bg-red-100 text-center">grid-column content</div>
                    <div class="col-start-2 col-span-2 bg-green-100 text-center">grid-column left</div>
                    <div class="col-start-4 col-span-2 bg-purple-100 text-center">grid-column right</div>
                    <div class="col-start-2 col-span-4 bg-yellow-100 text-center">grid-column content</div>
                    <div class="col-start-1 col-end-7 bg-orange-100 text-center">grid-column full</div>
                </div>
            </div>
            */}
        </>
    );

    
}

export default App;