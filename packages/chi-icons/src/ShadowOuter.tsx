import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShadowOuter = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M12.14 3.886a6 6 0 1 1-8.244 8.269l.425-.263a5.5 5.5 0 1 0 7.557-7.58z" clipRule="evenodd" opacity={0.05} /><path fill="#000" fillRule="evenodd" d="M12.851 5.073a5.5 5.5 0 1 1-7.778 7.778l.357-.35a5 5 0 1 0 7.07-7.07z" clipRule="evenodd" opacity={0.2} /><path fill="#000" fillRule="evenodd" d="M13.302 6.45a5 5 0 0 1-6.901 6.822l.26-.427a4.5 4.5 0 0 0 6.21-6.14z" clipRule="evenodd" opacity={0.35} /><path fill="#000" fillRule="evenodd" d="M13.375 7.94q.124.511.125 1.06a4.5 4.5 0 0 1-5.627 4.358l.125-.485Q8.479 13 9 13a4 4 0 0 0 3.888-4.942z" clipRule="evenodd" opacity={0.5} /><path fill="#000" fillRule="evenodd" d="M12.916 9.821a4 4 0 0 1-3.124 3.1l-.098-.49a3.5 3.5 0 0 0 2.732-2.712z" clipRule="evenodd" opacity={0.65} /><path fill="#000" fillRule="evenodd" d="M1.277 7.503a6.225 6.225 0 1 1 12.45 0 6.225 6.225 0 0 1-12.45 0m6.225-5.275a5.275 5.275 0 1 0 0 10.55 5.275 5.275 0 0 0 0-10.55" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgShadowOuter);
export default ForwardRef;