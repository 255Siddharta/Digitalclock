"use strict";
setInterval(() => {
  let a = new Date();
  let week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = a.getDay(),
    mon = a.getMonth(),
    hour = a.getHours();
  document.getElementsByClassName("hour")[0].innerHTML = hour < 13 ? hour : hour - 12;
  document.getElementsByClassName("min")[0].innerHTML = a.getMinutes();
  document.getElementsByClassName("sec")[0].innerHTML = a.getSeconds();
  document.getElementsByClassName("day")[0].innerHTML = week[day - 1];
  document.getElementsByClassName("month")[0].innerHTML = month[mon];
  document.getElementsByClassName("year")[0].innerHTML = a.getUTCFullYear();
});
