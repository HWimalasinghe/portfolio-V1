export type PortfolioProject = {
  number: string;
  name: string;
  subtitle: string;
  stack: string[];
  summary: string;
  features: string[];
};

export const projects: PortfolioProject[] = [
  {
    number: "01",
    name: "CeylonGuide",
    subtitle: "Local Tour Guide Booking System",
    stack: ["React.js", "Spring Boot", "MySQL", "REST APIs"],
    summary: "A full-stack tourism platform designed to connect tourists with local tour guides through a streamlined booking experience.",
    features: [
      "Developed tourist and tour guide registration, authentication, and profile management functionality.",
      "Implemented a booking workflow with payment-slip uploads and guide approval.",
      "Integrated frontend components with backend REST APIs.",
      "Designed database structures to manage users, guides, and booking information.",
    ],
  },
  {
    number: "02",
    name: "Online Movie Ticket Reservation System",
    subtitle: "Web-based Movie Booking Application",
    stack: ["Java", "JSP", "Servlets", "MySQL"],
    summary: "A web-based application that allows users to explore available movies, view showtimes, and manage movie ticket reservations.",
    features: [
      "Developed server-side functionality using Java Servlets and JSP.",
      "Integrated MySQL for managing movies, customers, showtimes, and ticket reservations.",
      "Implemented database operations to support the movie reservation workflow.",
      "Applied Java web development concepts to build a functional application.",
    ],
  },
  {
    number: "03",
    name: "RideLink",
    subtitle: "Ride-Sharing Platform – Backend Microservices",
    stack: ["Java", "Spring Boot", "Spring Security", "REST APIs", "Postman", "MongoDB"],
    summary: "A backend-focused ride-sharing platform designed using a microservices architecture to manage passenger accounts, driver information, ride bookings, and fare payments.",
    features: [
      "Developed backend microservices for account management, driver and vehicle management, ride management, and fare and payment processing.",
      "Implemented REST APIs to support communication between independent services.",
      "Worked on user registration, authentication, role-based access control, and account management.",
      "Applied microservices architecture and service-specific data management.",
      "Used Git and GitHub for collaborative development and version control.",
      "Documented and tested APIs using Swagger/OpenAPI and Postman.",
    ],
  },
];
