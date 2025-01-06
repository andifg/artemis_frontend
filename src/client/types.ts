export type MeatPortionSize = "small" | "medium" | "large";

export type BodyCreateMeatPortion = {
  size: MeatPortionSize;
  ID: string;
  date: Date;
};

export type MeatPortion = {
  size?: MeatPortionSize;
  ID: string;
  UserID: string;
  date: string;
};

export type APIResponse<T> = {
  responseKey: string;
  responseMessage: string;
  data: T;
};

export type Timeframe = "week" | "month" | "6month";

export type AverageMeatPortions = {
  Timeframe: Timeframe;
  Value: number;
  ChangeRate: number;
};
