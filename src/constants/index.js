
import { 
  FaBaseballBall, 
  FaBasketballBall, 
  FaDumbbell, 
  FaFutbol, 
  FaSwimmer, 
  FaTableTennis,
  FaRunning,
  FaTrophy 
} from "react-icons/fa";

// constants/index.js
export const COLORS = {
  primary: {
    light: "#2563eb",
    dark: "#3b82f6"
  },
  secondary: {
    light: "#7c3aed",
    dark: "#8b5cf6"
  },
  accent: {
    light: "#d97706",
    dark: "#f59e0b"
  },
  background: {
    light: "#ffffff",
    dark: "#111827"
  },
  text: {
    light: "#111827",
    dark: "#f3f4f6"
  }
};

export const STATS = [
  { value: 12500, label: "Happy Customers" },
  { value: 350, label: "Professional Athletes" },
  { value: 42, label: "Sports Categories" },
  { value: 15, label: "Years Experience" }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "John Doe",
    review: "The quality of the products is outstanding. I highly recommend this store!",
    image: "https://i.ibb.co/WWRsmbrd/jhon.jpg",
    role: "Professional Footballer"
  },
  {
    id: 2,
    name: "Jane Smith",
    review: "Great customer service and fast shipping. Will definitely buy again.",
    image: "https://i.ibb.co/hFb7mPQB/jane.jpg",
    role: "Olympic Swimmer"
  },
  {
    id: 3,
    name: "Mike Johnson",
    review: "Best sports equipment I've ever used. Worth every penny!",
    image: "https://i.ibb.co/C3JRvg43/mike.jpg",
    role: "Fitness Trainer"
  }
];

export const FEATURED_ATHLETES = [
  {
    id: 1,
    name: "Lionel Messi",
    sport: "Football",
    achievement: "8x Ballon d'Or Winner",
    image: "https://i.ibb.co/cXKmFDYr/messi.jpg"
  },
  {
    id: 2,
    name: "Serena Williams",
    sport: "Tennis",
    achievement: "23 Grand Slam Titles",
    image: "https://i.ibb.co.com/BHjc3vdc/serena.jpg"
  },
  {
    id: 3,
    name: "Usain Bolt",
    sport: "Athletics",
    achievement: "8x Olympic Gold Medalist",
    image: "https://i.ibb.co/9kMDwTV8/bolt.jpg"
  }
];

export const TRAINING_PROGRAMS = [
  {
    id: 1,
    title: "Beginner's Program",
    description: "Perfect for newcomers to build foundational skills and fitness",
    icon: FaRunning,
    color: "bg-blue-600",
    features: [
      "8-week structured plan",
      "Video tutorials",
      "Nutrition guide"
    ],
    buttonColor: "bg-blue-600 hover:bg-blue-700"
  },
  {
    id: 2,
    title: "Advanced Training",
    description: "For athletes looking to take their performance to the next level",
    icon: FaDumbbell,
    color: "bg-purple-600",
    features: [
      "12-week intensive program",
      "Personalized coaching",
      "Performance analytics"
    ],
    buttonColor: "bg-purple-600 hover:bg-purple-700"
  },
  {
    id: 3,
    title: "Elite Performance",
    description: "For professional athletes seeking peak performance",
    icon: FaTrophy,
    color: "bg-green-600",
    features: [
      "Customized 16-week program",
      "1-on-1 coaching sessions",
      "Advanced recovery techniques"
    ],
    buttonColor: "bg-green-600 hover:bg-green-700"
  }
];

export const CATEGORY_ICONS  = [
  { name: 'Soccer', icon: FaFutbol },
  { name: 'Basketball', icon: FaBasketballBall },
  { name: 'Cricket', icon: FaBaseballBall },
  { name: 'Tennis', icon: FaTableTennis },
  { name: 'Swimming', icon: FaSwimmer },
  { name: 'Fitness', icon: FaDumbbell }
];
