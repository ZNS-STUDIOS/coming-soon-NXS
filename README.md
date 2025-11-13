# ZNS NEXUS - Coming Soon Website

A minimal, elegant single-page "Coming Soon" website for ZNS NEXUS featuring a beautiful connecting dots animation and team recruitment form.

## 🎨 Features

- **Sticky Header**: Logo, "COMING SOON" badge, and social media icons
- **Hero Section**: Large elegant title with animated connecting dots background
- **Team Recruitment Form**: Email-based application system that opens the user's email client
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Fade-in effects and connecting dots canvas animation
- **Glass-morphism Effects**: Modern UI with backdrop blur and subtle borders

## 🎯 Brand Identity

**Tagline**: "Connecting the dots."

**Color Palette**:
- Primary (Sea Green): `#069593` - CTAs, countdown numbers, hover states
- Accent (Turkish Green): `#14E08E` - Badge, hover accents, gradients
- Black: `#212121` - Background
- White: `#F2EFDE` - Text, borders (with opacity)

**Typography**:
- Headlines: Cormorant Garamond (elegant serif)
- Body: Inter (clean sans-serif)

## 🚀 Quick Start

### Installation

```bash
# Navigate to frontend directory
cd /app/frontend

# Install dependencies (already done)
yarn install

# Start development server
yarn start
```

The application will run on `http://localhost:3000`

### Using Supervisor (Already Running)

```bash
# Check status
sudo supervisorctl status

# Restart frontend
sudo supervisorctl restart frontend

# View logs
tail -f /var/log/supervisor/frontend.out.log
```

## 📋 How the Recruitment Form Works

When users fill out and submit the recruitment form, it:

1. Validates all required fields
2. Opens the user's default email client with pre-filled content:
   - **To**: recruitment@znsnexus.com
   - **Subject**: ZNS NEXUS Team Application - [Role]
   - **Body**: Contains name, email, role, and message
3. Shows a success message asking users to complete sending the email
4. Resets the form after 3 seconds

This approach ensures:
- No backend/database required
- User maintains full control over their application
- Direct communication channel to ZNS NEXUS team

## 🎭 Social Media Links

Current placeholder links (update in `src/App.js`):
- Instagram: `https://instagram.com/znsnexus`
- TikTok: `https://tiktok.com/@znsnexus`
- YouTube: `https://youtube.com/@znsnexus`
- LinkedIn: `https://linkedin.com/company/znsnexus`

## 📱 Page Sections

1. **Header (Sticky)**
   - Logo with gradient circle icon
   - "COMING SOON" badge
   - Social media icons

2. **Hero Section**
   - Large "COMING SOON" title
   - "Connecting the dots." tagline
   - Animated connecting dots background (20-25 dots)

3. **Work With Us Section**
   - Recruitment form with:
     - Name field
     - Email field
     - Role dropdown (Web Developer, Video Editor, Photographer/Photo Editor, General/Other Roles)
     - Message textarea
     - Submit button

4. **Footer**
   - Copyright notice
   - Privacy Policy link
   - Terms of Service link

## ⚡ Technical Stack

- **React 18.2.0**: Frontend framework
- **Custom Canvas Animation**: Connecting dots effect
- **CSS3**: Modern styling with glass-morphism
- **Google Fonts**: Cormorant Garamond & Inter
- **Form Handling**: Mailto link integration

## 🎨 Animation Specifications

### Connecting Dots Background
- 25 dots floating smoothly across the canvas
- Dots connect with lines when within 150px
- Color: `#069593` at 10-15% opacity
- Respects `prefers-reduced-motion` for accessibility
- Smooth, organic movement with edge bouncing

### Text Animations
- Hero content fades in on page load
- 1-second smooth transition
- Transforms from 30px below to normal position

## 🔧 Customization

### Update Email Address
Edit the mailto link in `src/App.js`:
```javascript
const mailtoLink = `mailto:your-email@domain.com?subject=${subject}&body=${body}`;
```

### Update Social Links
Edit the social links in `src/App.js` Header component.

### Update Colors
Edit colors in `src/App.css` or search and replace hex values.

## 📦 Build for Production

```bash
cd /app/frontend
yarn build
```

This creates an optimized production build in the `build` folder.

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

© 2025 ZNS NEXUS. All rights reserved.

## 🤝 Support

For questions or issues, contact the ZNS NEXUS team through the recruitment form or social media channels.
