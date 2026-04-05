# Jessy Nail Studio Website

A modern, responsive website for Jessy Nail Studio featuring online appointment scheduling, service showcase, and WhatsApp integration.

## 🌟 Features

### ✨ Modern Design
- **Responsive Layout**: Fully responsive design that works perfectly on all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, elegant interface with smooth animations and transitions
- **Professional Aesthetics**: Rose gold color scheme with soft pink accents
- **Accessibility**: Semantic HTML5 structure with proper ARIA labels

### 📅 Appointment Scheduling
- **Online Booking Form**: Complete booking form with date/time selection
- **Service Selection**: Interactive service cards with checkbox selection
- **Real-time Pricing**: Dynamic price calculation as services are selected
- **Form Validation**: Client-side validation with user-friendly error messages
- **WhatsApp Integration**: Direct WhatsApp messaging with formatted booking details

### 🎨 Visual Features
- **Hero Section**: Split layout with neon text overlay and professional imagery
- **Gallery Section**: Interactive gallery with lightbox functionality showcasing nail designs
- **Values Section**: Company values with icons and descriptions
- **Tags Section**: Popular service tags with interactive styling
- **License Section**: MIT license terms and usage guidelines
- **Smooth Animations**: Scroll-triggered animations and micro-interactions
- **Navigation**: Sticky navigation with smooth scrolling
- **Mobile Menu**: Hamburger menu for mobile devices

### 🏗️ Website Structure
```
├── Header (Navigation + Logo)
├── Hero Section
├── About Section
├── Tags Section  
├── Gallery Section
├── Values Section
├── Services Section
├── Booking Section
├── License Section
└── Footer
```

### 🎯 Key Sections

#### Hero Section
- **Welcome Message**: "BEM-VINDO AO Jessy Nail Studio Nails"
- **Dual CTAs**: "Agendador Agora" and "Conhecer Mais" buttons
- **Neon Overlay**: Animated "Jessy Nail Studio NAILS" text
- **Professional Imagery**: High-quality nail photography

#### Gallery Section
- **Work Showcase**: 6 nail art examples with titles and descriptions
- **Interactive Lightbox**: Click-to-enlarge functionality
- **Hover Effects**: Smooth image zoom and overlay text
- **Service Integration**: "Criar Meu Design" CTA button

#### About Section
- **Company Story**: Professional introduction to Jessy Nail Studio
- **Key Features**: Expert Artistry, Premium Quality, Trendy Designs, Hygiene First
- **Mission Statement**: Focus on confidence, beauty, and customer care

#### Values Section
- **Core Values**: Paixão, Excelência, Cuidado, Inovação
- **Card Layout**: Interactive hover effects and animations
- **Visual Hierarchy**: Icons, titles, and descriptions

#### Services Section
- **Service Cards**: Manicure, Pedicure, Unhas em Gel, Nail Art
- **Pricing Display**: Clear pricing for each service
- **Selection System**: Interactive checkboxes with total calculation

#### Booking System
- **Comprehensive Form**: Name, email, phone, date, time, services
- **Validation**: Real-time input validation and error handling
- **WhatsApp Integration**: Direct message generation with booking details
- **Professional Design**: Clean form layout with clear CTAs

### 💅 Services Management
- **Service Categories**: Organized by manicure, pedicure, gel nails, and nail art
- **Pricing Display**: Clear pricing for all services
- **Interactive Selection**: Visual feedback for service selection
- **Total Calculation**: Automatic total price calculation

## 🛠️ Technologies Used

### Frontend
- **HTML5**: Semantic markup with modern structure
- **CSS3**: 
  - CSS Grid and Flexbox layouts
  - CSS Variables for theming
  - Smooth animations and transitions
  - Responsive design with media queries
- **JavaScript (ES6+)**:
  - Modern class-based architecture
  - Event handling and DOM manipulation
  - Form validation and processing
  - WhatsApp API integration
  - LocalStorage for data persistence (optional)

### External Libraries
- **Font Awesome**: Icon library for UI elements
- **Google Fonts**: Poppins font for typography
- **WhatsApp API**: Direct messaging integration

## 📁 Project Structure

