import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "1",
    title: "Affiliate Management System Project",
    description:
      "Developed a commission management system tamnt.io.vn to track, calculate, and report Shopee Affiliate earnings across multiple payout periods for users.",
    overview:
      "A production-grade commission management platform that automates the tracking, calculation, and reporting of Shopee Affiliate earnings. The system handles multiple payout periods, real-time notifications, and Excel-based reporting for finance teams.",
    image: "/affiliate_management.png",
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
    demoLabel: "Live Site",
    highlights: [
      { label: "Payout Periods", value: "Multi-period" },
      { label: "Deployment", value: "VPS / Docker" },
      { label: "Real-time", value: "WebSocket" },
      { label: "Payment", value: "SePay integrated" },
    ],
    features: [
      "Automated commission calculation across multiple Shopee Affiliate payout periods",
      "Real-time earnings notifications via WebSocket",
      "Excel report generation with FastExcel for finance export",
      "SePay payment gateway integration for payout processing",
      "Redis caching layer for high-frequency commission queries",
      "Dockerized deployment on Ubuntu/Linux VPS for consistent environments",
    ],
    challenges: [
      "Handling concurrent payout period updates without data inconsistency — solved with optimistic locking and Redis distributed locks.",
      "Generating large Excel reports without blocking the main thread — resolved by offloading generation to an async task executor.",
      "Keeping WebSocket connections stable under load — addressed with a heartbeat mechanism and connection pool tuning.",
    ],
  },
  {
    id: "2",
    title: "Vietnamese News Classification System",
    description:
      "Implemented a Vietnamese news classification system using LinearSVC, optimized with GridSearchCV and Cuckoo Search Algorithm, achieving 87% accuracy on a dataset of 37,000+ news articles across 13 categories.",
    overview:
      "A machine-learning pipeline for classifying Vietnamese news articles at scale. The system combines classical NLP techniques with deep learning (PhoBERT) and a metaheuristic hyperparameter optimizer (Cuckoo Search) to achieve state-of-the-art accuracy on a large real-world dataset.",
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
    highlights: [
      { label: "Accuracy", value: "87%" },
      { label: "Dataset", value: "37,000+ articles" },
      { label: "Categories", value: "13 classes" },
      { label: "Model", value: "LinearSVC + PhoBERT" },
    ],
    features: [
      "LinearSVC model with TF-IDF vectorization for baseline Vietnamese text classification",
      "PhoBERT fine-tuning with PyTorch for deep contextual embeddings",
      "Cuckoo Search Algorithm for automated hyperparameter optimization beyond GridSearchCV",
      "FastAPI inference server exposing a REST classification endpoint",
      "React Native mobile app for on-device article classification",
      "AWS S3 for model artifact storage and versioning",
    ],
    challenges: [
      "Vietnamese text lacks word boundaries — handled with a dedicated tokenizer (RDRSegmenter) before feature extraction.",
      "Cuckoo Search convergence on a high-dimensional hyperparameter space — mitigated by bounding the search space with domain knowledge.",
      "PhoBERT fine-tuning on limited GPU resources — resolved with gradient accumulation and mixed-precision training.",
    ],
  },
  {
    id: "3",
    title: "Interactive Educational Platform",
    description:
      "Developed an interactive online learning platform using Spring Boot and ReactJS. The system allows teachers to manage classrooms, create quizzes, and monitor student performance while enabling students to participate in tests and track their learning progress. Designed with a focus on real-time interaction and an improved learning experience.",
    overview:
      "A full-featured e-learning platform built with a microservices architecture. Teachers can manage classrooms and design interactive quizzes while students engage in real-time quiz sessions and track progress over time. The platform is designed for high concurrency and low latency.",
    image: "/quiz_edu.png",
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
    githubUrl: "https://github.com/khanh18082003/QuizEdu-Back-end",
    demoUrl: "#work",
    highlights: [
      { label: "Architecture", value: "Microservices" },
      { label: "Real-time", value: "WebSocket + Kafka" },
      { label: "Database", value: "MongoDB + Redis" },
      { label: "Orchestration", value: "Spring Cloud" },
    ],
    features: [
      "Microservices architecture orchestrated with Spring Cloud (API Gateway, Service Discovery)",
      "Real-time quiz sessions using WebSocket with Kafka for event streaming between services",
      "Teacher dashboard for classroom management, quiz creation, and student performance analytics",
      "Student progress tracking with historical quiz results and leaderboards",
      "Redis caching for session state and leaderboard aggregations",
      "MongoDB for flexible quiz and result document storage",
      "Dockerized services for consistent local and production deployments",
    ],
    challenges: [
      "Synchronizing real-time quiz state across multiple service instances — solved with Kafka topics as the single source of truth for quiz events.",
      "Ensuring consistent leaderboard rankings under concurrent submissions — addressed with Redis sorted sets and atomic increment operations.",
      "Managing inter-service communication latency — mitigated with async messaging via Kafka for non-critical paths and synchronous REST only for critical reads.",
    ],
  },
];
