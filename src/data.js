import { SiOpenaigym } from "react-icons/si";
export const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Gallery", path: "/gallery" },
  { name: "Plans", path: "/plans" },
  { name: "Trainers", path: "/trainers" },
  { name: "Contact", path: "/contact" },
];

export const programs = [
  {
    id: 1,
    icon: <SiOpenaigym />,
    title: "Program One",
    info: "This is the day that lort has made. We will rejoice!",
    path: "/programs/111",
  },
  {
    id: 2,
    icon: <SiOpenaigym />,
    title: "Program two",
    info: "This is the day that lort has made. We will rejoice!",
    path: "/programs/222",
  },
  {
    id: 3,
    icon: <SiOpenaigym />,
    title: "Program three",
    info: "This is the day that lort has made. We will rejoice!",
    path: "/programs/333",
  },
  {
    id: 4,
    icon: <SiOpenaigym />,
    title: "Program four",
    info: "This is the day that lort has made. We will rejoice!",
    path: "/programs/444",
  },
];

export const values = [
  {
    id: 1,
    icon: <SiOpenaigym />,
    title: "value one",
    desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum",
  },
  {
    id: 2,
    icon: <SiOpenaigym />,
    title: "value two",
    desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum",
  },
  {
    id: 3,
    icon: <SiOpenaigym />,
    title: "value three",
    desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum",
  },
  {
    id: 4,
    icon: <SiOpenaigym />,
    title: "value four",
    desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum",
  },
];

export const Faqs = [
  {
    id: 1,
    question: "How ofthen should I excercise?",
    answer:
      "How often you should exercise depends on your goals, such as whether you want to lose weight, gain muscle, or lead a generally healthy lifestyle.",
  },
  {
    id: 2,
    question: "What time of day is best to work out?",
    answer:
      "Morning workouts are ideal for burning fat and losing weight, but afternoon workouts may give your performance a boost, since you’ll have eaten a meal or two by the time you get going. “Any time you eat, your blood sugar levels rise,” Hackney says. “Sugar in the form of blood glucose…is one of the things we need if we’re trying to work at a higher intensity.",
  },
  {
    id: 3,
    question: "how long should my workouts be?",
    answer:
      "How often you work out can also dictate the length of each training session, though it also goes hand-in-hand with my previous point regarding what kinds of workouts you do.For example, if you strength train 2 or 3 or even 4 days per week, you’re likely following a full-body routine. Each training session could take an hour or more since you have to do both upper and lower body movements. It not only takes longer to complete all of your lifts in general but you may have to spend more time warming up.",
  },
  {
    id: 4,
    question: "Do i need to warm up before  my workouts?",
    answer:
      "it can be tempting to skip a warm-up prior to exercising for a variety of reasons. Whether you're on a time crunch, aren’t a fan of stretching, or simply want to get your workout over with, it can be easy to gloss over your warm-up and jump right into whatever movement you love most. But is this the safest practice? To get to the bottom of whether or not warm-ups can actually prevent injury (and improve workout performance), we've tapped sports medicine doctor Elizabeth Gardner, MD and celebrity trainer Jillian Michaels..",
  },
  {
    id: 5,
    question: "Should I do strength training, cardio or both?",
    answer:
      "If your main goal is weight loss, you want to burn calories and build muscle mass. So, for optimal benefits, you should incorporate both cardio and strength training into your exercise routine. Once your doctor has cleared you for exercise, you can get started. ",
  },
  {
    id: 6,
    question: "Should I lift weights for strength training?",
    answer:
      "Weight training is an excellent way to build muscle mass and make your muscles stronger. It can also keep your metabolism chugging, strengthen your bones and joints, improve your muscle tone, help you burn more calories, and keep you healthier as you age.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Diana Ayia",
    quote:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci recusandae molestias ipsa quae voluptatibus soluta ipsum quam aliquid, nobis repellat assumenda, quas dicta explicabo! Nostrum laborum vitae aspernatur. Ducimus, ex.",
    job: "Student",
    avatar: require("./images/avatar2.jpg"),
  },
  {
    id: 2,
    name: "Daniel Vunyo",
    quote: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
    job: "Software Engineer ",
    avatar: require("./images/avatar1.jpg"),
  },
  {
    id: 3,
    name: "Edem Quist",
    quote:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci recusandae molestias ipsa quae voluptatibus soluta ipsum quam x.",
    job: "University Lecturer",
    avatar: require("./images/avatar3.jpg"),
  },
  {
    id: 4,
    name: "Grace Lavoe",
    quote:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci recusandae molestias ipsa quae voluptatibus soluta ",
    job: "Talking Parrot",
    avatar: require("./images/avatar4.jpg"),
  },
  {
    id: 5,
    name: "Nana Dankwa",
    quote:
      " Lorem ipsum dolor sit amet, aliquid, nobis repellat assumenda, quas dicta explicabo! Nostrum laborum vitae aspernatur. Ducimus, ex.",
    job: "Pharmacist",
    avatar: require("./images/avatar5.jpg"),
  },
];

