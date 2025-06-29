# Portfolio Website with Contact Form

## Overview

This is a full-stack TypeScript web application featuring a personal portfolio website with a contact form. The application showcases a clean, GitHub-inspired dark theme design and consists of a React frontend with an Express.js backend. The project uses modern web development practices with TypeScript throughout the stack.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI components with shadcn/ui styling system
- **Styling**: Tailwind CSS with custom GitHub-inspired dark theme
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **API Pattern**: RESTful API design
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Session Management**: PostgreSQL-backed sessions using connect-pg-simple
- **Development**: Hot reload with tsx for TypeScript execution

### Data Storage
- **Database**: PostgreSQL (configured via Neon serverless)
- **ORM**: Drizzle ORM with type-safe database interactions
- **Schema**: Shared TypeScript schema definitions between client and server
- **Migrations**: Database migrations managed through Drizzle Kit

## Key Components

### Frontend Components
1. **Navigation**: Fixed navigation bar with Portfolio and Contact links
2. **Portfolio Page**: Hero section showcasing skills, experience, and projects
3. **Contact Page**: Form with validation for user inquiries
4. **UI Components**: Comprehensive set of reusable components from shadcn/ui

### Backend Components
1. **Contact Form API**: POST /api/contact for form submissions
2. **Contact Management**: GET /api/contact for retrieving submissions
3. **In-Memory Storage**: Temporary storage implementation (MemStorage class)
4. **Request Logging**: Detailed API request/response logging middleware

### Shared Components
1. **Schema Definitions**: Zod schemas for data validation
2. **Type Definitions**: TypeScript interfaces shared between frontend and backend

## Data Flow

1. **User Interaction**: User fills out contact form on frontend
2. **Client Validation**: React Hook Form validates input using Zod schema
3. **API Request**: Form data sent to backend via TanStack Query mutation
4. **Server Validation**: Backend validates data using shared Zod schema
5. **Data Storage**: Currently stored in memory (ready for database integration)
6. **Response**: Success/error feedback displayed to user via toast notifications

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **@radix-ui/***: Accessible UI primitives
- **@tanstack/react-query**: Server state management
- **drizzle-orm**: Type-safe database operations
- **react-hook-form**: Form state management
- **tailwindcss**: Utility-first CSS framework
- **wouter**: Lightweight routing
- **zod**: Schema validation

### Development Dependencies
- **vite**: Build tool and dev server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler
- **@replit/vite-plugin-***: Replit-specific development tools

## Deployment Strategy

### Development
- **Frontend**: Vite dev server with hot module replacement
- **Backend**: tsx with automatic restart on file changes
- **Database**: PostgreSQL connection via environment variable
- **Port Configuration**: Backend serves both API and static files in production

### Production Build
1. **Frontend Build**: `vite build` generates optimized static assets
2. **Backend Build**: `esbuild` bundles server code with external dependencies
3. **Static Serving**: Express serves built frontend from `/dist/public`
4. **Database**: PostgreSQL via DATABASE_URL environment variable

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment mode (development/production)
- **REPL_ID**: Replit environment detection

## Changelog
- June 29, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.