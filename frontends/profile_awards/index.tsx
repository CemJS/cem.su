import { Cemjsx, front, Func, Static, Fn } from "cemjs-all";
import Navigation from "./navigation";
import awardIcon from "@svg/personalAwards/badge1.svg";

front.listener.finish = () => {
  return;
};

front.func.test = () => {
  return;
};

export type Award = {
  icon: String;
  title: string;
  reward: string;
  description: string;
  progress: number | true;
  maxProgress: number;
}
export type ServerResponse = {
  awards: Award[][];
}
front.loader = async () => {
  const result: ServerResponse = {
    awards: [
      [ 
        {
          icon: awardIcon,
          title: 'Добро пожаловать',
          reward: '0.5 cemd',
          description: 'За регситрацию на сайте',
          progress: true,
          maxProgress: 1,
        },
      ],
      [ 
        {
          icon: awardIcon,
          title: 'Любопытство',
          reward: '10 EXP',
          description: '1 вопрос задан на платформе',
          progress: 0,
          maxProgress: 1,
        },
        {
          icon: awardIcon,
          title: 'Любопытство',
          reward: '0.1 CEMD',
          description: '5 вопрос задан на платформе',
          progress: 0,
          maxProgress: 5,
        },
        {
          icon: awardIcon,
          title: 'Любопытство',
          reward: '0.8 CEMD',
          description: '30 вопрос задан на платформе',
          progress: 0,
          maxProgress: 30,
        },
        {
          icon: awardIcon,
          title: 'Любопытство',
          reward: '0.8 CEMD',
          description: '30 вопрос задан на платформе',
          progress: 0,
          maxProgress: 30,
        },
        {
          icon: awardIcon,
          title: 'Любопытство',
          reward: '0.8 CEMD',
          description: '30 вопрос задан на платформе',
          progress: 0,
          maxProgress: 30,
        }
      ],
      [ 
        {
          icon: awardIcon,
          title: 'Ответчик',
          reward: '10 EXP',
          description: '1 предложенный ответ на вопрос на платформе',
          progress: 0,
          maxProgress: 1,
        },
      ],
      [
        {
          icon: awardIcon,
          title: 'Отличник',
          reward: '0.5 cemd',
          description: '1 ответ выбран лучшим',
          progress: 0,
          maxProgress: 1,
        },
      ],
      [ 
        {
          icon: awardIcon,
          title: 'Ответчик',
          reward: '10 EXP',
          description: '1 предложенный ответ на вопрос на платформе',
          progress: true,
          maxProgress: 1,
        },
      ],
      [
        {
          icon: awardIcon,
          title: 'Отличник',
          reward: '0.5 cemd',
          description: '1 ответ выбран лучшим',
          progress: 0,
          maxProgress: 1,
        },
      ],
      [
        {
          icon: awardIcon,
          title: 'Отличник',
          reward: '0.5 cemd',
          description: '1 ответ выбран лучшим',
          progress: 0,
          maxProgress: 1,
        },
      ],
      [
        {
          icon: awardIcon,
          title: 'Отличник',
          reward: '0.5 cemd',
          description: '1 ответ выбран лучшим',
          progress: 0,
          maxProgress: 1,
        },
      ]
    ]
  } 

  Static.awards = result;

  return;
};

front.destroy = async () => {
  return;
};

front.display = () => {
  return (
    <Navigation />
  );
};

export { front };
