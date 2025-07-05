# Developer Portfolio

A modern, production-ready personal developer portfolio built with React Router v7, Convex, and Clerk. Ready for Vercel deployment with built-in AI chat capabilities.

## Features

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

## Tech Stack

### Frontend

- **React Router v7** - Full-stack React framework
- **TailwindCSS v4** - Utility-first CSS framework
- **shadcn/ui** - Modern component library with Radix UI
- **Lucide React & Tabler Icons** - Beautiful icon libraries
- **Recharts** - Data visualization
- **Motion** - Smooth animations

### Backend & Services

- **Convex** - Real-time database and serverless functions
- **Clerk** - Authentication and user management
- **OpenAI** - AI chat capabilities

### Development & Deployment

- **Vite** - Fast build tool
- **TypeScript** - Type safety
- **Vercel** - Deployment platform

## Getting Started

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

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

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

## Architecture

### Key Routes

- `/` - Homepage with project showcase
- `/dashboard` - Protected user dashboard
- `/dashboard/chat` - AI-powered chat interface
- `/dashboard/settings` - User settings

### Key Components

#### Authentication & Authorization

- Protected routes with Clerk authentication
- Server-side user data loading with loaders
- Automatic user synchronization

#### Dashboard Features

- Interactive sidebar navigation
- Real-time data updates
- User profile management
- AI chat functionality
- Project showcase

#### AI Chat Integration

- OpenAI-powered conversations
- Real-time message streaming
- Chat history persistence
- Responsive chat interface

## Customization

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

## Contributing

This is a personal portfolio project. Feel free to fork and customize for your own use!

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using React Router v7, Convex, Clerk, and OpenAI.
