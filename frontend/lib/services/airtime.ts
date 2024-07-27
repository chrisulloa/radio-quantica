export type ScheduleItem = {
  start_timestamp: string;
  end_timestamp: string;
  name: string;
  id: number;
  instance_id: number;
  record: number;
  url: string;
  starts: string;
  ends: string;
};

export type WeeklySchedule = {
  monday: ScheduleItem[];
  tuesday: ScheduleItem[];
  wednesday: ScheduleItem[];
  thursday: ScheduleItem[];
  friday: ScheduleItem[];
  saturday: ScheduleItem[];
  sunday: ScheduleItem[];
};
