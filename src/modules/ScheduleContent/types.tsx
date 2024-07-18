type ScheduleItemDetails = {
  title: string;
  description: string;
  hour: string;
};

type ScheduleDetails = {
  items: ScheduleItemDetails[];
};

export { ScheduleDetails, ScheduleItemDetails };
