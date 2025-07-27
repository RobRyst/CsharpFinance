# Invoice Management System

A full-featured web application built using **ASP.NET Core MVC**, designed to manage invoices with clean UI, robust backend logic, and modern frontend styling using **TailwindCSS**. The system includes user authentication, PDF export functionality, and optional Dockerized deployment for a seamless development and production experience.

---

## 📌 Project Overview

This project is a practical implementation of an invoice management platform featuring:
- Clean and maintainable architecture with services and repositories
- Responsive and modern UI using TailwindCSS
- Full CRUD operations for invoices
- PDF generation and export
- Optional integration with DataTables for enhanced table functionality
- Dockerized environment for local development and production deployment

---

## 🚀 Tech Stack

### **Backend**
- **ASP.NET Core 8.0** – Web framework (MVC pattern)
- **Entity Framework Core** – ORM for database access
- **SQL Server** or **MySQL** – Relational database support
- **Docker** – Containerized application environment

### **Frontend**
- **Razor Pages / MVC Views** – Server-side rendering
- **TailwindCSS** – Utility-first CSS framework
- **DataTables.js** or **AG-Grid** (optional) – For interactive invoice tables

### **PDF Export**
- **DinkToPdf** / **iText7** / **QuestPDF** – PDF generation libraries

---

## ✨ Features

- 🧾 **Invoice Management**
  - Create, read, update, delete (CRUD) invoices
  - View invoice list with pagination, filtering, and sorting
  - Export invoices as styled PDF files

- 🔐 **Authentication**
  - ASP.NET Core Identity for user registration and login
  - Route protection for invoice pages (authorized access only)

- 🧩 **Frontend Design**
  - Responsive layout with TailwindCSS
  - Side navigation menu and optional top bar

- ⚙️ **Clean Architecture**
  - Separation of concerns using services (e.g., `IInvoiceService`, `InvoiceService`)
  - Entity Framework with `DbContext` for models and migrations

- 🐳 **Docker Support**
  - Dockerfile for ASP.NET Core app
  - docker-compose for managing app + database container
  - `.dockerignore` and override files for development vs production environments

- 📊 **DataTables / AG-Grid Integration** *(optional)*
  - Enhanced tables for invoices with real-time search/filter/sort

---
## 🧠 What I Learned
Working on the Invoice Management System has significantly deepened my understanding of full-stack web development, especially within the ASP.NET Core ecosystem. Here are some key takeaways from the project:

### ASP.NET Core MVC Architecture
- I gained hands-on experience structuring a scalable web application using the Model-View-Controller (MVC) pattern. I now better understand the separation of concerns and how to manage routing, controllers, views, and services cleanly.

### Entity Framework Core & Database Integration
Building and managing the database layer using EF Core helped me learn about data modeling, migrations, and LINQ queries. I also became more confident with relational database design and interaction.

### Authentication & Authorization
Implementing user login and registration with ASP.NET Core Identity gave me practical knowledge of securing applications, managing roles, and protecting routes with authorization policies.

### Frontend Development with TailwindCSS
I improved my UI/UX skills by using TailwindCSS to build responsive and consistent interfaces without relying on heavy UI libraries.

### PDF Generation in .NET
Integrating PDF generation tools (e.g., DinkToPdf, QuestPDF) taught me how to dynamically create exportable documents — a skill often needed in enterprise software.

### Docker & DevOps Practices
Containerizing the application using Docker and managing services with docker-compose introduced me to real-world DevOps workflows, including environment configuration and portable deployments.

### Clean Code and Architecture Principles
Applying interfaces, dependency injection, and service/repository patterns helped me write more maintainable and testable code.

