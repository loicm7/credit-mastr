import { cld } from "../../utils/cloudinaryInstance";
import { AdvancedImage } from "@cloudinary/react";
import { scale } from "@cloudinary/url-gen/actions/resize";
import { dpr } from "@cloudinary/url-gen/actions/delivery";

function CldHeroSectionImage({ imageId, ...rest }) {

    const myImage = cld
        .image(imageId)
        .format("auto")
        .quality("auto")
        .delivery(dpr(1.0))
        .resize(scale().width(700));

    return (
        <AdvancedImage cldImg={myImage} {...rest} width="576px" height="600px"/>
    );
}

export default CldHeroSectionImage;