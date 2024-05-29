import { Cemjsx, Static, Ref, Fn, front, Func } from "cemjs-all";
import CemIcon from '@svg/cem.svg'


type Tab = {
  name: string;
  active: boolean;
  border?: boolean;
}
type ServerResponse = {
  icon: String;
  title: string;
  text: string;
  time: Date;
}
function Content() {
  return (
    <div class="flex flex-col gap-5 p-2 mt-6">
      { (Static.notificationContent as ServerResponse[]).map(el => 
        <div class="flex content-center py-4 px-6 bg-[#3E4354] rounded-xl gap-4">
          <div class="flex items-center justify-center"><img class="size-8" src={ el.icon } alt={ el.title } /></div>
          <div class="">
            <h3 class="text-2xl font-bold">{ el.title }</h3>
            <p class="text-lg">{ el.text }</p>
          </div>
          <div class="ml-auto flex items-end">Day: { el.time.getDate() }</div>
        </div>
      )}
    </div>
  ) 
}

const changeTabContent = async (name: Tab['name']) => {
  (Static.notificationContent as ServerResponse[]) = [
    {
      icon: CemIcon,
      title: "change notification",
      text: "text",
      time: new Date(),
    },
    {
      icon: CemIcon,
      title: "New change",
      text: "text new",
      time: new Date(),
    }
  ];
}

function getActiveTab() {
  return (Static.tabs as Tab[]).find((item) => {
    return item.active === true;
  });
}

function listenerTabChange() {
  const tab = getActiveTab();
  changeTabContent(tab.name);
}

export default function () {
  listenerTabChange();

  return (
    <main class="relative overflow-hidden">
      <Content />
    </main>
  );
}
