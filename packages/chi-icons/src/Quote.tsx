import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgQuote = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M9.425 3.441c.631-.204 1.359-.2 1.954.105 1.374.706 1.969 2.526 1.416 4.454-.248.865-.685 1.705-1.609 2.552-.924.848-2.206 1.348-2.8 1.348A.38.38 0 0 1 8 11.525c0-.207.176-.375.386-.375.679 0 1.286-.37 2.005-.914.55-.417.98-.95 1.217-1.414.455-.888.47-2.14-.265-2.473-.353.386-.813.61-1.366.61-1.2 0-1.907-.965-1.876-1.839.029-.835.56-1.43 1.324-1.679m-6 0c.631-.204 1.359-.2 1.954.105C6.753 4.252 7.348 6.072 6.795 8c-.248.865-.685 1.705-1.609 2.552-.924.848-2.206 1.348-2.8 1.348A.38.38 0 0 1 2 11.525c0-.207.176-.375.386-.375.679 0 1.286-.37 2.005-.914.55-.417.98-.95 1.217-1.414.455-.888.47-2.14-.265-2.473-.353.386-.814.61-1.366.61-1.2 0-1.907-.965-1.876-1.839.029-.835.56-1.43 1.324-1.679" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgQuote);
export default ForwardRef;