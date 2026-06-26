import { cld } from "../../utils/cloudinaryInstance";
import { AdvancedImage } from "@cloudinary/react";
import { scale, fill, fit } from "@cloudinary/url-gen/actions/resize";
import { dpr } from "@cloudinary/url-gen/actions/delivery";


function CldBeforeValuePropositionImg({ imageId, ...rest }){
    const myImage = cld
        .image(imageId)
        .format("auto")
        .quality("auto")
        .delivery(dpr(1.0))
        .resize(fit().width(1586).height(900));

    return (
        <AdvancedImage cldImg={myImage} {...rest} />
    );
}
export default CldBeforeValuePropositionImg;