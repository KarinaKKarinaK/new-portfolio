# React Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features a beautiful star background animation, dark/light theme toggle, and multiple sections showcasing skills, projects, and contact information.

## eatures

- **Responsive Design**: Fully responsive layout that works on all devices
- **Theme Toggle**: Switch between dark and light modes with smooth transitions
- **Animated Background**: Beautiful star field animation for visual appeal
- **Multi-Section Layout**: 
  - Hero section with introduction
  - About section with personal information
  - Skills section displaying technical abilities
  - Projects section with portfolio showcase
  - Contact section with working email form
- **Email Integration**: Contact form powered by EmailJS for direct communication
- **Modern UI**: Clean, modern design with smooth animations and transitions
- **Fast Performance**: Built with Vite for lightning-fast development and builds

## Tech Stack

- **Frontend**: React 19, React Router DOM
- **Styling**: Tailwind CSS 4.1
- **Build Tool**: Vite 7.0
- **Email Service**: EmailJS
- **Icons**: Lucide React
- **UI Components**: Radix UI (Toast notifications)
- **Utilities**: Class Variance Authority, clsx, tailwind-merge

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd new-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add your EmailJS credentials:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server:
```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks


## ustomization

1. **Projects**: Add your project images to `public/projects/` and update the ProjectsSection component
2. **Skills**: Modify the SkillsSection component to reflect your technical abilities
3. **About**: Update the AboutSection component with your personal information
4. **Contact**: Configure EmailJS with your email service for the contact form
5. **Theme**: Customize colors and styling in the Tailwind CSS configuration

## Email Setup

To enable the contact form:

1. Sign up for [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Add your credentials to the `.env` file
4. The contact form will automatically send emails to your configured address

## Deployment

Build the project for production:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service like Vercel, Netlify, or GitHub Pages.

## License

This project is open source and available under the [MIT License](LICENSE).
