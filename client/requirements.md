## Packages
framer-motion | Smooth page transitions and reveal animations
date-fns | Date formatting for blog posts
react-hook-form | Form state management for contact and inquiries
@hookform/resolvers | Zod integration for form validation
clsx | Utility for conditional class names (standard in shadcn-like components)
tailwind-merge | Utility for merging tailwind classes (standard in shadcn-like components)

## Notes
- Chatbot uses SSE (Server-Sent Events) over POST. The client must use `fetch` with `body.getReader()` to consume the stream, as standard EventSource only supports GET.
- Fonts: Playfair Display (Headings) and Inter (Body) will be imported from Google Fonts.
- Tailwind config might need to be aware of the custom font families if we wanted utility classes, but we'll use CSS variables in index.css to map them to defaults or use arbitrary values.
