# Developer Portfolio

## 🎯 Overview

This is a modern, production-ready personal developer portfolio built with React Router v7, featuring a complete authentication system, real-time database, and AI chat capabilities. The application showcases Bradley Rappa's transition from timber cutter to full-stack developer, demonstrating modern web development practices and a comprehensive tech stack.

## ✨ Features

- 🚀 **React Router v7** - Modern full-stack React framework with SSR
- ⚡️ **Hot Module Replacement (HMR)** - Fast development experience
- 📦 **Asset bundling and optimization** - Production-ready builds
- 🔄 **Data loading and mutations** - Built-in loader/action patterns
- 🔒 **TypeScript by default** - Type safety throughout
- 🎨 **TailwindCSS v4** - Modern utility-first CSS
- 🔐 **Authentication with Clerk** - Complete user management
- 🗄️ **Real-time database with Convex** - Serverless backend
- 🤖 **AI Chat Integration** - OpenAI-powered chat functionality
- 📊 **Interactive Dashboard** - Project showcase and analytics
- 📱 **Responsive Design** - Mobile-first approach
- 🚢 **Vercel Deployment Ready** - One-click deployment

## 🔄 Application Flow

### 1. Landing Page (`/`)
**Entry Point**: Portfolio homepage with personal branding

**Key Features**:
- Personal introduction with profile image
- Dynamic CTA button that changes based on authentication state:
  - **Not signed in**: "Get Started" → redirects to `/sign-up`
  - **Signed in**: "View Dashboard" → redirects to `/dashboard`
- Portfolio showcase with experience, skills, and achievements
- GitHub and LinkedIn links
- Dark/light theme toggle
- Responsive design with smooth scrolling navigation

**Components**:
- `Integrations` - Hero section with personal branding
- `ContentSection` - Detailed resume content with achievements, skills, and experience
- `Footer` - Copyright and branding

### 2. Authentication Flow

#### Sign Up (`/sign-up`)
- Powered by Clerk's pre-built `<SignUp />` component
- Supports OAuth providers and email/password authentication
- Automatic user creation in Convex database via `upsertUser` mutation
- Redirects to home page after successful registration

#### Sign In (`/sign-in`)
- Powered by Clerk's pre-built `<SignIn />` component
- Handles returning user authentication
- Automatic user data synchronization with Convex
- Redirects to home page after successful login

**Server-Side Logic**:
```typescript
// Authentication check and user data loading
export async function loader(args: Route.LoaderArgs) {
  const { userId } = await getAuth(args)
  return {
    isSignedIn: !!userId,
  }
}
```

### 3. Dashboard (`/dashboard/*`)
**Protected Area**: Requires authentication - redirects to `/sign-in` if not authenticated

#### Dashboard Layout (`/dashboard/layout.tsx`)
- **Authentication Guard**: Checks user authentication status
- **User Data Loading**: Fetches user profile from Clerk
- **Sidebar Navigation**: Persistent sidebar with navigation links
- **Header**: Site header with user profile integration

**Layout Structure**:
```typescript
<SidebarProvider>
  <AppSidebar user={user} />
  <SidebarInset>
    <SiteHeader />
    <Outlet /> {/* Child routes render here */}
  </SidebarInset>
</SidebarProvider>
```

#### Dashboard Home (`/dashboard`)
- **Interactive Charts**: Data visualization with `ChartAreaInteractive`
- **Section Cards**: Analytics and project showcase cards
- **Responsive Grid Layout**: Adapts to different screen sizes

#### AI Chat (`/dashboard/chat`)
- **Real-time Chat Interface**: OpenAI-powered conversations
- **Message Streaming**: Real-time response streaming using AI SDK
- **Chat History**: Persistent conversation history
- **Markdown Support**: Rich text rendering for AI responses
- **Responsive Design**: Mobile-optimized chat interface

**Chat Implementation**:
```typescript
const { messages, input, handleInputChange, handleSubmit } = useChat({
  maxSteps: 10,
  api: `${CONVEX_SITE_URL}/api/chat`,
})
```

#### Settings (`/dashboard/settings`)
- **User Preferences**: Account settings management (placeholder)
- **Profile Configuration**: User profile customization (future feature)

### 4. Backend Architecture (Convex)

