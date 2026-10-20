import { AdvancedVideo } from "@cloudinary/react";
import { cld } from "@/utils/cloudinaryInstance";

function CldMissionAndVisionVideo() {
    const video = cld
        .video("Video_about_us_credit_mastr_wfg1sr")
        .quality("auto");

    return (
        <AdvancedVideo
            cldVid={video}
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            className="h-full w-full object-cover"
        />
    );
}

export default CldMissionAndVisionVideo;
