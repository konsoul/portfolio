# React Starter Kit - Application Flow Documentation

## Overview

This is a React-based SaaS starter kit built with React Router v7, designed to help developers quickly launch subscription-based applications. The application implements a complete user journey from landing page to paid dashboard access with integrated authentication, subscription management, and AI chat functionality.

## Technology Stack

### Frontend
- **React Router v7** - Full-stack React framework with SSR
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library

### Backend & Services
- **Convex** - Real-time backend-as-a-service
- **Clerk** - Authentication and user management
- **Polar** - Subscription and payment processing
- **OpenAI** - AI chat functionality
- **Vercel** - Deployment and hosting

## Application Architecture

### Route Structure
```
/                           → Home (landing page)
├── /sign-in               → Authentication
├── /sign-up               → User registration
├── /pricing               → Subscription plans
├── /subscription-required → Paywall redirect
├── /success              → Post-payment confirmation
└── /dashboard/           → Protected area
    ├── /                 → Dashboard home
    ├── /chat            → AI chat interface
    └── /settings        → User settings
```

### Data Models

#### Users
- `tokenIdentifier` - Clerk user identifier
- `name`, `email`, `image` - User profile data

#### Subscriptions
- `userId` - Links to user
- `polarId` - Polar subscription ID
- `status` - active/inactive/canceled/etc.
- `amount`, `currency`, `interval` - Billing details
- `currentPeriodStart/End` - Billing cycle dates
- `customerId` - For customer portal access

#### Webhook Events
- Tracks all Polar webhook events for audit trail

## User Flow Journey

### 1. Landing Page (`/`)
**Entry Point**: Homepage with technology showcase

**Key Features**:
- Displays integrated technologies (React, Convex, Polar, etc.)
- Dynamic CTA button based on user state:
  - Not signed in: "Get Started (Demo)" → `/sign-up`
  - Signed in, no subscription: "Subscribe Now (Demo)" → `/pricing`
  - Signed in, has subscription: "Go to Dashboard (Demo)" → `/dashboard`

**Server-Side Logic**:
```typescript
// Parallel data fetching for performance
const [subscriptionData, plans] = await Promise.all([
  userId ? fetchQuery(api.subscriptions.checkUserSubscriptionStatus, { userId }) : null,
  fetchAction(api.subscriptions.getAvailablePlans)
]);
```

### 2. Authentication Flow
**Sign Up** (`/sign-up`) and **Sign In** (`/sign-in`)

- Powered by Clerk's pre-built components
- Handles OAuth providers and email/password
- Automatic user creation in Convex database via `upsertUser` mutation
- Redirects to home page after successful authentication

### 3. Subscription Management

#### Pricing Page (`/pricing`)
**Purpose**: Display available subscription plans and handle purchases

**Key Features**:
- Fetches live pricing data from Polar
- Shows current subscription status
- Dynamic button states:
  - New users: "Get Started"
  - Existing subscribers: "Upgrade/Downgrade" or "Manage Plan"
- Error handling for failed operations

**Subscription Logic**:
```typescript
const handleSubscribe = async (priceId: string) => {
  if (!isSignedIn) {
    window.location.href = "/sign-in";
    return;
  }

  // Existing subscribers go to customer portal
  if (userSubscription?.status === "active") {
    const portalResult = await createPortalUrl({
      customerId: userSubscription.customerId,
    });
    window.open(portalResult.url, "_blank");
    return;
  }

  // New subscribers get checkout session
  const checkoutUrl = await createCheckoutSession({ priceId });
  window.location.href = checkoutUrl;
};
```

#### Webhook Processing
**Endpoint**: Convex HTTP action handles Polar webhooks

**Supported Events**:
- `subscription.created` - New subscription setup
- `subscription.updated` - Plan changes
- `subscription.active` - Payment successful
- `subscription.canceled` - User cancellation
- `subscription.revoked` - Admin cancellation

