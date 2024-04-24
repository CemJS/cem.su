export interface subscriberObject {
  avatar: {
    name: string;
    type: string;
  };
  frame: {
    active: boolean;
    name: string;
  };
  fullName: string;
  id: string;
  nickname: string;
  online: boolean;
  statistics: {
    level: string;
  };
  subscribed: boolean;
}
