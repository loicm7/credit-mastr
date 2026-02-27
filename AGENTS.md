# AGENTS.md - Development Guidelines for creditmastr

## Project Overview

This is a full-stack application with:
- **Backend**: ASP.NET Core 8 (creditmastr.Server)
- **Frontend**: React 19 + Vite + Tailwind CSS v4 (creditmastr.client)

## Build/Lint/Test Commands

### Frontend (creditmastr.client)

```bash
# Install dependencies
npm install

# Development server (runs on port 52940)
npm run dev

# Production build
npm run build

# Lint with ESLint
npm run lint

# Preview production build
npm run preview
```

### Backend (creditmastr.Server)

```bash
# Build the project
dotnet build

# Run the server
dotnet run

# Run in development mode
dotnet watch

# Create development HTTPS certificates
dotnet dev-certs https --export-path <path> --format Pem --no-password
```

### Running a Single Test

**No tests currently exist in this repository.** To add tests:
- Frontend: Use Vitest or Jest with React Testing Library
- Backend: Use xUnit or NUnit

## Code Style Guidelines

### General

- **No comments** unless explicitly requested by the user
- Use meaningful, descriptive names for variables and functions
- Keep functions small and focused (single responsibility)
- Handle errors gracefully with try/catch blocks

### Frontend (React/JavaScript)

#### Imports
- Use absolute imports with `@/` alias (configured in vite.config.js)
- Group imports: React → external libs → internal components → styles
- Example:
  ```jsx
  import { useState, useEffect } from 'react';
  import { useNavigate } from 'react-router';
  import Navbar from '@/components/Navbar';
  import { api } from '@/services/api';
  import './App.css';
  ```

#### File Naming
- Components: PascalCase (`Navbar.jsx`, `HeroSection.jsx`)
- Hooks: camelCase with `use` prefix (`useAuth.js`, `useFetch.js`)
- Utilities: camelCase (`api.js`, `helpers.js`)
- Pages: PascalCase (`Home.jsx`, `Dashboard.jsx`)

#### Component Structure
```jsx
// Preferred: Named export for components
export function ComponentName() {
  const [state, setState] = useState(null);
  
  useEffect(() => {
    // effect logic
  }, []);
  
  return (
    <div>JSX here</div>
  );
}
```

#### State Management
- Use `useState` for local component state
- Use `useContext` for shared state across components
- Avoid prop drilling; use context or pass data via router

#### Tailwind CSS
- Use Tailwind v4 syntax (no separate tailwind.config.js needed)
- Use DaisyUI components when available
- Keep utility classes readable; extract to components when complex

#### ESLint Rules
- Enabled rules from `@eslint/js`, `react-hooks`, `react-refresh`
- `no-unused-vars`: error except vars starting with uppercase (React components)

### Backend (C#)

#### Naming Conventions
- Classes/Methods/Properties: PascalCase (`WeatherForecastController`)
- Private fields: camelCase with underscore prefix (`_logger`)
- Interfaces: `I` prefix (`IController`)

#### Controller Structure
```csharp
namespace creditmastr.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetWeatherForecast")]
        public IEnumerable<WeatherForecast> Get()
        {
            // implementation
        }
    }
}
```

#### Error Handling
- Use try/catch in service layers
- Return appropriate HTTP status codes
- Log errors with ILogger

### Git Conventions

- Use clear, descriptive commit messages
- Create feature branches for new functionality
- Run lint before committing

## Project Structure

```
creditmastr/
├── creditmastr.Server/          # ASP.NET Core API
│   ├── Controllers/             # API endpoints
│   ├── Program.cs              # Entry point
│   └── *.csproj                # Project file
├── creditmastr.client/         # React frontend
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   ├── pages/              # Page components
│   │   ├── hooks/              # Custom React hooks
│   │   ├── services/           # API calls
│   │   └── utils/              # Helper functions
│   ├── eslint.config.js        # ESLint configuration
│   ├── vite.config.js          # Vite configuration
│   └── package.json
└── creditmastr.sln             # Solution file
```

## Common Tasks

### Adding a New API Endpoint
1. Create/update controller in `creditmastr.Server/Controllers/`
2. Add corresponding frontend service in `creditmastr.client/src/services/`
3. Create React component to consume the API

### Adding a New Component
1. Create file in appropriate `src/` subdirectory
2. Export as named export
3. Import and use in parent component

### Adding a New Page
1. Create component in `src/pages/`
2. Add route in React Router configuration
3. Create navigation link if needed
