# Yaremchuk & Sedun Law Firm Website

## Overview

This is a professional law firm website for "Yaremchuk & Sedun" (Адвокатське об'єднання Яремчук і Седун), a Ukrainian legal practice based in Kyiv and Brovary. The application provides a bilingual (Ukrainian/English) marketing website with an AI-powered legal consultation chatbot, blog system, service listings, team profiles, and contact form functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with shadcn/ui component library (New York style)
- **Animations**: Framer Motion for page transitions and reveal effects
- **Forms**: React Hook Form with Zod validation via @hookform/resolvers
- **Internationalization**: Custom I18n provider with localStorage persistence supporting Ukrainian (uk) and English (en)

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ESM modules
- **Build Tool**: Vite for frontend, esbuild for server bundling
- **API Design**: RESTful endpoints defined in shared/routes.ts with Zod schemas for type-safe validation

### Data Storage
- **Database**: PostgreSQL via Drizzle ORM
- **Schema Location**: shared/schema.ts defines all database tables
- **Migrations**: Drizzle Kit with migrations output to ./migrations folder
- **Tables**: inquiries (contact form), services, team, posts (blog), conversations, messages (chat)

### AI Chat Integration
- **Provider**: Anthropic Claude API (claude-sonnet-4-5 model)
- **Streaming**: Server-Sent Events (SSE) over POST for real-time responses
- **Client Consumption**: Uses fetch with body.getReader() since standard EventSource only supports GET
- **Bilingual Support**: System prompts configured for both Ukrainian and English responses
- **Batch Processing**: Utility module for rate-limited batch operations with retry logic

### Key Design Patterns
- **Monorepo Structure**: Client (client/), Server (server/), and Shared code (shared/)
- **Type Sharing**: Zod schemas and TypeScript types shared between frontend and backend via @shared alias
- **Component Architecture**: Reusable UI components in client/src/components/ui/ following shadcn/ui patterns
- **API Route Definition**: Centralized route definitions with input/output schemas in shared/routes.ts

### Development vs Production
- **Development**: Vite dev server with HMR, proxied through Express
- **Production**: Static file serving from dist/public, server bundled to dist/index.cjs

## External Dependencies

### AI Services
- **Anthropic Claude API**: Powers the legal consultation chatbot
  - Environment variables: `AI_INTEGRATIONS_ANTHROPIC_API_KEY`, `AI_INTEGRATIONS_ANTHROPIC_BASE_URL`
  - Used for streaming chat responses with legal context

### Database
- **PostgreSQL**: Primary data store
  - Environment variable: `DATABASE_URL`
  - Managed via Drizzle ORM with pg driver

### Third-Party Libraries
- **Radix UI**: Accessible component primitives for shadcn/ui
- **date-fns**: Date formatting for blog posts (with uk/en locale support)
- **Lucide React**: Icon library
- **Google Fonts**: Playfair Display (headings) and Inter (body text)

### Replit-Specific Integrations
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Development tooling (dev only)
- **@replit/vite-plugin-dev-banner**: Development banner (dev only)