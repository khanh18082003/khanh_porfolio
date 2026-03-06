import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "1",
    title: "Affiliate Management System Project",
    description:
      "Developed a commission management system tamnt.io.vn to track, calculate, and report Shopee Affiliate earnings across multiple payout periods for users.",
    image: "affiliate_management.png",
    techStack: [
      "Java",
      "Spring Boot",
      "MySQL",
      "Redis",
      "WebSocket",
      "FastExcel",
      "Docker",
      "SePay",
      "Ubuntu/Linux VPS",
    ],
    githubUrl: "https://github.com/khanh18082003/Commission-Account-User-BE",
    demoUrl: "https://tamnt.io.vn/profile",
  },
  {
    id: "2",
    title: "Vietnamese News Classification System",
    description:
      "Implemented a Vietnamese news classification system using LinearSVC, optimized with GridSearchCV and Cuckoo Search Algorithm, achieving 87% accuracy on a dataset of 37,000+ news articles across 13 categories.",
    image: "",
    techStack: [
      "FastAPI",
      "Scikit-learn",
      "PyTorch",
      "PhoBERT",
      "SVM",
      "GridSearchCV",
      "Cuckoo Search Algorithm",
      "NestJS",
      "React Native",
      "MySQL",
      "AWS S3 Storage",
    ],
    githubUrl:
      "https://github.com/khanh18082003/Document_Classification_With_Cuckoo_Search.git",
    demoUrl: "#work",
  },
  {
    id: "3",
    title: "Interactive Educational Platform",
    description:
      "Developed an interactive online learning platform using Spring Boot and ReactJS. The system allows teachers to manage classrooms, create quizzes, and monitor student performance while enabling students to participate in tests and track their learning progress. Designed with a focus on real-time interaction and an improved learning experience.",
    image: "quiz_edu.png",
    techStack: [
      "Spring Boot",
      "Spring Cloud",
      "MongoDB",
      "Redis",
      "WebSocket",
      "Kafka",
      "Docker",
      "AWS S3 Storage",
    ],
    githubUrl: "https://github.com/khanh18082003/Commission-Account-User-BE",
    demoUrl: "https://tamnt.io.vn/profile",
  },
];
