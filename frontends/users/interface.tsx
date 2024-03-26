export interface UsersObject {
    avatar: {
      active: boolean;
      dateCreate: number;
      name: string;
      type: string;
    };
    awards: [
      {
        action: string;
        active: boolean;
        dateCreate: string;
        description: string;
        icon: string;
        id: string;
        name: string;
        type: string;
      },
    ];
    country: {
      active: boolean;
      code: string;
      dateCreate: number;
      dateUpdate: number;
      engName: string;
      euro: boolean;
      id: string;
      origName: string;
      phone: number;
    };
    frame: {
      active: boolean;
      dateCreate: string;
      name: string;
    };
    fullname: string;
    id: string;
    information: {
      speciality: string;
    };
    mainLanguage: {
      code: string;
      id: string;
    };
    nickname: string;
    rank: {
      expert: boolean;
    };
    showDate: string;
    statistic: {
      answer: number;
      bestAnswer: number;
      comment: number;
      complaint: number;
      complaintDo: number;
      evaluationMinus: number;
      evaluationPlus: number;
      exp: number;
      expNext: number;
      expTotal: number;
      follower: number;
      level: number;
      post: number;
      question: number;
      rating: number;
      referral: number;
      referralPay: number;
      referralReg: number;
      subscribe: number;
      timeOnline: number;
      view: number;
    };
    status: {
      active: boolean;
      manualOutput: boolean;
      role: boolean;
      team: boolean;
    };
  }