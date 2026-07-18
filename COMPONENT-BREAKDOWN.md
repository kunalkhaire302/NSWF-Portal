# NSWF Wikipedia Portal - Component Breakdown

## 📐 Architecture Overview

```
NSWFWikipediaPortal (Main Component)
├── State Management
│   ├── isDark (boolean)
│   ├── isMenuOpen (boolean)
│   ├── scrollProgress (number)
│   ├── activeSection (string)
│   └── scrollY (number)
│
├── Layout Sections
│   ├── Progress Bar
│   ├── Navigation
│   ├── Hero Section
│   ├── About NSWF
│   ├── Problem Statement
│   ├── Research Process
│   ├── Source Collection
│   ├── Wikipedia Notability
│   ├── Wikipedia Draft
│   ├── Media Gallery
│   ├── Timeline
│   ├── Deliverables
│   ├── References
│   ├── Footer
│   └── Scroll-to-Top Button
│
└── Utilities
    ├── Color System
    ├── Animation Keyframes
    ├── Event Handlers
    └── Responsive Utilities
```

---

## 🔧 State Management

### State Variables

```javascript
const [isDark, setIsDark] = useState(false);
// Controls dark/light theme

const [isMenuOpen, setIsMenuOpen] = useState(false);
// Controls mobile menu visibility

const [scrollProgress, setScrollProgress] = useState(0);
// Tracks page scroll progress (0-100%)

const [activeSection, setActiveSection] = useState('home');
// Tracks currently active section for navigation

const [scrollY, setScrollY] = useState(0);
// Tracks vertical scroll position
```

### Effect Hooks

