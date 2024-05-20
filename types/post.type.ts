export interface Post {
  author: Author;
  forFriends: boolean;
  id: string;
  media: {
    mediaName: string;
    type: string;
    preview?: string;
  }[];
  showDate: number;
  statistics: Statistics;
  subscribe: boolean;
  subscribed: boolean;
  text: string;
  online: boolean;
  hide?: boolean;
}

interface Author {
  avatar: { active: boolean; dateCreate: string | number; name: string };
  background: object;
  country: object;
  frame: {
    name: string;
    active: boolean;
    dateCreate: string | number;
  };
  fullName: string;
  id: string;
  information: any;
  interests: any;
  nickname: string;
  online: boolean;
  socials: any;
  statistics: {
    level: string;
  };
  works: any;
  status: any;
}

interface Statistics {
  comments: number;
  complain: number;
  rating: number;
  unreadComments: number;
  views: number;
}