```
Jessy.Nail.Studio/
├── index.html          # Main HTML file
├── styles.css          # Complete CSS styling
├── script.js           # JavaScript functionality
├── README.md           # This documentation
├── LICENSE              # MIT License
├── assets/             # Static assets (if available)
│   ├── logo_jessy_nail_studio.jpg
│   ├── IMG_20260404_142913.jpg
│   └── IMG_20260404_143544.jpg
└── .gitignore          # Git ignore file
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation
1. Clone or download the repository
2. Place all files in your web server directory
3. Ensure image assets are in the correct location
4. Open `index.html` in your browser

### Development Setup
For local development, you can use a simple HTTP server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 📱 Usage Guide

### For Customers
1. **Browse Services**: View available services and pricing
2. **Select Services**: Click checkboxes to select desired services
3. **View Total**: See real-time price calculation
4. **Book Appointment**: Fill out the booking form with:
   - Preferred date and time
   - Personal information
   - Optional notes
5. **Send via WhatsApp**: Click to send formatted booking request

### For Business Owner
1. **Receive Bookings**: Get WhatsApp notifications for new appointments
2. **Manage Schedule**: Respond to booking requests and confirm availability
3. **Customize Content**: Update services, prices, and contact information

## 🔧 Customization

### Updating Services
Edit the service cards in `index.html`:

```html
<div class="service-item">
    <label class="checkbox-label">
        <input type="checkbox" value="30" data-name="Service Name" class="service-checkbox">
        <span class="checkmark"></span>
        <span class="service-name">Service Name</span>
        <span class="service-price">R$ 30</span>
    </label>
</div>
```

### Changing Colors
Update CSS variables in `styles.css`:

```css
:root {
    --primary-color: #b78471;    /* Rose gold */
    --secondary-color: #fdf5f2;   /* Light pink */
    --text-primary: #4a4a4a;      /* Dark text */
    /* Add more variables as needed */
}
```

### Updating Contact Information
Change the WhatsApp number in `script.js`:

```javascript
this.phoneNumber = "5548991750255"; // Update to your number
```

### Adding New Images
1. Place images in the project directory
2. Update image paths in `index.html`
3. Ensure proper alt tags for accessibility

## 🌐 Browser Compatibility

- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+

## 📱 Mobile Features

- **Touch-Friendly**: Large tap targets and touch gestures
- **Responsive Design**: Optimized for all screen sizes
- **Mobile Navigation**: Hamburger menu for small screens
- **Fast Loading**: Optimized images and minimal JavaScript

## 🔒 Security Considerations

- **No Database**: Client-side only, no server-side processing
- **WhatsApp Integration**: Uses official WhatsApp API
- **Form Validation**: Client-side validation for better UX
- **HTTPS Ready**: Works perfectly with SSL certificates

## 📈 Performance Optimization

- **Lazy Loading**: Images load as needed
- **Minified CSS**: Optimized stylesheets
- **Efficient JavaScript**: Event delegation and optimized DOM operations
- **Image Optimization**: Properly sized and compressed images

## 🎯 SEO Features

- **Semantic HTML**: Proper heading structure and semantic tags
- **Meta Tags**: Complete SEO meta information
- **Alt Text**: Descriptive alt text for all images
- **Structured Data**: Ready for schema markup implementation

## 🔄 Future Enhancements

- **Admin Panel**: Backend for managing appointments
- **Calendar Integration**: Google Calendar sync
- **Payment Processing**: Online payment integration
- **SMS Notifications**: SMS reminders for appointments
- **Multi-language Support**: English and Portuguese versions
- **Photo Gallery**: Extended portfolio section
- **Customer Reviews**: Testimonial section
- **Social Media Integration**: Instagram feed integration

## 🐛 Troubleshooting

### Common Issues

1. **Images Not Loading**
   - Check file paths and names
   - Ensure images are in the correct directory
   - Verify file permissions

2. **WhatsApp Not Working**
   - Verify phone number format (country code + number)
   - Check internet connection
   - Ensure WhatsApp is installed on mobile device

3. **Form Not Submitting**
   - Check all required fields are filled
   - Ensure at least one service is selected
   - Verify JavaScript is enabled

4. **Responsive Issues**
   - Clear browser cache
   - Check viewport meta tag
   - Test on different devices

## 📞 Support

For support or questions regarding this website:

- **Email**: jessyferreirateixeira@gmail.com
- **Phone**: (48) 99175-0255
- **Location**: Içara, SC, Brazil

## 📄 License

This project is proprietary software for Jessy Nail Studio. All rights reserved.

## 🤝 Contributing

This is a commercial project for Jessy Nail Studio. For feature requests or bug reports, please contact the business owner directly.

---

**Jessy Nail Studio** - Professional nail care and beauty services in Içara, SC, Brazil.

*Made with ❤️ for enhancing beauty and confidence*
