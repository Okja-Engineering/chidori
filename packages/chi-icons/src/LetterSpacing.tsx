import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLetterSpacing = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M4.553 1c.2 0 .38.12.46.303L8.01 8.3a.5.5 0 1 1-.92.394l-.975-2.277H2.99l-.976 2.277a.5.5 0 0 1-.92-.394l3-6.997A.5.5 0 0 1 4.552 1m0 1.77 1.199 2.797H3.354zm6.503 6.232a.5.5 0 0 0 .466-.317l2.751-7.002a.5.5 0 0 0-.93-.366l-2.287 5.818L8.77 1.317a.5.5 0 1 0-.931.366l2.752 7.002a.5.5 0 0 0 .465.317m3.898 3.498a.4.4 0 0 1-.118.283l-2 2a.4.4 0 0 1-.565-.566l1.317-1.317H1.519l1.318 1.317a.4.4 0 0 1-.566.566l-2-2a.4.4 0 0 1 0-.566l2-2a.4.4 0 0 1 .566.566L1.519 12.1h12.069l-1.317-1.317a.4.4 0 0 1 .565-.566l2 2a.4.4 0 0 1 .118.283" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgLetterSpacing);
export default ForwardRef;