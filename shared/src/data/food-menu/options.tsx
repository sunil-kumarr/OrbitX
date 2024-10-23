import {
    ArrowDownIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    CheckCircledIcon,
    CircleIcon,
    CrossCircledIcon,
    QuestionMarkCircledIcon,
    StopwatchIcon,
  } from "@radix-ui/react-icons"
  
  export const absentReasons = [
    {
      value: "appointment",
      label: "Appointment",
    },
    {
      value: "illness",
      label: "Illness",
    },
    {
      value: "weather",
      label: "Weather",
    },
    {
      value: "vacation",
      label: "Vacation",
    },
    {
      value: "holiday",
      label: "Holiday",
    },
    {
      value: "other",
      label: "Other",
    },
  ]
  
  export const statuses = [
    {
      value: "prospect",
      label: "Prospect",
      icon: QuestionMarkCircledIcon,
    },
    {
      value: "toured",
      label: "Toured",
      icon: CircleIcon,
    },
    {
      value: "applied",
      label: "Applied",
      icon: StopwatchIcon,
    },
    {
      value: "waitlist",
      label: "WaitList",
      icon: CheckCircledIcon,
    },
    {
      value: "enrolled",
      label: "Enrolled",
      icon: CrossCircledIcon,
    },
    {
      value: "active",
      label: "Active",
      icon: CrossCircledIcon,
    },
    {
      value: "inactive",
      label: "Inactive",
      icon: CrossCircledIcon,
    },
    {
      value: "graduated",
      label: "Graduated",
      icon: CrossCircledIcon,
    },
    {
      value: "removed",
      label: "Removed",
      icon: CrossCircledIcon,
    },
    {
      value: "duplicate",
      label: "Duplicate",
      icon: CrossCircledIcon,
    },
  ]
  
  export const priorities = [
    {
      label: "Low",
      value: "low",
      icon: ArrowDownIcon,
    },
    {
      label: "Medium",
      value: "medium",
      icon: ArrowRightIcon,
    },
    {
      label: "High",
      value: "high",
      icon: ArrowUpIcon,
    },
  ]