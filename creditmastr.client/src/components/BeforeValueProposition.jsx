import { Link } from "react-router";
import {Check, ArrowRight, BadgeDollarSign, Layers, Ban} from 'lucide-react';
import CldBeforeValuePropositionImg from "@/components/ui/CldBeforeValuePropositionImg.jsx";

function BeforeValueProposition() {
    return (
        <div className="col-start-2 col-span-14 md:col-start-4 md:col-span-10">
            <section
                className="relative overflow-hidden rounded-2xl shadow-md border border-solid border-[#2d2d2d0d]  mb-15">

                <div className="relative p-5 md:p-8 xl:pr-3">
                    <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-12">
                        <div className=" transition-all duration-200 ease-in-out bg-[#dbeafe] hover:bg-[#2563eb] hover:scale-105 hover:shadow-md hover:**:text-white p-5 md:p-10 rounded-lg md:rounded-2xl">
                            <h2 className="font-poppins text-2xl md:text-5xl  font-bold text-[#2563eb] leading-tight">
                                Create professional music{' '}
                                <span className="text-[#2563eb] italic">faster</span>
                            </h2>
                            <p className="font-poppins text-[14px] md:text-[16px]  text-[#2563eb] mt-4 leading-relaxed">
                                Access to quality, royalty-free instrumentals and sounds with unlimited downloads—all under one
                                subscription.
                            </p>
                        </div>
                        <div className=" lg:right-0 md:translate-x-1/6 md:translate-y-1/8">
                            <CldBeforeValuePropositionImg
                                imageId="cm_desktop_coxq9o"
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden rounded-2xl   mb-15">

                <div className="relative p-5 xl:p-8 xl:pr-3">
                    <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-12">
                        <div
                            className=" flex-none md:flex-none lg:flex-1 p-5 md:p-10  xl:p-20 bg-base-200/40 border border-solid border-[#2d2d2d0d] rounded-2xl">
                            <h2 className="font-poppins text-2xl md:text-5xl  font-bold text-black leading-tight">
                                Release more 
                                <span className="relative block w-fit italic  bg-linear-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-shift">
                                    music
                                </span>
                            </h2>
                            <p className="font-poppins text-[14px] md:text-[16px]  text-black mt-4 leading-relaxed">
                                Grow your audience with studio-quality sounds ready for commercial use.
                                Stop buying beats one at a time. Get instant access to a growing library of original
                                instrumentals, samples, and loops.</p>
                                <ul className="mt-3 list-none p-0 font-poppins text-[14px] md:text-[16px]">
                                    <li className="flex items-center gap-2 mb-2 text-[#565656]">
                                        <Check className="text-[#2563eb] w-5 h-5 shrink-0 "/>
                                        <span>Save thousands on individual beat purchases</span>
                                    </li>

                                    <li className="flex items-center gap-2 mb-2 text-[#565656]">
                                        <Check className="text-[#2563eb] w-5 h-5 shrink-0 "/>
                                        <span>One place for everything</span>
                                    </li>
                                    <li className="flex items-center gap-2 mb-2 text-[#565656]">
                                        <Check className="text-[#2563eb] w-5 h-5 shrink-0 "/>
                                        <span>New content every week</span>
                                    </li>
                                    
                                </ul>
                                <Link to="/join-waitlist" className="flex items-center gap-4 mt-10 text-[#2563eb]">
                                    <span className="font-medium font-poppins text-[14px] md:text-[16px]">Join the waitlist </span>
                                    <ArrowRight className="text-[#2563eb] w-5 h-5 shrink-0 "/>
                                    
                                </Link>

                            
                        </div>
                        <div className=" flex-none md:flex-none lg:flex-1 ">
                            <CldBeforeValuePropositionImg
                                imageId="image_vp_kecjke"
                                className="w-full h-auto rounded-xl max-w-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden rounded-2xl   mb-15">

                <div className="relative p-5 xl:p-8 xl:pr-3">
                    <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-18">
                        
                        <div className=" flex-none md:flex-none lg:flex-1 ">
                            <CldBeforeValuePropositionImg
                                imageId="Col-1_jh1tbp"
                                className="w-full h-auto rounded-xl max-w-full object-contain"
                            />
                        </div>
                        <div
                            className=" flex-none md:flex-none lg:flex-1 p-5 md:p-10  xl:p-5 ">
                            <h2 className="font-poppins text-2xl md:text-5xl  font-bold text-black  leading-tight">
                                Find the perfect 
                                <span className="relative block w-fit italic text-[#2563eb]">
                                    sound
                                </span>
                            </h2>
                            <p className="font-poppins text-[14px] md:text-[16px]  text-black mt-4 leading-relaxed">
                                The right instrumental or sample change everything. Skip the audio track hunt and find exactly what you're looking for with AI Search by Sound. Upload any audio reference file. All built for creators, artists and music producers.
                                Browse by mood, genre, or tempo.</p>
                                <ul className="mt-3 list-none p-0 font-poppins text-[14px] md:text-[16px]">
                                    <li className="flex items-center gap-2 mb-2 text-[#565656]">
                                        <Check className="text-[#2563eb] w-5 h-5 shrink-0 "/>
                                        <span>AI-Powered match and discovery</span>
                                    </li>
                                    
                                    <li className="flex items-center gap-2 mb-2 text-[#565656]">
                                        <Check className="text-[#2563eb] w-5 h-5 shrink-0 "/>
                                        <span>Find the right sound in minutes</span>
                                    </li>
                                    
                                    <li className="flex items-center gap-2 mb-2 text-[#565656]">
                                        <Check className="text-[#2563eb] w-5 h-5 shrink-0 "/>
                                        <span>For everyone who creates</span>
                                    </li>
                                </ul>
                                <Link to="/join-waitlist" className="flex items-center gap-4 mt-10 text-[#2563eb]">
                                    <span className="font-medium font-poppins text-[14px] md:text-[16px]">Join the waitlist </span>
                                    <ArrowRight className="text-[#2563eb] w-5 h-5 shrink-0 "/>

                                </Link>

                            
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden rounded-2xl   mb-30">

                <div className="relative p-5 xl:p-8 xl:pr-3">
                    <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-18">

                        <div className=" flex-none md:flex-none lg:flex-1 ">
                            <CldBeforeValuePropositionImg
                                imageId="Col-2_nkkm4v"
                                className="w-full h-auto rounded-xl max-w-full object-contain"
                            />
                        </div>
                        <div
                            className=" flex-none md:flex-none lg:flex-1 p-5 md:p-10  xl:p-5 ">
                            <h2 className="font-poppins text-2xl md:text-5xl  font-bold text-black  leading-tight">
                                Never run out of 
                                <span className="relative block w-fit italic text-[#2563eb]">
                                    inspiration
                                </span>
                            </h2>
                            <p className="font-poppins text-[14px] md:text-[16px]  text-black mt-4 leading-relaxed">
                                Keeps your creative well full with thousands of music production assets updated weekly. AI-suggested
                                content tailored just for you.
                                Inspiration isn't something you wait for, it's something you find. Creditmastr helps you find creative ideas faster.</p>
                                <ul className="mt-3 list-none p-0 font-poppins text-[14px] md:text-[16px]">
                                    <li className="flex items-center gap-2 mb-2 text-[#565656]">
                                        <Check className="text-[#2563eb] w-5 h-5 shrink-0 "/>
                                        <span>Contents, beats, drum kits, stems, presets, and MIDI</span>
                                    </li>

                                    <li className="flex items-center gap-2 mb-2 text-[#565656]">
                                        <Check className="text-[#2563eb] w-5 h-5 shrink-0 "/>
                                        <span>Every mood, genre and instrument</span>
                                    </li>
                                    
                                    <li className="flex items-center gap-2 mb-2 text-[#565656]">
                                        <Check className="text-[#2563eb] w-5 h-5 shrink-0 "/>
                                        <span>Tips and tutorials</span>
                                    </li>
                                    


                                </ul>
                                <Link to="/join-waitlist" className="flex items-center gap-4 mt-10 text-[#2563eb]">
                                    <span className="font-medium">Join the waitlist </span>
                                    <ArrowRight className="text-[#2563eb] w-5 h-5 shrink-0 "/>

                                </Link>

                            
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative mb-15 overflow-hidden rounded-2xl bg-white px-5 py-12 md:px-8 md:py-18 xl:px-12">
                <div className="grid gap-6 md:grid-cols-[1.25fr_1fr] md:items-center md:gap-12">
                    <h2 className="font-poppins text-3xl font-semibold leading-tight text-black md:text-5xl">
                        Why music platforms
                        <span className="block italic">are not this simple</span>
                    </h2>
                    <p className="font-poppins text-[15px] leading-relaxed text-[#9a9a9a] md:text-[17px]">
                        Licensing marketplaces and creation platforms can look easy at first, but the real cost often shows up after you start building.
                    </p>
                </div>

                <div className="mt-10 grid gap-5 md:grid-cols-3">
                    <article className="rounded-2xl border border-solid border-[#2d2d2d12] bg-white p-7  md:p-8">
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5f5f5]">
                            <BadgeDollarSign className="h-5 w-5 text-black"/>
                        </div>
                        <h3 className="font-poppins text-xl font-semibold text-black">
                            Hidden fees
                        </h3>
                        <p className="mt-4 font-poppins text-[15px] leading-relaxed text-[#9a9a9a]">
                            Music platform fees, and upgrade costs can turn a simple license into a moving target.
                        </p>
                    </article>

                    <article className="rounded-2xl border border-solid border-[#2d2d2d12] bg-white p-7  md:p-8">
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5f5f5]">
                            <Layers className="h-5 w-5 text-black"/>
                        </div>
                        <h3 className="font-poppins text-xl font-semibold text-black">
                            Inconsistent pricing
                        </h3>
                        <p className="mt-4 font-poppins text-[15px] leading-relaxed text-[#9a9a9a]">
                            Producers often set different prices for beats, samples, loops, and drum kits, making budgets hard to predict.
                        </p>
                    </article>

                    <article className="rounded-2xl border border-solid border-[#2d2d2d12] bg-white p-7  md:p-8">
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5f5f5]">
                            <Ban className="h-5 w-5 text-black"/>
                        </div>
                        <h3 className="font-poppins text-xl font-semibold text-black">
                            Lost credits
                        </h3>
                        <p className="mt-4 font-poppins text-[15px] leading-relaxed text-[#9a9a9a]">
                            Cancel a subscription and unused credits or tokens can disappear, even when you already paid for them.
                        </p>
                    </article>
                </div>
            </section>
        </div>
    );
}

export default BeforeValueProposition;
