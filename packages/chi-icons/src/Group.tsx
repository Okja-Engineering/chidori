import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGroup = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M1.45.95a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-1.5h1.5a.5.5 0 0 0 0-1zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm-.5 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 1 1 0 1h-3a.5.5 0 0 1-.5-.5m-3.5-7.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0zm11.5-.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m-2-4.5a.5.5 0 1 0 0 1h1.5v1.5a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.501-.5zm-10 10a.5.5 0 0 1 .5.5v1.5h1.5a.5.5 0 1 1 0 1h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5m12.5.5a.5.5 0 0 0-1 0v1.5h-1.5a.5.5 0 1 0 0 1h2a.5.5 0 0 0 .5-.5z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgGroup);
export default ForwardRef;