export const plans = [
  {
    id: 1,
    name: "Silver Package",
    desc: "This package is perfect for beginners who need constant help",
    price: 29.99,
    features: [
      { feature: "First Feature", available: true },
      { feature: "Second Feature", available: true },
      { feature: "Third Feature", available: true },
      { feature: "Fourth Feature", available: false },
      { feature: "Fifth Feature", available: true },
      { feature: "Fifth Feature plus", available: false },
      { feature: "Sixth Feature", available: false },
      { feature: "Seventh Feature", available: false },
      { feature: "Seventh Feature plus", available: false },
      { feature: "Eight Feature", available: false },
      { feature: "Ninth Feature", available: false },
      { feature: "Tenth Feature", available: true },
      { feature: "Eleventh Feature", available: false },
    ],
  },
  {
    id: 2,
    name: "Gold Package",
    desc: "This package is perfect for beginners who need constant help",
    price: 49.99,
    features: [
      { feature: "First Feature", available: true },
      { feature: "Second Feature", available: true },
      { feature: "Third Feature", available: true },
      { feature: "Fourth Feature", available: true },
      { feature: "Fifth Feature", available: true },
      { feature: "Fifth Feature plus", available: false },
      { feature: "Sixth Feature", available: false },
      { feature: "Seventh Feature", available: false },
      { feature: "Seventh Feature plus", available: false },
      { feature: "Eight Feature", available: false },
      { feature: "Ninth Feature", available: false },
      { feature: "Tenth Feature", available: true },
      { feature: "Eleventh Feature", available: true },
    ],
  },
  {
    id: 3,
    name: "Platinum Package",
    desc: "This package is perfect for beginners who need constant help",
    price: 89.99,
    features: [
      { feature: "First Feature", available: true },
      { feature: "Second Feature", available: false },
      { feature: "Third Feature", available: true },
      { feature: "Fourth Feature", available: true },
      { feature: "Fifth Feature", available: true },
      { feature: "Fifth Feature plus", available: false },
      { feature: "Sixth Feature", available: true },
      { feature: "Seventh Feature", available: false },
      { feature: "Seventh Feature plus", available: false },
      { feature: "Eight Feature", available: false },
      { feature: "Ninth Feature", available: true },
      { feature: "Tenth Feature", available: false },
      { feature: "Eleventh Feature", available: false },
    ],
  },
];

const Triainer1 = require("./images/gallery1.jpg");
const Triainer2 = require("./images/gallery2.jpg");
const Triainer3 = require("./images/gallery3.jpg");
const Triainer4 = require("./images/gallery4.jpg");
const Triainer5 = require("./images/gallery8.jpg");
const Triainer6 = require("./images/gallery7.jpg");

export const trainers = [
  {
    id: 1,
    image: Triainer1,
    name: "John Doe",
    job: "Aerobic Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 2,
    image: Triainer2,
    name: "Danile vinyo",
    job: "Speed Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 3,
    image: Triainer3,
    name: "Diana Ayi",
    job: "Circuit Trainer ",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 4,
    image: Triainer4,
    name: "Shatta Wale",
    job: "Body Composition Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 5,
    image: Triainer5,
    name: "Danile vinyo",
    job: "Circui Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 6,
    image: Triainer6,
    name: "Wayne Carter",
    job: "Physical Intelligence Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://linkedin.com/",
    ],
  },
];
