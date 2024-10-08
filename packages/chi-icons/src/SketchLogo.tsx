import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSketchLogo = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M7.537.827a.4.4 0 0 0-.074 0l-3.5.35a.38.38 0 0 0-.266.152L.7 5.425a.37.37 0 0 0 .012.465l6.498 7.898a.375.375 0 0 0 .58 0l6.498-7.898a.37.37 0 0 0 .087-.238v-.024a.37.37 0 0 0-.075-.203L11.303 1.33a.38.38 0 0 0-.266-.152zm3.388 4.448v-.023l-.003.023zm.01-.1h2.253l-1.939-2.649zm-.364-3.291-2.527-.253 2.13 3.58zm-3.615-.253-2.527.253.396 3.326zm-3.206.895L1.812 5.175h2.254zM1.794 6.025l4.965 6.034-2.535-5.992-.015-.042zm3.357 0L7.5 12.108l2.35-6.083H5.15m5.64 0-.015.042-2.535 5.992 4.965-6.034zM7.5 2.183l1.84 3.092H5.66z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgSketchLogo);
export default ForwardRef;