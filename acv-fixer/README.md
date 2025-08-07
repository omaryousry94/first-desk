# ACV Fixer

A modern, responsive landing page for ACV Fixer - an intelligent SaaS platform for Actual Cash Value calculations.

## Features

- **Modern Design**: Clean, professional landing page with gradient backgrounds and smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Component-Based**: Built with reusable UI components using shadcn/ui
- **TypeScript**: Full TypeScript support for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Lucide Icons**: Beautiful, customizable icons throughout the interface

## Tech Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Re-usable components built with Radix UI and Tailwind CSS
- **Lucide React**: Beautiful & consistent icon toolkit
- **class-variance-authority**: Type-safe component variants
- **clsx**: Conditional className utility
- **tailwind-merge**: Merge Tailwind CSS classes without conflicts

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd acv-fixer
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
acv-fixer/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and CSS variables
│   │   ├── layout.tsx           # Root layout component
│   │   └── page.tsx             # Main landing page
│   ├── components/
│   │   └── ui/                  # Reusable UI components
│   │       ├── button.tsx       # Button component
│   │       ├── card.tsx         # Card components
│   │       └── badge.tsx        # Badge component
│   └── lib/
│       └── utils.ts             # Utility functions
├── tailwind.config.ts           # Tailwind configuration
├── package.json                 # Dependencies and scripts
└── README.md                   # Project documentation
```

## Components

### UI Components

- **Button**: Versatile button component with multiple variants and sizes
- **Card**: Card container with header, content, and footer sections
- **Badge**: Small status indicators and labels

### Page Sections

1. **Navigation**: Sticky header with logo and navigation links
2. **Hero Section**: Main value proposition with call-to-action buttons
3. **Stats Section**: Key metrics and achievements
4. **Features Section**: Product features with icons and descriptions
5. **How It Works**: 3-step process explanation
6. **Pricing Section**: Three pricing tiers with feature lists
7. **Testimonials**: Customer reviews and ratings
8. **CTA Section**: Final call-to-action
9. **Footer**: Links and company information

## Customization

### Colors

The design uses a blue color scheme that can be customized by modifying the CSS variables in `src/app/globals.css`:

```css
:root {
  --primary: 221.2 83.2% 53.3%; /* Blue */
  --primary-foreground: 210 40% 98%;
  /* ... other variables */
}
```

### Content

Update the content in `src/app/page.tsx` to match your business needs:

- Company name and logo
- Value propositions
- Feature descriptions
- Pricing information
- Testimonials
- Contact information

### Styling

Modify the Tailwind classes in the components to adjust:

- Spacing and layout
- Typography
- Colors and backgrounds
- Animations and transitions

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Components

1. Create new component files in `src/components/ui/`
2. Follow the shadcn/ui pattern with proper TypeScript types
3. Use the `cn` utility function for class merging
4. Export components from the ui index file

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email support@acvfixer.com or create an issue in the repository.