**Security**: Webhook signature verification using Polar's secret

### 4. Payment Success (`/success`)
**Purpose**: Confirmation page after successful payment

**Features**:
- Displays subscription details (amount, billing cycle, next payment)
- Dynamic next steps based on subscription status
- Ensures user record is synced via `upsertUser`

### 5. Access Control & Paywall

#### Subscription Required (`/subscription-required`)
**Purpose**: Paywall for users without active subscriptions

**Features**:
- Clear messaging about subscription requirement
- Direct link to pricing page
- Fallback for authentication edge cases

#### Dashboard Layout Protection
**Route**: `/dashboard/*` (all dashboard routes)

**Protection Logic**:
```typescript
export async function loader(args: Route.LoaderArgs) {
  const { userId } = await getAuth(args);

  // Redirect to sign-in if not authenticated
  if (!userId) {
    throw redirect("/sign-in");
  }

  // Check subscription status
  const subscriptionStatus = await fetchQuery(
    api.subscriptions.checkUserSubscriptionStatus, 
    { userId }
  );

  // Redirect to paywall if no active subscription
  if (!subscriptionStatus?.hasActiveSubscription) {
    throw redirect("/subscription-required");
  }

  return { user };
}
```

### 6. Dashboard Features

#### Dashboard Home (`/dashboard`)
**Components**:
- `SectionCards` - Key metrics and stats
- `ChartAreaInteractive` - Data visualizations
- Sidebar navigation with user profile

#### AI Chat (`/dashboard/chat`)
**Features**:
- Integration with OpenAI via AI SDK
- Real-time chat interface
- Markdown rendering for responses
- Convex HTTP endpoint handles AI requests

**Chat Implementation**:
```typescript
const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
  maxSteps: 10,
  api: `${CONVEX_SITE_URL}/api/chat`,
});
```

## Security & Performance Features

### Authentication
- JWT-based authentication via Clerk
- Secure token validation in Convex
- Automatic session management

### Data Protection
- Server-side route protection
- Webhook signature verification
- Environment variable security

### Performance Optimizations
- Server-side rendering (SSR)
- Parallel data fetching
- DNS prefetching for external services
- Preloaded critical assets
- Component memoization

### Error Handling
- Global error boundaries
- Graceful fallbacks for failed API calls
- User-friendly error messages
- Development vs production error details

## Environment Configuration

### Required Environment Variables
```bash
# Convex
VITE_CONVEX_URL=

# Clerk Authentication
VITE_CLERK_FRONTEND_API_URL=
CLERK_SECRET_KEY=

# Polar Payments
POLAR_ACCESS_TOKEN=
POLAR_ORGANIZATION_ID=
POLAR_WEBHOOK_SECRET=
POLAR_SERVER=sandbox # or production

# Application
FRONTEND_URL=
```

## Development vs Production

### Development Features
- Detailed error stack traces
- Development-only debugging
- Hot module replacement
- TypeScript checking

### Production Optimizations
- Minified bundles
- Error reporting without sensitive data
- Performance monitoring via Vercel Analytics
- CDN delivery for static assets

## Key Integration Points

### Clerk ↔ Convex
- User identity passes through Clerk's JWT
- Convex validates tokens and manages user records
- Automatic user synchronization

### Polar ↔ Convex
- Subscription events flow via webhooks
- Real-time subscription status updates
- Customer portal integration for self-service

### React Router ↔ Convex
- Server-side data fetching in route loaders
- Type-safe API integration
- Optimistic updates and error handling

## Deployment Architecture

### Vercel Deployment
- Server-side rendering for SEO and performance
- Edge functions for global distribution
- Automatic previews for pull requests

### Convex Backend
- Real-time database with ACID transactions
- Serverless functions for business logic
- Built-in authentication integration

This architecture provides a solid foundation for SaaS applications with modern development practices, comprehensive security, and scalable infrastructure.
