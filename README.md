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

## 🏗️ Getting Started

### Prerequisites
- .NET 8 SDK
- Docker & Docker Compose
- Node.js (for Tailwind build)
- Visual Studio 2022+ or VS Code
