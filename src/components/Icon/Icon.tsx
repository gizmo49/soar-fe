import { ReactSVG } from 'react-svg';
import "./Icon.scss";


interface IconProps {
  name: string;
  className?: string;
}

function Icon({ name, className }: IconProps) {
  return (
    <ReactSVG
      src={`/images/icons/${name}.svg`}
      className={`icon d__svg ${className ? className : ''}`}
    />
  )
}

export default Icon