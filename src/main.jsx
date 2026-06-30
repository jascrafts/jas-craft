import './index.css'
import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './App'

// ViteReactSSG returns the createRoot entry the framework calls on both
// the server (pre-render) and the client (hydrate). In `vite` dev this
// behaves as a normal SPA; `vite-react-ssg build` pre-renders each route.
export const createRoot = ViteReactSSG({ routes })
