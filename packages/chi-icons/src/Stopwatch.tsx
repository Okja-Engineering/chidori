import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgStopwatch = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M5.5.5A.5.5 0 0 1 6 0h3a.5.5 0 0 1 0 1H8v1.12a6.36 6.36 0 0 1 2.992 1.016 1 1 0 0 1 .066-.078l.8-.8a.625.625 0 0 1 .884.884l-.775.775A6.4 6.4 0 1 1 7 2.119V1H6a.5.5 0 0 1-.5-.5m-3.4 8a5.4 5.4 0 1 1 10.8 0 5.4 5.4 0 0 1-10.8 0m5.9-4a.5.5 0 0 0-1 0v5a.5.5 0 1 0 1 0z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgStopwatch);
export default ForwardRef;