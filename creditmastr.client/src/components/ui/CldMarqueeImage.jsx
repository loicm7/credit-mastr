import { cld } from "../../utils/cloudinaryInstance";
import { AdvancedImage } from "@cloudinary/react";
import { scale } from "@cloudinary/url-gen/actions/resize";
import { dpr } from "@cloudinary/url-gen/actions/delivery";
import {fill} from "@cloudinary/url-gen/actions/resize";

function CldMarqueeImage({ imageId, ...rest }) {

    const myImage = cld
        .image(imageId)
        .resize(fill().width(240).height(240))
        .format("auto")
        .quality("auto")
        .delivery(dpr(1.0));
        

    return (
        <AdvancedImage cldImg={myImage} {...rest}  />
    );
}

export default CldMarqueeImage;