import React, { useState } from 'react';
import Image, {ImageProps} from "next/image"


interface ImagePropsWithFallback extends ImageProps {
	fallbackSrc: string;
}

const ImageWithFallback = (props : ImagePropsWithFallback) => {
	const { src, fallbackSrc, ...rest } = props;
	const [imgSrc, setImgSrc] = useState(src);

	return (
		<Image
			{...rest}
			src={imgSrc}
			onError={() => {
				setImgSrc(fallbackSrc);
			}}
		/>
	);
};

export default ImageWithFallback;
