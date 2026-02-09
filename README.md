# GlobalPaths - Remote Internship Platform

A modern, professional remote internship platform built with React, Vite, and Tailwind CSS v4. This website connects students, companies, and educators worldwide to facilitate meaningful internship experiences.

## 🎨 Design & Branding

This is a **customized clone** inspired by Virtual Internships, featuring:

### **Brand Identity**
- **Name**: GlobalPaths (instead of Virtual Internships)
- **Logo**: Modern gradient logo with "GP" initials
- **Tagline**: "Your gateway to global career opportunities"

### **Color Palette**
- **Primary**: Tech Blue (#1560BD) - Professional, trustworthy, innovative
- **Accent**: Princeton Orange (#FF8200) - Energetic, dynamic
- **Secondary**: Bright Ocean (#3E8EDE) - Fresh, inspiring
- **Neutrals**: Dark slate, grays, and light backgrounds

### **Typography**
- **Headings**: Manrope (Modern, geometric sans-serif)
- **Body**: Source Sans 3 (Professional, readable)

## 🚀 Features

### **Four Main Pages**

1. **Home Page**
   - Hero section with gradient background
   - Problem-solution narrative
   - Feature highlights with icons
   - Global impact statistics
   - Testimonials from all user types
   - Trusted partners showcase
   - Call-to-action sections

2. **Companies Page**
   - Benefits for hiring companies
   - Zero-cost value proposition
   - Pre-screened talent pool
   - Success stories and testimonials
   - Project templates highlight

3. **Students Page**
   - Career launch benefits
   - Guaranteed placement promise
   - Flexibility and support features
   - Student success stories
   - Global opportunities showcase

4. **Educators/Universities Page**
   - Employability enhancement
   - 10x internship opportunities
   - Intelligent matching system
   - Academic partner testimonials
   - Trusted universities showcase

### **Reusable Components**
- Responsive navigation header with dropdowns
- Comprehensive footer with social links
- Stats section with animated numbers
- Feature cards with icons
- Testimonial cards
- CTA sections with gradient backgrounds
- Mobile-friendly design

## 🛠️ Technology Stack

- **Framework**: React 18
- **Build Tool**: Vite 7.3
- **Styling**: Tailwind CSS v4
- **Routing**: React Router v7
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Manrope & Source Sans 3)
- **Images**: Pexels Stock Photos

## 📦 Installation & Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header
│   ├── Footer.jsx          # Site footer
│   ├── StatsSection.jsx    # Statistics display
│   ├── FeatureCard.jsx     # Feature highlight cards
│   ├── TestimonialCard.jsx # Testimonial cards
│   └── CTASection.jsx      # Call-to-action sections
├── pages/
│   ├── Home.jsx            # Homepage
│   ├── Companies.jsx       # For companies page
│   ├── Students.jsx        # For students page
│   └── Educators.jsx       # For educators page
├── App.jsx                 # Main app component
├── main.jsx                # App entry point
└── index.css               # Global styles & Tailwind config
```

## 🎯 Key Differences from Original

### **Visual Design**
- ✅ New color scheme (Blue & Orange vs Teal & Orange)
- ✅ Different typography (Manrope/Source Sans vs Original fonts)
- ✅ Modern gradient backgrounds instead of flat colors
- ✅ Glassmorphism effects on hero images
- ✅ Updated decorative elements and shapes

### **Branding**
- ✅ New brand name: GlobalPaths
- ✅ Custom logo with gradient
- ✅ Updated taglines and messaging
- ✅ Fresh copywriting throughout

### **Content**
- ✅ Modified statistics and numbers
- ✅ New testimonial content
- ✅ Updated feature descriptions
- ✅ Customized call-to-action text

## 🌐 Pages & Routes

### Main Pages
- `/` - Home page
- `/companies` - For Companies
- `/students` - For Students
- `/educators` - For Educators

### Authentication Flow
- `/auth/welcome` - Choose user type (Student/Company)
- `/auth/choose-path` - Select application path (Partnership/Independent)
- `/auth/get-started` - Email signup with Google OAuth
- `/auth/sign-up` - Complete registration form

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile (< 640px)
- Tablet (640px - 1024px)
- Desktop (> 1024px)

## 🎨 Design System

### **Tailwind v4 Custom Theme**
Custom CSS variables defined in `src/index.css`:
- Color palette variables
- Font families
- Component utilities

### **Button Classes**
- `.btn-primary` - Primary CTA button
- `.btn-secondary` - Secondary button
- `.btn-outline` - Outline button for dark backgrounds

### **Layout Classes**
- `.section-padding` - Consistent section padding
- `.container-custom` - Maximum width container

## 📸 Image Credits

All images sourced from Pexels with proper attribution:
- Anna Shvets
- Mikhail Nilov
- Kampus Production
- Yan Krukau
- And other talented photographers

## 🔧 Development

The project uses:
- React 18 with React Compiler
- Vite 7.3 for fast development
- Tailwind CSS v4 with @theme inline syntax
- Modern ES6+ JavaScript

## 📄 License

This is a demonstration project created for educational purposes.

---

**Note**: This is a custom-designed website inspired by Virtual Internships but with significant modifications to branding, design, and content to create a unique platform called "GlobalPaths".
