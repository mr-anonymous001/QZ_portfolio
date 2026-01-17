# Dr. Qamar Uz Zaman - Academic Portfolio

A modern portfolio website for Dr. Qamar Uz Zaman, Ph.D. Management Sciences, Assistant Professor at COMSATS University Islamabad, Sahiwal Campus. Built with Next.js and ready for deployment on Vercel.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Place your profile picture in `/public/images/` folder (name it `profile.jpg` or `profile.png`)

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy your site

### Manual Deployment

```bash
npm run build
```

## Project Structure

- `/app` - Next.js app directory with pages and layouts
- `/public/images` - Static assets (place profile picture here)
- `/data/cv.ts` - CV data and content

## Features

- ✅ Responsive design with dark mode support
- ✅ Complete CV information display
- ✅ Publications list with impact factors and rankings
- ✅ Research interests and achievements
- ✅ Education and experience timeline
- ✅ Thesis supervision tracking
- ✅ Conference presentations
- ✅ Professional service information
- ✅ Contact information with research profile links

## Adding/Updating Content

All CV content is stored in `/data/cv.ts`. Update this file to modify any information on the portfolio.

## Profile Image

Place your profile picture in `/public/images/` folder. Supported formats: JPG, PNG. The default path is `/images/profile.jpg`.