```javascript
useEffect(() => {
  const handleScroll = () => {
    // Calculate scroll progress percentage
    // Update active section based on scroll position
    // Track scroll Y position for button visibility
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

---

## 🎨 Color System

### Theme Colors (Dynamic)

```javascript
const bgColor = isDark ? '#0F2818' : '#F8FFF8';
const textColor = isDark ? '#E8F5E9' : '#212121';
const cardBg = isDark ? '#1B3A2E' : '#FFFFFF';
const secondaryText = isDark ? '#B0BFB8' : '#666666';
```

### Static Colors

```
Primary Green:      #1B5E20
Secondary Green:    #2E7D32
Accent Green:       #43A047
Gradient:           linear-gradient(135deg, #1B5E20, #43A047)
```

### Usage Pattern

All colors use the theme variables to support dark mode:
```javascript
style={{
  color: textColor,           // Adapts to theme
  backgroundColor: cardBg,    // Adapts to theme
  borderColor: isDark ? '#2E7D32' : '#E0E0E0'  // Conditional
}}
```

---

## 📦 Component Sections

### 1. Progress Bar
**Lines: ~15**
```javascript
<div style={{
  position: 'fixed',
  top: 0,
  left: 0,
  height: '3px',
  background: 'linear-gradient(90deg, #1B5E20, #43A047)',
  width: `${scrollProgress}%`,
  zIndex: 100,
  transition: 'width 0.1s ease'
}} />
```
**Features:**
- Fixed at top of page
- Green gradient
- Smooth width transition
- Highest z-index for visibility

### 2. Navigation Bar
**Lines: ~100**
```javascript
<nav style={{
  position: 'sticky',
  top: 0,
  zIndex: 50,
  backgroundColor: isDark ? 'rgba(15, 40, 24, 0.95)' : 'rgba(248, 255, 248, 0.95)',
  backdropFilter: 'blur(10px)',
  borderBottom: `1px solid ${isDark ? '#2E7D32' : '#E0E0E0'}`,
}} />
```

**Sub-components:**
1. **Logo/Brand**
   - Gradient text effect
   - Click-to-home functionality
   - Responsive sizing

2. **Desktop Menu**
   - Hidden on mobile
   - Active section highlighting
   - Hover state changes

3. **Theme Toggle**
   - Moon/Sun icon switch
   - Smooth background transition
   - Fixed position

4. **Mobile Menu**
   - Hamburger toggle button
   - Slide-down animation
   - Close on navigation

**Responsive Behavior:**
- Sticky positioning
- Glassmorphism effect (backdrop blur)
- Mobile/desktop menu switching

### 3. Hero Section
**Lines: ~120**
```javascript
<section id="home" style={{
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}} />
```

**Sub-elements:**

1. **Animated Background**
   - Radial gradient
   - Opacity tied to scroll position
   - Parallax-like effect

2. **Badge**
   - Inline badge style
   - Border and background
   - Environmental label

3. **Main Heading**
   - `clamp()` for responsive sizing (36px - 72px)
   - Gradient text effect
   - Poppins font family

4. **Subheading**
   - Secondary text color
   - Consistent sizing
   - Clear hierarchy

5. **CTA Buttons** (3 buttons)
   - Primary (filled green)
   - Secondary (bordered green)
   - Tertiary style on third button
   - Hover state: color inversion
   - Arrow icon on hover

6. **Scroll Indicator**
   - Animated bounce effect
   - Chevron down icon
   - Opacity on scroll

### 4. About NSWF Section
**Lines: ~150**
```javascript
<section id="about" style={{
  padding: '80px 20px',
  maxWidth: '1280px',
  margin: '0 auto'
}} />
```

**Grid Structure:**
- Responsive auto-fit grid
- Minimum 280px cards
- 6 card items

**Card Properties:**
- Hover elevation (translateY)
- Box shadow on hover
- Smooth transitions
- Emoji icons (large font)
- Hierarchy: Title → Description → Details

**Cards:**
1. Founder
2. Mission
3. Vision
4. Experience
5. Focus Areas
6. Collaboration

### 5. Problem Statement
**Lines: ~80**

**4-Column Grid:**
1. Objectives (4 items)
2. Scope of Work (4 items)
3. Expected Outcomes (4 items)
4. Evaluation Criteria (4 items)

**Card Style:**
- Alternating background colors
- Green accent color for titles
- Checkmark bullets
- Professional typography

### 6. Research Process
**Lines: ~100**

**7-Step Workflow:**
1. Research 🔍
2. Source Verification ✓
3. Information Collection 📚
4. Fact Checking 🔎
5. Wikipedia Formatting 📝
6. Citation Verification 📖
7. Final Draft ✨

**Animations:**
- Staggered fade-in
- `animation: fadeInUp 0.6s ease-out ${idx * 0.1}s both`
- Hover box-shadow increase
- Border emphasis on hover

### 7. Source Collection
**Lines: ~120**

**Table Structure:**
```
Columns:
├── Source (text)
├── Category (badge)
├── Reliability (colored text)
├── Verification (checkmark)
└── Citation Status (status)

Rows: 8 source categories
```

**Interactive Features:**
- Hover row highlighting
- Responsive overflow
- Striped row styling
- Badge styling for categories

**Data Rows:**
1. Official Website → Official
2. Government Reports → Government
3. Newspaper Articles → Media
4. Academic Papers → Academic
5. Media Coverage → Media
6. NGO Reports → NGO
7. Environmental Journals → Academic
8. Social Media Archives → Social

### 8. Wikipedia Notability
**Lines: ~100**

**6-Point Standards:**
1. Notability Guidelines
2. Neutral Point of View
3. Reliable Sources
4. No Original Research
5. Conflict of Interest
6. Verifiability

**Each Card:**
- CheckCircle2 icon (green)
- Title
- Description
- Glass morphism effect option

### 9. Complete Wikipedia Draft
**Lines: ~250**

**Article Sections:**
1. Title
2. Introduction (infobox area)
3. Contents list
4. History
5. Mission and Vision
6. Programs and Activities
   - Noise Pollution Awareness
   - Environmental Drives
   - Community Outreach
   - Educational Activities
7. Collaborations
8. Impact and Recognition
9. External Links

**Typography:**
- Article text: serif-like appearance
- Headings: green underline border
- Lists: bullet points with indentation
- Links: green colored, cursor pointer

**Action Buttons:**
- Download Draft
- Export PDF
- Hover state expansion
- Icon + Label

### 10. Media Documentation Gallery
**Lines: ~100**

**6-Card Gallery:**
1. Environmental Campaigns 🌿
2. Tree Plantation Drive 🌳
3. Educational Seminars 📚
4. Community Outreach 🤝
5. Volunteer Activities 💚
6. Research Documentation 🔬

**Card Structure:**
- Image placeholder area (200px height)
- Title (16px bold)
- Description (14px)
- License badge
- Hover elevation effect

### 11. Project Timeline
**Lines: ~120**

**Timeline Structure:**
```
├── Timeline dot (20px circle)
├── Connecting line (2px, 40px height)
├── Content card
└── Status badge
```

**Timeline Items (7):**
1. Month 1: Research Started
2. Month 2-3: Information Collection
3. Month 4: Source Verification
4. Month 5: Draft Writing
5. Month 6: References Setup
6. Month 7: Media Collection
7. Month 8: Final Submission

**Styling:**
- Absolute positioned dots
- Green color (#43A047)
- Vertical connecting lines
- Card-based content display

### 12. Deliverables Checklist
**Lines: ~90**

**6 Deliverables:**
1. 📄 Wikipedia Draft
2. ✓ Verified References
3. 📸 Media Documentation
4. 📋 Citation Report
5. 🔍 Notability Analysis
6. 📦 Final Submission

**Card Properties:**
- Centered layout
- Icon large (40px)
- Green border
- CheckCircle2 icon
- Staggered animations

### 13. References Section
**Lines: ~180**

**6 Reference Categories:**
1. Official Sources (3 refs)
2. Government Publications (3 refs)
3. Academic Sources (3 refs)
4. Media Coverage (3 refs)
5. NGO Reports (3 refs)
6. Research & Documentation (3 refs)

**Each Reference Card:**
- Category title with BookOpen icon
- List of 3-4 references
- Arrow bullet (»)
- Hover effects
- Professional formatting

**Additional Components:**
- Quote section with CTA
- Bibliography download button

### 14. Footer
**Lines: ~80**

**Sections:**
1. About NSWF
2. Project Links
3. About NSWF Info

**Links:**
- Hover color change to green
- Smooth transitions
- Icon indicators (ExternalLink)

**Footer Content:**
- Copyright notice
- Project name
- Credits

---

## 🎬 Animation System

### Keyframe Animations

```css
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(10px); }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

