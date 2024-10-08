import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgModulzLogo = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M7.26 3.167 4.37 5.333V1zM1 8.222l2.889-2.166L1 3.889zM1 14l2.889-2.167L1 9.667zm6.74-5.778 2.89-2.166-2.89-2.167zM14 3.167l-2.889 2.166V1zm-2.889 7.944L14 8.944l-2.889-2.166zm-7.222 0L1 8.944l2.889-2.166zm.481-5.055 2.89 2.166V3.89zm-.481-.723L1 3.167 3.889 1zM7.74 3.167l2.889 2.166V1zM14 8.222l-2.889-2.166L14 3.889zm-2.889 3.611L14 14V9.667z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgModulzLogo);
export default ForwardRef;