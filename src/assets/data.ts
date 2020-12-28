import wifi from "./images/icons/wifi.svg";
import chair from "./images/icons/ergonomic.svg";
import power from "./images/icons/power.svg";
import coffee from "./images/icons/coffee.svg";
import beanbag from "./images/icons/beanbag.svg";
import meetingRooms from "./images/icons/meeting.svg";

import wifiSmall from "./images/icons/wifi-small.svg";
import chairSmall from "./images/icons/chair-small.svg";
import powerSmall from "./images/icons/power-small.svg";
import coffeeSmall from "./images/icons/coffee-small.svg";
import beanbagSmall from "./images/icons/beanbag-small.svg";

import bread from "./images/gallery/tea1x.png";
import breadWebp from "./images/gallery/tea1x.webp";
import cafe from "./images/gallery/cafeview1x.png";
import cafeWebp from "./images/gallery/cafeview1x.webp";
import cappucino from "./images/gallery/cappucino1x.png";
import cappucinoWebp from "./images/gallery/cappucino1x.webp";
import glass from "./images/gallery/clear-glass1x.png";
import glassWebp from "./images/gallery/clear-glass1x.webp";
import table from "./images/gallery/table1x.png";
import tableWebp from "./images/gallery/table1x.webp";
import tea from "./images/gallery/tea1x.png";
import teaWebp from "./images/gallery/tea1x.webp";

export const NAVIGATION = [
  { name: "about" },
  { name: "menu" },
  { name: "workspaces" },
  { name: "contact" },
];

export const AMENITIES: Amenities = [
  {
    icon: { big: wifi, small: wifiSmall },
    name: "Fiber Wi-Fi",
    description:
      "The Internet is the lifeblood of industries today. Thus, we provide you with fiber Wi-Fi connections from three different service providers. We take seamless browsing for your work and research seriously.",
  },
  {
    icon: { big: chair, small: chairSmall },
    name: "Ergonomic Seats",
    description:
      "We want you to work or study comfortably. That is why we look for the best chairs available that can keep you working for hours without feeling uneasy.",
  },
  {
    icon: { big: power, small: powerSmall },
    name: "Power Outlets",
    description:
      "Do not worry about going low on battery on all of your devices. We have lots of charging outlets for your charging needs.",
  },
  {
    icon: { big: coffee, small: coffeeSmall },
    name: "Complimentary Beverage",
    description:
      "Your stay here entitles you to a complimentary drink – either a brewed coffee or iced tea. You can also choose to buy other handcrafted beverages such as frappes and shakes.",
  },
  {
    icon: { big: beanbag, small: beanbagSmall },
    name: "Napping Stations",
    description:
      "Your body, just like your heart, needs some rest from time to time. Let yourself relax in our power nap station. Bean bags and pillows are available too!",
  },
  {
    icon: { big: meetingRooms, small: meetingRooms },
    name: "Meeting Rooms",
    description:
      "For your meetings that need some privacy and we added perks with it too: unlimited brewed coffee and iced tea for up to ten people, projector, whiteboard, and two plates of fries.",
  },
];

export const CAROUSEL_IMAGES = [
  { src: bread, webp: breadWebp, alt: "Bread" },
  { src: cafe, webp: cafeWebp, alt: "Cafe View" },
  { src: cappucino, webp: cappucinoWebp, alt: "Cappucino" },
  { src: glass, webp: glassWebp, alt: "Clear Glass" },
  { src: table, webp: tableWebp, alt: "Table" },
  { src: tea, webp: teaWebp, alt: "Tea" },
];

export const ROOMS = [
  {
    name: "Small",
    description: "Ideal for 4 to 8 persons",
    pricing: [
      { hours: "Per Hour", price: 360 },
      { hours: "3 Hours", price: 900 },
      { hours: "Whole Day (8 Hours)", price: 2160 },
    ],
  },
  {
    name: "Medium",
    description: "Ideal for 8 to 12 persons",
    pricing: [
      { hours: "Per Hour", price: 500 },
      { hours: "3 Hours", price: 1250 },
      { hours: "Whole Day (8 Hours)", price: 3000 },
    ],
  },
  {
    name: "Grande",
    description: "Ideal for 12 to 20 persons",
    pricing: [
      { hours: "Per Hour", price: 900 },
      { hours: "3 Hours", price: 2250 },
      { hours: "Whole Day (8 Hours)", price: 5400 },
    ],
  },
];
