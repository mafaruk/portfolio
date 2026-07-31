export const profile = {
  name: "Mafaruk Bagwan",
  role: "Full Stack Developer",
  currentTitle: "Consultant — Full Stack Developer",
  company: "Deloitte USI",
  location: "Pune, India",
  tagline:
    "Building cloud-native, enterprise-scale systems with Java, Spring Boot, Python, React and AWS.",
  summary:
    "Results-driven Software Consultant and Full Stack Developer with 6 years of experience designing, modernizing, and deploying enterprise applications across cloud and on-premise environments. Expertise in Java, Spring Boot, Python, React, AWS Cloud, Microservices Architecture, REST APIs, and CI/CD pipelines. Experienced in migrating legacy applications to scalable cloud-native microservices, designing distributed systems, developing frontend applications using AWS Cloudscape, and managing deployment, monitoring, and production support.",
  email: "bagwannihal4@gmail.com",
  phone: "+91 9767557303",
  linkedin: "https://www.linkedin.com/in/mafarukbagwan4/",
  github: "https://github.com/mafaruk",
  instagram: "https://www.instagram.com/dev_vanguard_",
  instagramPersonal: "https://www.instagram.com/mafaruk_bagwan_/",
  twitter: "https://x.com/Mafaruk_Bagwan",
  blogger: "https://developervanguard.blogspot.com/",
};

export const deloitte = {
  title: "Consultant — Full Stack Developer",
  company: "Deloitte USI",
  location: "Pune",
  period: "September 2025 – Present",
  highlights: [
    "Designed and developed cloud-native microservices to modernize legacy enterprise applications on AWS.",
    "Led decomposition of monolithic applications into independently deployable microservices for data transfer, web tools and backend business services.",
    "Developed 20+ REST APIs using Java Spring Boot and Python for enterprise integrations and secure data exchange.",
    "Built responsive frontend applications with the AWS Cloudscape Design System for internal web tools.",
    "Managed end-to-end deployments across AWS environments, including build automation and production releases.",
    "Configured monitoring, logging and operational dashboards with AWS services to improve observability and incident response.",
    "Partnered with architects, product owners, QA and onshore/offshore stakeholders in Agile delivery.",
  ],
};

export const skillGroups = [
  {
    label: "Programming",
    items: ["Java", "Python", "JavaScript", "SQL"],
  },
  {
    label: "Frameworks",
    items: [
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "Hibernate",
      "ReactJS",
      "AWS Cloudscape",
      "JUnit",
      "Mockito",
    ],
  },
  {
    label: "Cloud",
    items: ["AWS", "EC2", "S3", "IAM", "CloudWatch", "ECS", "ECR"],
  },
  {
    label: "Architecture",
    items: [
      "Microservices",
      "REST APIs",
      "Distributed Systems",
      "Legacy Modernization",
    ],
  },
  {
    label: "DevOps",
    items: [
      "Docker",
      "Jenkins",
      "Git",
      "GitHub Actions",
      "GitLab",
      "Gerrit",
      "SonarQube",
    ],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
];

export const competencies = [
  "Microservices Architecture",
  "Legacy Modernization",
  "Cloud Migration",
  "AWS",
  "Full Stack Development",
  "Solution Design",
  "CI/CD",
  "Agile",
  "Production Support",
  "Performance Optimization",
];

export const experience = [
  {
    company: "Deloitte USI",
    title: "Consultant — Full Stack Developer",
    location: "Pune",
    period: "Sep 2025 – Present",
    current: true,
    bullets: deloitte.highlights,
  },
  {
    company: "KPIT Technologies Ltd.",
    title: "Java Full Stack Developer",
    location: "Pune",
    period: "Mar 2022 – Sep 2025",
    current: false,
    bullets: [
      "Designed and developed enterprise-grade backend systems using Core Java, multithreading, collections and design patterns.",
      "Built 10+ microservices with Spring Boot, JPA and Hibernate ORM, implementing REST APIs, exception handling and validation.",
      "Optimized backend performance through multithreading and concurrent programming.",
      "Reviewed 100+ pull requests, improving code quality and reducing production defects.",
      "Resolved production incidents through root cause analysis with long-term preventive fixes.",
      "Maintained CI/CD pipelines with GitLab and GitHub; monitored code quality with SonarQube.",
    ],
  },
  {
    company: "Wolters Kluwer Pvt. Ltd.",
    title: "Java Full Stack Developer",
    location: "Pune",
    period: "Apr 2021 – Mar 2022",
    current: false,
    bullets: [
      "Developed and maintained data-driven backend modules using Spring Boot, JPA and SQL native queries.",
      "Enhanced reporting applications with efficient, secure data access patterns.",
      "Led static code analysis and database security improvements with SonarQube.",
      "Integrated backend services with frontend modules via REST APIs, improving responsiveness.",
      "Automated CI/CD processes using Jenkins and TeamCity.",
    ],
  },
  {
    company: "AXA Business Services",
    title: "Associate",
    location: "Pune",
    period: "Sep 2019 – Jan 2021",
    current: false,
    bullets: [
      "Developed data integration scripts in Python and automated ingestion and transformation pipelines.",
      "Created and optimized complex SQL queries and stored procedures for business-critical reporting.",
      "Built lightweight utility scripts for reporting and internal dashboards.",
      "Supported tools used for financial data aggregation and analysis.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Engineering, Computer Science and Engineering",
  school: "Shivaji University",
  period: "2015 – 2019",
  location: "Maharashtra, India",
};

export const professionalSkills = [
  "Leadership & Teamwork",
  "Problem Solving & Decision Making",
  "Time Management & Adaptability",
  "Effective Communication & Presentation",
  "Agile & Risk Management",
];

export const navSections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];