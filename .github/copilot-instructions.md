# Copilot Instructions - Conference Camera Analysis Dashboard

## Project Overview
This is a Next.js 14 TypeScript dashboard for analyzing conference camera data with real-time emotion detection, attendance tracking, and engagement metrics. Built with ECharts for visualizations and Tailwind CSS for styling.

## Architecture Patterns

### Authentication Flow
- Simple localStorage-based authentication (`isAuthenticated: "true"`)
- Root page (`app/page.tsx`) redirects unauthenticated users to `/login`
- Login uses hardcoded credentials (`johndoe@example.com`) for demo purposes
- All dashboard routes protected via this client-side check

### Data Structure Conventions
Chart components export default mock data objects following these patterns:
- **Timeline data**: `{ minute: number, [emotion]: value }[]` 
- **Sections**: `{ section: string, start: number, end: number, topic: string }[]`
- **Annotations**: `{ minute: number, type: 'laugh'|'clap'|'photo', image?: string }[]`

Example from `AttendanceTrendChart.tsx`:
```typescript
export const attendanceTimeline = {
  series: [{ minute: 0, participants: 12 }, ...],
  sections: [{ section: "Bölüm 1", start: 0, end: 15, topic: "..." }]
}
```

### Chart Component Pattern
All visualization components follow this structure:
1. Export default mock data (prefixed with `demo` or `default`)
2. Accept optional `data` and `height` props via interface
3. Use `ReactECharts` with ECharts options object
4. Define emotion color palettes as `COLORS` record
5. Include Turkish section titles and descriptions

### Layout Structure
- `app/layout.tsx`: Global layout with Geist fonts
- `app/dashboard/layout.tsx`: Dashboard-specific layout with `<Sidebar>` + `<main>`
- Responsive: `flex-col md:flex-row` for mobile-first sidebar placement
- Sidebar shows conference sections with Turkish content from NVIDIA Keynote 2025

## Development Workflows

### Local Development
```bash
npm run dev    # Start development server on :3000
npm run build  # Production build
npm run lint   # ESLint checking
```

### Adding New Charts
1. Create component in `app/dashboard/components/`
2. Export mock data object with required structure
3. Define Props interface with optional `data` and `height`
4. Import and add to dashboard grid in `app/dashboard/page.tsx`
5. Use consistent ECharts color schemes for emotions

### Styling Conventions
- Tailwind CSS with custom CSS variables (`--background`, `--foreground`)
- Chart containers: `bg-white p-6 rounded-xl shadow-lg border border-gray-200`
- Grid layout: `grid-cols-1 lg:grid-cols-2 gap-8` for responsive dashboard
- Emotion colors standardized across components (Neutral: #9CA3AF, Happiness: #FACC15, etc.)

## Key Files & Responsibilities

- `app/dashboard/components/shared/Sidebar.tsx`: Navigation with conference selection and sections
- `app/dashboard/page.tsx`: Main dashboard with chart grid layout
- Chart components export mock data and accept props for real data integration
- `public/images/`: Peak moment screenshots referenced in chart annotations

## Conference Data Context
Dashboard designed for NVIDIA Keynote 2025 analysis with 3 main sections:
1. "Dönüşüm: Tekil Çipten Yapay Zeka Altyapısı" (0-15 min)
2. "Kurumsal Yapay Zeka Platformu ve Trilyon Dolarlık Pazar" (15-35 min)  
3. "Yeni Yapay Zeka Veri Platformu ve Akıllı Muhakeme Motoru" (35-60 min)

## Dependencies
- `echarts-for-react`: Chart rendering (all visualizations)
- `next`: Framework (App Router, client components)
- `tailwindcss`: Styling system
- TypeScript strict mode enabled

When extending this codebase, maintain the established data structure patterns and ensure new charts integrate with the section-based timeline approach.
