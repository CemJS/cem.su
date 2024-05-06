import { Cemjsx } from "cemjs-all";
import iconSettings from "@svg/profile/iconSettings.svg";

interface previewProps {
  preview: string;
  className?: string;
  clickIconSettings: () => void;
}

export default function ({
  preview,
  clickIconSettings,
  className = "",
}: previewProps) {
  return (
    <div class="absolute right-[.4375rem] top-[.125rem] z-[10] h-[1.25rem] w-[1.25rem] text-[0]">
      <img
        onclick={clickIconSettings}
        class="w-[1.25rem] cursor-pointer"
        src={iconSettings}
        alt=""
      />
    </div>
  );
}
