import React, { SVGProps } from "react"
import styled from "styled-components"
import iconsSet from "../shared/icons"

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, "ref"> {
  block?: boolean
  icon: keyof typeof iconsSet
}

const Svg = styled.svg<Omit<IconProps, "icon">>`
  display: ${props => (props.block ? "block" : "inline-block")};
  vertical-align: middle;

  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`

const Path = styled.path`
  fill: currentColor;
`

const Icon: React.FC<IconProps> = ({ icon, block = false, ...props }) => {
  return (
    <Svg
      viewBox="0 0 1024 1024"
      width="24px"
      height="24px"
      block={block}
      {...props}
    >
      {iconsSet[icon].map((d, i) => (
        <Path key={i} d={d} />
      ))}
    </Svg>
  )
}

export default Icon
