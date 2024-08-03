type HoursColumn = {
  title: string;
  hours: string;
};

interface ScheduleItem {
  subtitle?: string;
  description?: string;
  element?: JSX.Element;
}

interface ScheduleContentProps {
  items: ScheduleItem[];
  hoursColumn?: HoursColumn[];
}

export { ScheduleContentProps, ScheduleItem, HoursColumn };
