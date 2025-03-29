import * as React from "react";
import Avatar from "../Avatar";

interface MapPinProps {
  src: string;
  size?: string;
}

function MapPin({ src, size = "80px" }: MapPinProps) {
  return <Avatar src={src} size={size} isCircle isBorder></Avatar>;
}

export default React.memo(MapPin);
