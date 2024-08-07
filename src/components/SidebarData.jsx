import React from "react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as GrIcons from "react-icons/gr";
import { MdSettingsSuggest } from "react-icons/md";
import { HiArrowsUpDown } from "react-icons/hi2";
import { FaBookReader } from "react-icons/fa";
export const SidebarData = [
  {
    title: "My Dashboard",
    path: "/dashboard",
    icon: <RiIcons.RiDashboardFill />,
  },
  {
    title: "Accounts",
    path: "/accounts",
    icon: <GrIcons.GrMoney />,
  },
  {
    title: "Budgets",
    path: "/budgets",
    icon: <IoIcons.IoIosPaper />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <MdSettingsSuggest />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Transactions",
    path: "/finsmartTransactions",
    icon: <HiArrowsUpDown />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Statements",
    path: "/statement",
    icon: <FaIcons.FaPaperclip />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Learning Center",
    path: "/finEducation",
    icon: <FaBookReader />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
];