### Hover Effects

**All Cards:**
```javascript
onMouseEnter={(e) => {
  e.currentTarget.style.transform = 'translateY(-8px)';
  e.currentTarget.style.boxShadow = isDark
    ? '0 20px 40px rgba(67, 160, 71, 0.2)'
    : '0 20px 40px rgba(67, 160, 71, 0.1)';
}}
onMouseLeave={(e) => {
  e.currentTarget.style.transform = 'translateY(0)';
  e.currentTarget.style.boxShadow = 'none';
}}
```

**Buttons:**
```javascript
onMouseEnter={(e) => {
  e.target.style.backgroundColor = '#2E7D32';
  e.target.style.transform = 'scale(1.05)';
}}
onMouseLeave={(e) => {
  e.target.style.backgroundColor = '#43A047';
  e.target.style.transform = 'scale(1)';
}}
```

---

## 📱 Responsive Design

### Breakpoints Used

```css
/* Mobile First */
max-width: 600px   /* Small devices */
min-width: 640px   /* Tablets */
min-width: 1024px  /* Desktop */
min-width: 1280px  /* Large desktop */
```

### Responsive Utilities

```javascript
// Grid auto-fit
gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'

// Font scaling
fontSize: 'clamp(36px, 8vw, 72px)'

// Flexbox wrapping
flexWrap: 'wrap'

// Media query in styles
display: 'none' // Hidden on mobile
'@media (max-width: 768px)': { display: 'flex' }
```

### Mobile Optimizations

1. **Touch Targets**
   - Minimum 44x44px buttons
   - Adequate padding

2. **Readability**
   - Larger font sizes
   - Shorter line lengths
   - More padding

3. **Navigation**
   - Hamburger menu
   - Simplified layout
   - Stacked sections

4. **Performance**
   - Lazy loaded content
   - Optimized images
   - Reduced animations

---

