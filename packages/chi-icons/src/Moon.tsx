import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMoon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M2.9.5a.4.4 0 0 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zm3 3a.4.4 0 1 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zm-4 3a.4.4 0 1 0-.8 0v.6H.5a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 0 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zM8.544.982l-.298-.04c-.213-.024-.34.224-.217.4q.211.305.389.632A6.602 6.602 0 0 1 2.96 11.69c-.215.012-.334.264-.184.417q.103.105.21.206l.072.066.26.226.188.148.121.09.187.131.176.115q.18.115.37.217l.264.135.26.12.303.122.244.086a6.6 6.6 0 0 0 1.103.26l.317.04.267.02q.19.011.384.011a6.6 6.6 0 0 0 6.56-7.339l-.038-.277a6.6 6.6 0 0 0-.384-1.415l-.113-.268-.077-.166-.074-.148a6.6 6.6 0 0 0-.546-.883l-.153-.2-.199-.24-.163-.18-.12-.124-.16-.158-.223-.2-.32-.26-.245-.177-.292-.19-.321-.186-.328-.165-.113-.052-.24-.101-.276-.104-.252-.082-.325-.09-.265-.06zm1.86 4.318a7.6 7.6 0 0 0-.572-2.894 5.601 5.601 0 1 1-4.748 10.146 7.6 7.6 0 0 0 3.66-2.51.749.749 0 0 0 1.355-.442.75.75 0 0 0-.584-.732q.093-.174.178-.355A1.25 1.25 0 1 0 10.35 6.2q.052-.442.052-.9" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgMoon);
export default ForwardRef;