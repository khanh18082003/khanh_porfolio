import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "1",
    title: "Affiliate Management System Project",
    description:
      "Developed a commission management system tamnt.io.vn to track, calculate, and report Shopee Affiliate earnings across multiple payout periods for users.",
    overview:
      "Affiliate Tracking & Commission Management Platform is a backend-driven system designed to help affiliate operators manage partner accounts, track commission earnings, and calculate revenue sharing across multiple payout periods. The platform allows the system owner to manage users and their affiliate accounts, track commission earnings from Shopee payouts, and automatically calculate the revenue split between the owner and partners based on predefined commission percentages. By importing payout data from Excel files provided by Shopee, the system automatically processes commission records, stores payout data for each account, and generates payment summaries so users can clearly see the amount they need to settle with the platform owner.",
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
      {
        problem:
          "QR-based bank payments are processed outside the system, which means the platform cannot directly control or confirm when a transaction is completed. The system must rely on webhook notifications from the payment provider to detect successful payments.",
        solution:
          "A webhook endpoint was implemented to receive payment notifications from the payment provider. The backend verifies the payment by validating critical information such as the transaction reference, payment amount, and payment status before updating the payment record. To prevent incorrect updates, the system ensures that only payments matching the expected amount and reference ID are marked as successful.",
      },
      {
        problem:
          "Webhook notifications may be delivered multiple times by the payment provider to guarantee delivery. Without proper handling, duplicate webhook calls could result in repeated payment updates or inconsistent payment states.",
        solution:
          "Idempotency was implemented in the webhook handler to ensure that duplicate notifications do not cause multiple updates. Each payment record includes a unique transaction reference, and the system checks if a payment with the same reference has already been processed before applying any updates. This ensures that even if the webhook is called multiple times, the payment status will only be updated once, maintaining data integrity.",
      },
      {
        problem:
          "After a user completes a QR payment, the platform needs to immediately notify the frontend so the payment page can update without requiring manual refresh.",
        solution:
          "A WebSocket-based event system was implemented to deliver real-time updates to the client. When the backend confirms a successful payment, it publishes a payment event through WebSocket, allowing the frontend to update the payment status instantly.",
      },
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
      {
        problem:
          "The dataset was highly imbalanced across the 13 news categories, which led to poor performance on minority classes when using standard training techniques.",
        solution:
          "Implemented class weighting in the SVM loss function and used data augmentation techniques to synthetically increase the representation of minority classes. Additionally, the Cuckoo Search Algorithm was employed to find optimal hyperparameters that improved generalization across all classes.",
      },
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
      {
        problem:
          "Synchronizing real-time quiz state across multiple service instances — solved with Kafka topics as the single source of truth for quiz events.",
        solution:
          "Implemented a distributed event-driven architecture using Kafka to ensure all service instances have access to the latest quiz state.",
      },
      {
        problem:
          "Ensuring consistent leaderboard rankings under concurrent submissions — addressed with Redis sorted sets and atomic increment operations.",
        solution:
          "Utilized Redis sorted sets to maintain accurate leaderboard positions and implemented atomic increment operations to handle concurrent updates.",
      },
      {
        problem:
          "Managing inter-service communication latency — mitigated with async messaging via Kafka for non-critical paths and synchronous REST only for critical reads.",
        solution:
          "Designed the system with a hybrid approach, using async messaging for non-critical operations and synchronous REST calls for critical data retrieval.",
      },
    ],
  },
];
