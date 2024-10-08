import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgReader = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M4.2 1h-.023c-.308 0-.573 0-.79.02-.231.023-.459.071-.67.201a1.5 1.5 0 0 0-.496.495c-.13.212-.178.44-.2.67C2 2.604 2 2.87 2 3.177v8.646c0 .308 0 .573.02.79.023.231.071.459.201.67a1.5 1.5 0 0 0 .495.496c.212.13.44.178.67.2.218.021.483.021.791.021h6.646c.308 0 .573 0 .79-.02.231-.023.459-.071.67-.201a1.5 1.5 0 0 0 .496-.495c.13-.212.178-.44.2-.67.021-.218.021-.483.021-.791V3.177c0-.308 0-.573-.02-.79a1.5 1.5 0 0 0-.201-.67 1.5 1.5 0 0 0-.495-.496 1.5 1.5 0 0 0-.67-.2A9 9 0 0 0 10.823 1H4.2m-.961 1.074c.028-.018.085-.043.242-.058C3.645 2.001 3.863 2 4.2 2h6.6c.337 0 .555 0 .72.016.156.015.213.04.241.058a.5.5 0 0 1 .165.165c.018.028.043.085.058.242.015.164.016.382.016.719v8.6c0 .337 0 .555-.016.72-.015.156-.04.213-.058.241a.5.5 0 0 1-.165.165c-.028.018-.085.043-.242.058A9 9 0 0 1 10.8 13H4.2c-.337 0-.555 0-.72-.016-.156-.015-.213-.04-.241-.058a.5.5 0 0 1-.165-.165c-.018-.028-.043-.085-.058-.242A9 9 0 0 1 3 11.8V3.2c0-.337 0-.555.016-.72.015-.156.04-.213.058-.241a.5.5 0 0 1 .165-.165M5 10a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm-.5-2.5A.5.5 0 0 1 5 7h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M5 4a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgReader);
export default ForwardRef;