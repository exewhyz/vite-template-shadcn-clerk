# Vite React Template

A modern React application built with Vite, featuring authentication via Clerk and a beautiful UI with Shadcn components.

## Features

- ⚡ **Vite** - Lightning-fast build tool and dev server
- 🔐 **Clerk Authentication** - Secure user authentication and management
- 🎨 **Shadcn UI** - High-quality, customizable React components
- 🌬️ **Tailwind CSS** - Utility-first CSS framework
- 🛣️ **React Router** - Client-side routing
- 📱 **Responsive Design** - Mobile-friendly interface
- 🎭 **Clerk Themes** - Customizable authentication UI with @clerk/themes
- 🌙 **Dark Mode Support** - Full dark mode implementation with theme switching

## Tech Stack

- **Frontend**: React 18+
- **Build Tool**: Vite
- **Authentication**: Clerk + @clerk/themes
- **Styling**: Tailwind CSS v4 + Vite plugin
- **UI Components**: Shadcn UI
- **Routing**: React Router
- **Code Quality**: ESLint + React Hooks
- **Theme Management**: Dark mode with CSS variables

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- Clerk account (free at [clerk.com](https://clerk.com))

## Local Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd AI
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Copy the example environment file:

```bash
cp .env.example .env
```

Get your Clerk API keys from [Clerk Dashboard](https://dashboard.clerk.com):

- Sign in to your Clerk account
- Navigate to API Keys
- Copy your **Publishable Key**

Update `.env`:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_publishable_key_here
```

### 4. Start Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Project Structure

```text
src/
├── components/          # Reusable React components
│   ├── Navbar.jsx      # Navigation bar
│   ├── ProtectedRoute.jsx  # Auth-protected route wrapper
│   ├── Spinner.jsx     # Loading spinner
│   └── ui/             # Shadcn UI components
├── pages/              # Page components
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Profile.jsx
│   └── NotFound.jsx
├── layouts/            # Layout components
│   ├── RootLayout.jsx  # Main layout with navbar
│   └── AuthLayout.jsx  # Auth pages layout
├── lib/                # Utility functions
│   └── utils.js        # Helper functions (cn, etc.)
├── App.jsx             # Router configuration
└── main.jsx            # Entry point
```

## Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## Routes

- `/` - Home page (protected)
- `/auth/login` - Login page
- `/auth/register` - Registration page
- `/auth/profile` - User profile (protected)
- `*` - 404 Not Found page

## Authentication Flow

1. **Unauthenticated users** are redirected to `/auth/login`
2. **Protected routes** use the `ProtectedRoute` component wrapper
3. **Clerk UI** components handle sign-in/sign-up/profile management
4. **UserButton** displays user info and logout option in navbar

## Styling & Theming

The project uses Tailwind CSS v4 with custom theme configuration. CSS variables are defined in [src/index.css](src/index.css) for consistent theming across light and dark modes.

### Dark Mode & Clerk Themes

- Theme switching is managed through the `theme-provider.jsx` component
- Clerk authentication UI automatically adapts to your theme using `@clerk/themes`
- CSS variables control both application and Clerk component styling
- Light and dark mode themes are fully customizable

### Shadcn UI Dark Mode Integration

- All Shadcn UI components automatically support dark mode through Tailwind CSS
- Components inherit theme colors from CSS variables defined in [src/index.css](src/index.css)
- Dark mode is triggered by the `dark` class on the root element
- Customize component colors and styling in `components.json` and individual component files
- Shadcn components use Tailwind's `dark:` prefix for dark mode-specific styles

## Next Steps

1. Configure Clerk authentication settings in your dashboard
2. Customize the theme in [src/index.css](src/index.css)
3. Add your image generation API integration
4. Build out additional pages and components

## Support

For questions about:

- **Clerk**: Visit [Clerk Documentation](https://clerk.com/docs)
- **Tailwind CSS**: Check [Tailwind Docs](https://tailwindcss.com/docs)
- **React Router**: See [React Router Guide](https://reactrouter.com)
- **Shadcn UI**: Browse [Shadcn UI Components](https://ui.shadcn.com)
