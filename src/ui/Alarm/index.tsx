import clsx from "clsx";
import successIcon from "../../assets/icons/success.svg";
import alertIcon from "../../assets/icons/error.svg";
import warningIcon from "../../assets/icons/warning.svg";
import infoIcon from "../../assets/icons/info.svg";

type AlarmTypes = "success" | "alert" | "warning" | "info";

interface AlarmProps {
  type?: AlarmTypes;
  title: string;
  description: string;
}

function getIcon(type: string) {
  switch (type) {
    case "alert":
      return alertIcon;
    case "warning":
      return warningIcon;
    case "info":
      return infoIcon;
    default:
      return successIcon;
  }
}

const typeAlarm = {
  success: "border-success-primary bg-success-secondary text-success-primary",
  alert: "border-alert-primary bg-alert-secondary text-alert-primary",
  warning: "border-warning-primary bg-warning-secondary text-warning-primary",
  info: "border-info-primary bg-info-secondary text-info-primary",
};

const typeIcon = {
  success: "rounded-(--border-radius) bg-success-primary",
  alert: "rounded-(--border-radius) bg-alert-primary",
  warning: "rounded-(--border-radius) bg-warning-primary",
  info: "rounded-(--border-radius) bg-info-primary",
};

const defaultClasses =
  "border-l-5 p-5 flex items-start gap-5 rounded-(--border-radius) md:w-md lg:w-lg";

export default function Alarm({
  type = "success",
  title,
  description,
}: AlarmProps) {
  const icon = getIcon(type);
  const styles = clsx(defaultClasses, typeAlarm[type]);
  const iconStyles = clsx("p-1.5", typeIcon[type]);

  return (
    <div className={styles}>
      <div className={iconStyles}>
        <img className="size-4 max-w-none" src={icon} alt={type} />
      </div>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-black">{description}</p>
      </div>
    </div>
  );
}
