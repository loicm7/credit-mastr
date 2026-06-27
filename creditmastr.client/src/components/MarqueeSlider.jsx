import {MarqueeSliderCoverArtData} from "@/utils/coverArtData.js";
import CldMarqueeImage from "@/components/ui/CldMarqueeImage.jsx";


const LOGOS = [
    { id: 1, name: 'Google', logo: 'https://wikimedia.org' },
    { id: 2, name: 'Microsoft', logo: 'https://wikimedia.org' },
    { id: 3, name: 'Apple', logo: 'https://wikimedia.org' },
    { id: 4, name: 'Amazon', logo: 'https://wikimedia.org' },
    { id: 5, name: 'Meta', logo: 'https://wikimedia.org' },
    { id: 6, name: 'CreditMastr', logo: 'https://wikimedia.org' },
    { id: 7, name: 'test', logo: 'https://wikimedia.org' },
    { id: 8, name: 'Developer', logo: 'https://wikimedia.org' },
    { id: 9, name: 'DDev inc', logo: 'https://wikimedia.org' },
    { id: 10, name: 'Marc inc', logo: 'https://wikimedia.org' }
];

export default function MarqueeSlider() {
    // Duplicate the array to ensure seamless infinite looping
    const duplicatedMarquees = [...MarqueeSliderCoverArtData, ...MarqueeSliderCoverArtData];

    return (
        <div className="w-full bg-white py-12">
            {/* 1. Main Container with Gradient Fade Overlays */}
            <div className="relative mx-auto overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">

                {/* 2. Scrolling Track */}
                <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                    {duplicatedMarquees.map((item, index) => (
                        <div
                            key={`${item.id}-${index}`}
                            className="flex mx-6 h-30 w-30 md:h-60 md:w-60 shrink-0 justify-center grayscale-[0.2] transition-all duration-300 hover:grayscale-0"
                        >
                            { /* <img
                                src={item.logo}
                                alt={`${item.name} logo`}
                                className="max-h-full max-w-full object-contain"
                            /> */}
                            <CldMarqueeImage imageId={item.imageId} alt={item.title}  className="max-h-full max-w-full object-contain rounded-lg"/>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
