import Link from "next/link";
import { MenuNavigation } from "@/types/NavigationSections";
import NavbarWebApp from "../molecules/NavbarWebApp";
import React from "react";

function HeaderWebApp(props: {
  headingTitle: string;
  headingSubTitle: string;
  currentPage: MenuNavigation;
}) {
  const currentPage: MenuNavigation = props.currentPage;
  const currentMenuPage = React.useMemo(() => {
    switch (currentPage) {
      case MenuNavigation.homePageApp:
        return MenuNavigation.homePageApp;
      case MenuNavigation.singleBooking:
        return MenuNavigation.singleBooking;
      case MenuNavigation.groupBooking:
        return MenuNavigation.groupBooking;
      default:
        // Log an error or handle the unknown section
        console.error(`Unknown section: ${currentPage}`);
        // Return a default step or handle as appropriate
        return;
    }
  }, [currentPage]);

  return (
    <div className="flex flex-col items-center w-full rounded-b-2xl text-white bg-gradient-to-tr from-blue-800 via-blue-800 to-blue-600 py-2">
      <div className="flex flex-col items-start w-11/12">
        <NavbarWebApp />
        <div className="overflow-x-auto w-full flex text-xxs md:text-xs text-left">
          <Link
            href="/home-app"
            className={`flex items-center header-menu-items ms-0 ${
              currentMenuPage == MenuNavigation.homePageApp
                ? "header-menu-item-current-page"
                : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              viewBox="0 -960 960 960"
              width="28"
            >
              <path
                className="fill-current"
                d="M240-200h133.847v-237.692h212.306V-200H720v-360L480-740.769 240-560v360Zm-59.999 59.999v-449.998L480-815.767l299.999 225.768v449.998H526.154v-237.693h-92.308v237.693H180.001ZM480-470.385Z"
              />
            </svg>
            <span className="pl-1 pr-2">Home</span>
          </Link>
          <Link
            href="/single-booking"
            className={`flex items-center header-menu-items ${
              currentMenuPage == MenuNavigation.singleBooking
                ? "header-menu-item-current-page"
                : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              viewBox="0 -960 960 960"
              width="28"
            >
              <path
                className="fill-current"
                d="M732.308-410.001v-127.307H605v-45.384h127.308v-127.307h45.383v127.307h127.308v45.384H777.691v127.307h-45.383ZM360-492.924q-57.749 0-95.22-37.471t-37.471-95.412q0-57.942 37.471-95.221 37.471-37.278 95.22-37.278t95.22 37.278q37.471 37.279 37.471 95.221 0 57.941-37.471 95.412-37.471 37.471-95.22 37.471ZM60.002-187.694v-75.922q0-30 15.96-55.038 15.962-25.038 45.501-37.884 68.845-30.308 125.044-43.423 56.2-13.115 113.308-13.115 57.108 0 113.185 13.115 56.076 13.115 124.922 43.423 29.538 13.846 45.807 38.384 16.27 24.538 16.27 54.538v75.922H60.001Zm45.383-45.384h509.23v-30.538q0-15.615-9.577-29.923-9.577-14.308-26.116-22.462-64.076-29.923-113.34-40.807Q416.318-367.693 360-367.693q-56.318 0-106.082 10.885-49.764 10.884-113.456 40.807-16.923 8.154-26 22.462-9.077 14.308-9.077 29.923v30.538ZM360-538.307q37.461 0 62.384-24.924 24.923-24.923 24.923-62.384t-24.923-62.384Q397.461-712.922 360-712.922t-62.384 24.923q-24.923 24.923-24.923 62.384t24.923 62.384q24.923 24.924 62.384 24.924Zm0-87.308Zm0 392.537Z"
              />
            </svg>
            <span className="pl-1 pr-2">
              Single
              <br />
              Booking
            </span>
          </Link>
          <Link
            href="/group-booking"
            className="flex items-center header-menu-items"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              viewBox="0 -960 960 960"
              width="28"
            >
              <path
                className="fill-current"
                d="M503.846-494.309q25.539-27.769 37.769-63.768 12.231-36 12.231-74.23 0-38.23-12.231-74.23-12.23-36-37.769-63.769 52.692 6.077 87.5 45.5 34.807 39.422 34.807 92.499 0 53.076-34.807 92.499-34.808 39.423-87.5 45.499Zm210 306.615v-93.845q0-32.709-13.308-62.239-13.307-29.529-37.769-50.683 46 15.308 84.692 41.308 38.692 25.999 38.692 71.614v93.845h-72.307Zm72.307-262.307v-80h-80v-59.998h80v-80h59.998v80h80v59.998h-80v80h-59.998Zm-452.306-42.308q-57.749 0-98.874-41.124-41.124-41.125-41.124-98.874 0-57.75 41.124-98.874 41.125-41.125 98.874-41.125 57.75 0 98.874 41.125 41.125 41.124 41.125 98.874 0 57.749-41.125 98.874-41.124 41.124-98.874 41.124ZM33.849-187.694v-88.922q0-29.384 15.961-54.422 15.962-25.038 42.654-38.5 59.307-29.077 119.653-43.615 60.346-14.538 121.73-14.538 61.384 0 121.73 14.538 60.346 14.538 119.654 43.615 26.692 13.462 42.653 38.5 15.962 25.038 15.962 54.422v88.922H33.849Zm299.998-364.613q33 0 56.5-23.5t23.5-56.5q0-33-23.5-56.5t-56.5-23.5q-33 0-56.5 23.5t-23.5 56.5q0 33 23.5 56.5t56.5 23.5Zm-240 304.614h480v-28.923q0-12.154-7.038-22.5-7.039-10.346-19.116-16.885-51.692-25.461-105.418-38.577-53.725-13.115-108.428-13.115-54.702 0-108.428 13.115-53.725 13.116-105.418 38.577-12.077 6.539-19.115 16.885-7.039 10.346-7.039 22.5v28.923Zm240-384.614Zm0 384.614Z"
              />
            </svg>
            <span className="pl-1 pr-2">
              Group
              <br />
              Booking
            </span>
          </Link>
          <Link href="/" className="flex items-center header-menu-items">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              viewBox="0 -960 960 960"
              width="28"
            >
              <path
                className="fill-current"
                d="M440-501Zm0 354.075-86.612-77.844Q271.771-299 215.656-354.616q-56.116-55.615-90.77-101.577-34.654-45.962-49.77-86.423Q60.003-583.078 60.003-626q0-85.154 57.422-142.269Q174.847-825.384 260-825.384q52.385 0 99 24.501 46.615 24.5 81 70.269 34.385-45.769 81-70.269 46.615-24.501 99-24.501 75.23 0 126.961 44.347 51.73 44.346 67.115 111.038H751Q737.231-714.615 700.693-740 664.154-765.385 620-765.385q-49.846 0-88.192 27.5-38.347 27.5-72.27 77.885h-39.076q-33.693-50.77-73.385-78.077-39.692-27.308-87.077-27.308-57.769 0-98.885 39.692Q120-686 120-626q0 33.384 14 67.769 14 34.385 50 79.269 36 44.885 98 105.154T440-228q28.308-25.308 60.615-53.769 32.308-28.462 54.462-49.616l6.692 6.692 14.692 14.692 14.692 14.692 6.692 6.693q-22.769 21.153-54.269 48.923-31.5 27.769-59.423 53.077L440-146.925Zm274.615-143.076v-120h-120v-59.998h120v-120h59.999v120h120v59.998h-120v120h-59.999Z"
              />
            </svg>
            <span className="pl-1 pr-2">
              Become
              <br />a member
            </span>
          </Link>
        </div>
        <div className="text-xl text-left font-black pt-8 tracking-tight">
          {props.headingTitle}
        </div>
        <div className="text-left pb-3 text-sm tracking-wider">{props.headingSubTitle}</div>
      </div>
    </div>
  );
}

export default HeaderWebApp;