#### Database Schema (`convex/schema.ts`)
```typescript
users: {
  tokenIdentifier: string,  // Clerk user ID
  name?: string,           // User's display name
  email?: string,          // User's email
  image?: string,          // Profile image URL
}
```

#### User Management (`convex/users.ts`)
- **findUserByToken**: Query user by Clerk token identifier
- **upsertUser**: Create or update user data automatically
- **Automatic Sync**: Keeps Convex user data in sync with Clerk

#### HTTP Endpoints (`convex/http.ts`)
- **POST /api/chat**: AI chat endpoint using OpenAI GPT-4
- **CORS Configuration**: Proper headers for frontend communication
- **Streaming Support**: Real-time response streaming

**Chat Endpoint**:
```typescript
const result = streamText({
  model: openai('gpt-4o'),
  messages,
  onFinish({ text }) {
    console.log(text) // Log completed responses
  },
})
```

## 🏗️ Tech Stack

### Frontend
- **React Router v7** - Full-stack React framework with SSR
- **TailwindCSS v4** - Utility-first CSS framework
- **shadcn/ui** - Modern component library with Radix UI
- **Lucide React & Tabler Icons** - Beautiful icon libraries
- **Recharts** - Data visualization
- **Motion** - Smooth animations
- **React Markdown** - Markdown rendering for chat

### Backend & Services
- **Convex** - Real-time database and serverless functions
- **Clerk** - Authentication and user management
- **OpenAI** - AI chat capabilities (GPT-4)
- **AI SDK** - Stream handling and chat utilities

### Development & Deployment
- **Vite** - Fast build tool
- **TypeScript** - Type safety throughout
- **Vercel** - Deployment platform
- **ESLint & Prettier** - Code quality and formatting

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Clerk account for authentication
- Convex account for database
- OpenAI API key (for AI chat features)

### Installation

1. Clone the repository and install dependencies:
```bash
npm install
```

2. Copy the environment file and configure your credentials:
```bash
cp .env.example .env.local
```

3. Set up your environment variables in `.env.local`:
```bash
# Convex Configuration
CONVEX_DEPLOYMENT=your_convex_deployment_here
VITE_CONVEX_URL=your_convex_url_here

# Clerk Authentication
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
CLERK_SECRET_KEY=your_clerk_secret_key_here

# OpenAI Configuration (for AI chat)
OPENAI_API_KEY=your_openai_api_key_here

# Frontend URL for redirects
FRONTEND_URL=http://localhost:5173
```

4. Initialize Convex:
```bash
npx convex dev
```

### Development

Start the development server with HMR:
```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## 🔧 Building for Production

Create a production build:
```bash
npm run build
```

## 🚢 Deployment

### Vercel Deployment (Recommended)

This portfolio is optimized for Vercel deployment with the `@vercel/react-router` preset:

1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

The `react-router.config.ts` includes the Vercel preset for seamless deployment.

### Docker Deployment

To build and run using Docker:
```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker:
- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## 🎨 Customization

### Personal Information

Update the following files to customize your portfolio:

- `app/routes/home.tsx` - Update meta information and content
- `app/components/homepage/` - Customize homepage sections
- `app/components/dashboard/` - Modify dashboard components
- `public/` - Add your own images and assets

### Styling

The application uses TailwindCSS v4 with a modern design system. You can customize:

- Colors and themes in `app/app.css`
- Component styles in `app/components/ui/`
- Layout and spacing throughout the application

## 📝 Key Features Breakdown

### Authentication & Security
- **JWT-based authentication** via Clerk
- **Secure token validation** in Convex
- **Protected routes** with automatic redirects
- **Session management** with automatic renewal

### Real-time Features
- **AI Chat streaming** with OpenAI integration
- **User data synchronization** between Clerk and Convex
- **Real-time database updates** via Convex

### Performance Optimizations
- **Server-side rendering (SSR)** for better SEO
- **DNS prefetching** for external services
- **Asset preloading** for critical resources
- **Code splitting** and lazy loading

### Developer Experience
- **TypeScript** for type safety
- **Hot Module Replacement** for fast development
- **ESLint & Prettier** for code quality
- **Automated CI/CD** scripts

## 🤝 Contributing

This is a personal portfolio project. Feel free to fork and customize for your own use!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using React Router v7, Convex, Clerk, and OpenAI.

> A modern portfolio demonstrating the transition from blue-collar work to full-stack development.
