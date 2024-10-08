import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLinkNone2 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M10.679 2.954c-.636-.417-1.49-.408-2.167.051-.154.105-.32.268-.747.695l-.619.618a.5.5 0 0 1-.707-.707l.619-.619.043-.042c.37-.37.606-.607.849-.772.994-.675 2.288-.71 3.278-.06.241.159.472.39.824.741l.044.045.045.045c.351.351.582.582.74.823.651.99.616 2.284-.059 3.278-.165.243-.402.48-.771.85l-.043.042-.619.619a.5.5 0 1 1-.707-.707l.619-.619c.427-.427.589-.592.694-.747.46-.676.468-1.531.051-2.167-.095-.144-.245-.298-.657-.71s-.566-.562-.71-.657M4.318 6.44a.5.5 0 0 1 0 .707l-.619.618c-.427.427-.59.593-.694.747-.46.677-.468 1.532-.051 2.167.095.144.245.298.657.71s.566.563.71.657c.635.418 1.49.409 2.167-.05.154-.106.32-.268.747-.695l.618-.619a.5.5 0 1 1 .708.707l-.62.62-.042.042c-.37.37-.606.606-.85.771-.993.676-2.287.71-3.277.06-.241-.158-.472-.39-.824-.74q-.022-.023-.044-.045l-.045-.045c-.351-.351-.582-.582-.741-.824-.65-.99-.615-2.284.06-3.278.165-.243.402-.48.771-.849l.043-.043.619-.618a.5.5 0 0 1 .707 0" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgLinkNone2);
export default ForwardRef;