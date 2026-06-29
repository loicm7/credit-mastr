import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
    {
        question: "How do Sounds credits work?",
        answer: "Use credits to download your favorite Beats samples, loops, one-shots, presets, MIDI.",
    },
    {
        question: "Is my DAW supported?",
        answer: "All sounds works with any DAW. The source files for your sounds will download to a location on your computer.",
    },
    {
        question: "Can I use it for free?",
        answer: "Downloading and using Creditmastr's sounds requires an active subscription or a license.",
    },
    {
        question: "Are your instrumentals and samples royalty-free?",
        answer: "Yes! The instrumentals and samples on Creditmastr are royalty-free until it hits big, meaning you can use them in your project without having to pay royalties to artists or rights until your track hits a million streams or is released by a major label. A Clearance will be required.",
    },
    {
        question: "Can I purchase credits if I run out?",
        answer: "Yes, you can purchase additional download credits.",
    },
    {
        question: "How many credits do sounds cost?",
        answer: "For now, we are still working on it",
    },
    {
        question: "Where does your music come from?",
        answer: "We work with talented music producers, musicians and sound engineers from around the world to bring you high-quality, original sounds that are in tune with your creative needs.",
    },
];

function FAQs() {
    const [openQuestion, setOpenQuestion] = useState(null);

    const handleToggle = (question) => {
        setOpenQuestion((currentQuestion) => currentQuestion === question ? null : question);
    };

    return (
        <section className="col-start-2 col-span-14 md:col-start-4 md:col-span-10 pb-28">
            <div className="mx-auto w-full max-w-4xl">
                <h2 className="font-poppins text-5xl md:text-6xl text-center font-bold capitalize">
                    FAQs
                </h2>
                <div className="mt-12 border-y border-solid border-[#d9d9d9]">
                    {faqs.map((faq) => {
                        const isOpen = openQuestion === faq.question;

                        return (
                            <div key={faq.question} className="border-b border-solid border-[#d9d9d9] last:border-b-0">
                                <button
                                    type="button"
                                    className="flex w-full items-center justify-between gap-6 py-6 text-left font-poppins text-xl font-medium text-black md:py-7 md:text-2xl"
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-${faq.question.replaceAll(" ", "-").toLowerCase()}`}
                                    onClick={() => handleToggle(faq.question)}
                                >
                                    <span>{faq.question}</span>
                                    <Plus
                                        className={`h-6 w-6 shrink-0 text-black transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                                        aria-hidden="true"
                                    />
                                </button>
                                <div
                                    id={`faq-${faq.question.replaceAll(" ", "-").toLowerCase()}`}
                                    className={`grid transition-all duration-200 ease-out ${isOpen ? "grid-rows-[1fr] pb-7" : "grid-rows-[0fr]"}`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="max-w-3xl font-poppins text-base leading-relaxed text-[#565656] md:text-lg">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default FAQs;
