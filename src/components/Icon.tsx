import React, { SVGProps } from "react"
import styled from "styled-components"
import iconsSet from "../shared/icons"

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, "ref"> {
  block?: boolean
  icon: keyof typeof iconsSet
}

const IconComponent: React.FC<IconProps> = ({ icon, className }) => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      width="24px"
      height="24px"
      className={className}
    >
      {iconsSet[icon].map((d, i) => (
        <Path key={i} d={d} />
      ))}
    </svg>
  )
}

const Icon = styled(IconComponent)`
  display: ${props => (props.block ? "block" : "inline-block")};
  vertical-align: middle;

  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`

const Path = styled.path`
  fill: currentColor;
`

export default Icon
