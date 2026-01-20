![alt text](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

![alt text](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

![alt text](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

![alt text](https://img.shields.io/badge/Lucide_Icons-FF4D49?style=for-the-badge)
A modern, pixel-perfect Project Management Dashboard built with React and Tailwind CSS. This system is designed for high-density data visualization, featuring custom interactive components, state-driven dynamic tables, and a specialized mobile-first responsive architecture.
🚀 Key Features

1. Dynamic Contextual Dashboard
   State-Driven UI: The entire dashboard layout transforms based on the active category (Completed, Incomplete, High Priority, Red Flags, Knowledge Base).
   Interactive StatCards: Custom-engineered cards with CSS-variable-driven hover effects that dynamically fill background colors while maintaining icon legibility.
2. Advanced Component Architecture
   Portal-Based Dropdowns: Implemented React Portals for the Members dropdown to bypass parent container overflow-hidden constraints, ensuring menus stay visible over complex data grids.
   Hybrid Responsive Header: A unique 2-row mobile layout that seamlessly transitions into a sleek single-row desktop navigation without losing functional elements.
3. Smart Data Table System
   Conditional Rendering: A single robust table component that reconfigures its headers, row data, and action buttons (Accept/Reject/Edit) based on the current user view.
   Custom Pagination: Responsive horizontal pagination that adapts its label density for mobile screens.
4. Mobile-First Navigation
   Slide-In Menu: A high-performance mobile menu that slides from the right, featuring a backdrop-blur overlay and a scroll-lock mechanism for superior UX.
   Capsule Tabs: Specialized sub-navigation for categories like "Red Flags" and "Departments".
   🛠️ Tech Stack
   Frontend: React (Vite)
   Styling: Tailwind CSS (Utility-first, JIT engine)
   Icons: Lucide React
   Routing: React Router Dom
   State Management: React Hooks (useState, useEffect, useRef)
   📂 Project Structure
   code
   Text
   src/
   ├── assets/ # SVG Logos and static media
   ├── components/
   │ ├── header/ # Responsive Header with Status logic
   │ ├── layout/ # Dashboard Shell (Backdrops & Constraints)
   │ ├── navigation/ # QuickNav & Portal-based Mobile Menu
   │ ├── stats/ # Interactive StatCards & MembersCard
   │ └── table/ # Dynamic ProjectTable & TableTabs
   ├── pages/
   │ ├── Login.jsx # Professional Login Screen
   │ └── Dashboard.jsx # Main Application "Brain"
   └── App.jsx # Routing & Global Configuration
