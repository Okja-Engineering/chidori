import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgComponent1 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M4.671 3.146a.5.5 0 0 0 0 .707l2.475 2.475a.5.5 0 0 0 .707 0l2.475-2.475a.5.5 0 0 0 0-.707L7.853.671a.5.5 0 0 0-.707 0zM7.5 5.268 5.732 3.5 7.5 1.732 9.267 3.5zM8.67 7.146a.5.5 0 0 0 0 .707l2.475 2.475a.5.5 0 0 0 .707 0l2.475-2.475a.5.5 0 0 0 0-.707l-2.475-2.475a.5.5 0 0 0-.707 0zM11.5 9.268 9.732 7.5 11.5 5.732 13.268 7.5zM4.67 11.853a.5.5 0 0 1 0-.707l2.475-2.475a.5.5 0 0 1 .707 0l2.475 2.475a.5.5 0 0 1 0 .707l-2.475 2.475a.5.5 0 0 1-.707 0zm1.061-.353L7.5 13.268 9.267 11.5 7.5 9.732zM.672 7.146a.5.5 0 0 0 0 .708l2.474 2.475a.5.5 0 0 0 .707 0l2.475-2.475a.5.5 0 0 0 0-.708L3.853 4.672a.5.5 0 0 0-.707 0zM3.5 9.268 1.732 7.5 3.5 5.732 5.267 7.5z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgComponent1);
export default ForwardRef;