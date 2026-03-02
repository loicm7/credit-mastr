import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import './index.css'
import App from './App.jsx'
import Pricing from './pages/landingPages/Pricing';
import NotFoundPage from './pages/NotFoundPage';
import HowItWorks from './pages/landingPages/HowItWorks';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import { AudioPlayerContextProvider } from './hooks/useAudioPlayer';



const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path: '/pricing',
        element: <Pricing />
    },
    {
        path: '/how-it-works',
        element: <HowItWorks />
    },
    {
        path: '*',
        element: <NotFoundPage />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/contact',
        element: <Contact />
    },
    {
        path: '/privacy-policy',
        element: <PrivacyPolicy />
    },
    {
        path: '/terms',
        element: <TermsOfUse />
    }
])
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AudioPlayerContextProvider>
            <RouterProvider router={router} />
        </AudioPlayerContextProvider>
  </StrictMode>
)
