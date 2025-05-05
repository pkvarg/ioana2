import { type RouteConfig, index, route } from '@react-router/dev/routes'

//export default [index('routes/home.tsx')] satisfies RouteConfig
export default [
  index('routes/home.tsx'),
  route('counter', 'routes/counter.tsx'),
  route('ai-gallery', 'routes/ai-gallery.tsx'),
] satisfies RouteConfig
