import * as React from "react";
import Avatar from "../Avatar";

interface MapPinProps {
  src?: string;
  size?: string;
}

const ICON_DEFAULT =
  "M16,3C10.5,3,6,7.5,6,13c0,8.4,9,15.5,9.4,15.8c0.2,0.1,0.4,0.2,0.6,0.2s0.4-0.1,0.6-0.2C17,28.5,26,21.4,26,13 C26,7.5,21.5,3,16,3z M16,17c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S18.2,17,16,17z";

const pinStyle = {
  cursor: "pointer",
  fill: "#ff8800",
  stroke: "#ff8800",
};

function MapPin({ src, size = "80px" }: MapPinProps) {
  if (!src) {
    return (
      <svg
        width="64px"
        height="64px"
        viewBox="-9.6 -15 51.20 51.20"
        style={pinStyle}
        className="text-alert-primary"
      >
        <path d={ICON_DEFAULT} />
      </svg>
    );
  }
  // If src is provided, use the Avatar component
  return <Avatar src={src} size={size} isCircle isBorder></Avatar>;
}

export default React.memo(MapPin);
