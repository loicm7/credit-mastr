import { AudioLines, CircleArrowDown, LogOut } from "lucide-react"; 
import { Link } from "react-router"; 
import CldHeroSectionImage from "./ui/CldHeroSectionImage";
function ValueProposition() {
    return (
        <div className="col-start-2 col-span-14 mb-15">
            <section>
                <div className="bg-base-200 rounded-2xl p-15">
                    
                    <h2 className="font-poppins text-5xl md:text-6xl text-center font-bold capitalize mt-5" >Why Choose Credit Mastr?</h2>
                    <p className="py-6 font-poppins text-base-content text-center md:text-[20px]">
                        Instant access to ready-to-use beats, stems and sounds without the hassle or high costs.
                    </p>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <article className="flex flex-col items-center text-center p-6 bg-base-100 rounded-4xl shadow-md">
                            <AudioLines size={50} color="black" />
                            <h3 className="font-poppins text-2xl font-semibold mb-4">Sounds & Stems</h3>
                            <p className="font-poppins text-base text-gray-700">Multi genre beats, samples and multitracks that give you full control.</p>
                        </article>
                        <article className="flex flex-col items-center text-center p-6 bg-base-100 rounded-4xl shadow-md">
                            <CircleArrowDown size={50} color="black" />
                            <h3 className="font-poppins text-2xl font-semibold mb-4">100% Royalty Free</h3>
                            <p className="font-poppins text-base text-gray-700"> Use every track and sounds legally for commercial use.</p>
                        </article>
                        <article className="flex flex-col items-center text-center p-6 bg-base-100 rounded-4xl shadow-md">
                            <LogOut size={50} color="black" />
                            <h3 className="font-poppins text-2xl font-semibold mb-4">Cancel Anytime</h3>
                            <p className="font-poppins text-base text-gray-700">No Commitment. Start when you are ready and stop when you want.</p>
                        </article>
                    </div>
                    <div className="mt-16 flex justify-center text-center">
                        <p>Want to learn more? Discover <Link to="/how-it-works" className="font-bold underline underline-offset-2">How it Works</Link></p>
                    </div>
                </div>
            </section>
        </div>



    );
}

export default ValueProposition;