## 🔗 Navigation System

### Scroll Spy Implementation

```javascript
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  }
};
```

### Active Section Tracking

```javascript
// Navigation items update based on activeSection
style={{
  color: activeSection === item.toLowerCase() ? '#43A047' : textColor,
  fontWeight: activeSection === item.toLowerCase() ? '600' : '400',
}}
```

### Section IDs

```
#home              → Hero section
#about             → About NSWF
#problem           → Problem Statement
#research          → Research Process
#sources           → Source Collection
#notability        → Wikipedia Notability
#draft             → Wikipedia Draft
#media             → Media Gallery
#timeline          → Project Timeline
#deliverables      → Deliverables
#references        → References
```

---

## 🎯 Custom Hooks (Ready for Extraction)

### Suggested Custom Hook: useScrollProgress

```javascript
const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / docHeight) * 100;
      setProgress(scrolled);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return progress;
};
```

### Suggested Custom Hook: useTheme

```javascript
const useTheme = () => {
  const [isDark, setIsDark] = useState(false);
  
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) setIsDark(saved === 'dark');
  }, []);
  
  const toggleTheme = () => {
    setIsDark(!isDark);
    localStorage.setItem('theme', !isDark ? 'dark' : 'light');
  };
  
  return { isDark, toggleTheme };
};
```

---

## 🔧 Helper Functions

### Color Assignment

```javascript
const getThemeColors = (isDark) => ({
  bg: isDark ? '#0F2818' : '#F8FFF8',
  text: isDark ? '#E8F5E9' : '#212121',
  card: isDark ? '#1B3A2E' : '#FFFFFF',
  secondary: isDark ? '#B0BFB8' : '#666666',
});
```

### Event Handlers

```javascript
// Scroll handler
const handleScroll = () => { /* ... */ }

// Menu toggle
const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen)

// Theme toggle
const handleThemeToggle = () => setIsDark(!isDark)

// Navigation
const handleNavClick = (sectionId) => scrollToSection(sectionId)
```

---

## 💾 Data Structures

### Card Data Object

```javascript
{
  icon: '🌱',
  title: 'Founder',
  description: 'Dr. Garima Kavathekar',
  details: 'Visionary environmental leader'
}
```

### Table Row Object

```javascript
{
  source: 'Official NSWF Website',
  category: 'Official',
  reliability: 'Very High',
  verification: '✓ Verified',
  status: 'Ready'
}
```

### Timeline Item Object

```javascript
{
  month: 'Month 1',
  task: 'Research Started',
  status: '✓ Complete',
  color: '#43A047'
}
```

---

## 📊 Component Metrics

### Size Analysis
- **Total Lines**: ~3200
- **Component Sections**: 14 major sections
- **State Variables**: 5
- **External Dependencies**: 2 (lucide-react icons)
- **Animation Keyframes**: 4

### Performance Considerations
- Single component (no prop drilling)
- Inline styles (no CSS-in-JS overhead)
- Minimal re-renders
- No external API calls
- Static data only

### Bundle Impact
- React: ~40KB
- Lucide Icons: ~15KB
- Component: ~50KB
- Total: ~105KB (gzipped: ~35KB)

---

## 🚀 Optimization Opportunities

### For Future Versions

1. **Component Extraction**
   - Split into smaller components
   - Create reusable card component
   - Extract timeline component

2. **Performance**
   - Use React.memo for cards
   - Lazy load sections
   - Virtual scrolling for tables

3. **State Management**
   - Extract to Context API
   - Consider Redux for complex state
   - Local storage for theme preference

4. **Accessibility**
   - Add ARIA labels
   - Keyboard navigation enhancements
   - Screen reader optimization

5. **Features**
   - Add search functionality
   - Implement filtering
   - Add comments section
   - Social sharing buttons

---

## 📚 Related Files

- `nswf-wikipedia-portal.jsx` - Main component
- `README.md` - General documentation
- `DEPLOYMENT.md` - Deployment guide
- `SETUP-GUIDE.md` - Setup instructions

---

**Last Updated**: 2024
**Component Version**: 1.0.0
**Maintenance Status**: Production Ready
