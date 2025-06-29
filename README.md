# Computer Information Systems Student Portfolio

A modern, responsive portfolio website built with React and Express.js, featuring a dark GitHub-inspired theme.

## Features

- **Modern Dark Theme**: GitHub-inspired design with clean aesthetics
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Portfolio Showcase**: Education, experience, projects, and technical skills
- **Contact Form**: Functional contact form with validation
- **Professional Layout**: Single-page portfolio with separate contact page

## Tech Stack

### Frontend
- React 18 with TypeScript
- Tailwind CSS for styling
- Wouter for routing
- React Hook Form with Zod validation
- Radix UI components (shadcn/ui)
- TanStack Query for state management

### Backend
- Node.js with Express.js
- TypeScript throughout
- In-memory storage for contact forms
- RESTful API design

## Getting Started

### Prerequisites
- Node.js 20 or higher
- npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd cis-student-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - Run TypeScript type checking

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── lib/            # Utilities and configurations
│   │   └── hooks/          # Custom React hooks
├── server/                 # Backend Express application
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Data storage layer
│   └── vite.ts            # Vite integration
├── shared/                 # Shared types and schemas
└── README.md
```

## Customization

### Personal Information
Update the portfolio content in `client/src/pages/portfolio.tsx`:
- Hero section with your name and description
- Education details
- Work experience
- Projects showcase
- Technical skills

### Contact Information
Update contact details in `client/src/pages/contact.tsx`:
- Email address
- Location
- Social media links

### Styling
The project uses a custom GitHub-inspired dark theme. Colors and styling can be customized in:
- `client/src/index.css` - CSS variables and custom styles
- `tailwind.config.ts` - Tailwind configuration

## Deployment

### Build for Production
```bash
npm run build
```

This creates optimized builds in the `dist/` directory.

### Deploy to Vercel, Netlify, or similar platforms
The project is configured for easy deployment to modern hosting platforms.

## Features Showcase

- **Education**: Mount Royal University Computer Information Systems program
- **Experience**: Mobile Sales Associate with quantified achievements
- **Projects**: 
  - Euro 2024 Match Analysis (Python, Machine Learning)
  - AI-Powered Movie Recommender (Python, Streamlit, OpenAI API)
  - Tourism Data Analysis (Python, SQL, Tableau)
- **Skills**: Comprehensive technical skills categorized by type

## Contact

Feel free to reach out for collaboration opportunities or questions about the projects showcased in this portfolio.

## License

MIT License - feel free to use this template for your own portfolio!