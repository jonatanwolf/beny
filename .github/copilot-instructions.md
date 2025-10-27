# Copilot Instructions for Beny Project

## Project Overview
This is a **charitable donation website** for Beny, a 1-year-old boy with Bohring-Opitz Syndrome (BOS). Built with **React + TypeScript + Vite + shadcn/ui**, it's a single-page application focusing on storytelling and donation facilitation.

## Architecture & Tech Stack
- **Framework**: React 18 + TypeScript + Vite (SWC)
- **Styling**: Tailwind CSS with shadcn/ui components
- **State**: React Query for server state, local component state
- **Routing**: React Router (single page with anchor navigation)
- **Package Manager**: Uses `bun` (see `bun.lockb`)
- **Development**: Lovable-generated project with component tagging

## Key Patterns & Conventions

### Component Structure
- **Page Components**: Single `Index.tsx` renders section components vertically
- **Section Components**: Self-contained with IDs for scroll navigation (`Hero`, `AboutSection`, etc.)
- **UI Components**: shadcn/ui in `components/ui/` (auto-generated, avoid manual edits)
- **Custom Components**: Direct in `components/` folder

### Styling Approach
- **CSS Variables**: All colors/gradients defined in `src/index.css` as HSL values
- **Custom Design Tokens**: `--hero-gradient`, `--section-gradient`, `--glow`, `--glow-strong`
- **Utility Classes**: Prefer Tailwind utilities, use `cn()` from `lib/utils.ts` for conditional styling
- **Animations**: Custom classes like `animate-fade-in-up`, `animate-pulse-soft`

### Navigation Pattern
- **Scroll-based**: Use `scrollIntoView({ behavior: "smooth" })` to navigate to sections
- **Anchor IDs**: Sections have Portuguese IDs (`como-ajudar`, `sobre`)
- **Floating CTA**: `FloatingDonateButton` always visible, scrolls to donation section

### Content & Messaging
- **Portuguese Language**: All content in Brazilian Portuguese
- **Emotional Tone**: Heartfelt but not overly sentimental
- **Key Elements**: Beny's age (1 year), condition (BOS), donation methods (PIX/Vaquinha)

## Development Commands
```bash
npm run dev          # Start development server (port 8080)
npm run build        # Production build
npm run build:dev    # Development build
npm run lint         # ESLint check
npm run preview      # Preview production build
```

## File Path Conventions
- Use `@/` alias for all imports from `src/`
- Components import UI elements from `@/components/ui/`
- Use `@/lib/utils` for the `cn()` utility
- Assets go in `src/assets/`

## Critical Implementation Notes
- **Toast System**: Uses Sonner (`sonner` package) via `toast()` import
- **Icons**: Lucide React icons, prefer filled hearts (`fill-current`)
- **Responsive**: Mobile-first design with `md:` and `lg:` breakpoints
- **Performance**: Image optimization and lazy loading for hero background
- **Accessibility**: Semantic HTML, proper ARIA labels, keyboard navigation

## When Adding Features
1. **New Sections**: Add to `Index.tsx` and create corresponding component
2. **Donations**: Update PIX key and Vaquinha URL in `DonateSection.tsx`
3. **Styling**: Extend design tokens in `index.css`, not inline styles
4. **Content**: Maintain Portuguese language and charitable tone
5. **Navigation**: Ensure new sections have proper IDs for scroll navigation