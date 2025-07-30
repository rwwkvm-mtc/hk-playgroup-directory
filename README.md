# Hong Kong Playgroup & Pre-Nursery Directory

A comprehensive web application designed to help parents in Hong Kong find and apply to early childhood education programs. This directory covers playgroups and pre-nursery programs across all 18 districts of Hong Kong.

## 🌟 Features

### 🔍 Search & Discovery
- **Advanced Search**: Find programs by district, name, or address
- **Smart Filtering**: Filter by program type, age groups, language medium, and fees
- **Quick Filters**: Popular districts and age groups for faster discovery
- **Sorting Options**: Sort by name, fees, rating, or district

### 🏫 Program Profiles
- **Comprehensive Information**: Contact details, programs, facilities, and reviews
- **Bilingual Support**: Full English and Traditional Chinese interface
- **Rating System**: Star ratings with parent reviews
- **Detailed Programs**: Session types, age ranges, and language options

### 📝 Application System
- **Online Applications**: Submit applications directly through the platform
- **Form Validation**: Comprehensive application forms with validation
- **Status Tracking**: Track application status (planned feature)

### 🎨 User Experience
- **Responsive Design**: Mobile-friendly interface
- **Bilingual Interface**: Toggle between English and Chinese
- **Favorites System**: Save preferred programs
- **Modern UI**: Clean, professional design with accessibility features

## 🚀 Live Demo

[View Live Demo](https://rwwkvm-mtc.github.io/hk-playgroup-directory/) *(Live Now!)*

## 🛠️ Technology Stack

### Frontend
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with CSS custom properties and responsive design
- **JavaScript**: Vanilla JS with modular architecture
- **Font Awesome**: Icons and visual elements

### Design System
- **Color Palette**: Teal-based primary colors with cream backgrounds
- **Typography**: Modern font stack with proper hierarchy
- **Components**: Consistent card, button, form, and modal designs
- **Dark Mode**: Automatic dark mode support

### Architecture (Planned)
- **Frontend**: React.js + Next.js + TypeScript
- **Backend**: Node.js + Express.js microservices
- **Database**: PostgreSQL with Redis cache
- **Search**: Elasticsearch for advanced search capabilities
- **Deployment**: Docker + Kubernetes on cloud platform

## 📁 Project Structure

```
hk-playgroup-directory/
├── index.html              # Main application page
├── style.css               # Complete styling system
├── app.js                  # Application logic and data
├── README.md               # This file
├── .gitignore              # Git ignore rules
├── LICENSE                 # Project license
├── docs/                   # Documentation
│   ├── api_specification.json
│   ├── database_schema.json
│   ├── technical_architecture.json
│   ├── project_requirements.json
│   ├── user_flows.json
│   └── deliverables_summary.json
└── assets/                 # Static assets
    ├── sample_data.json
    └── database_schema.sql
```

## 🏃‍♂️ Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required - runs entirely in the browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rwwkvm-mtc/hk-playgroup-directory.git
   cd hk-playgroup-directory
   ```

2. **Open in your browser**
   ```bash
   # Simply open index.html in your browser
   open index.html
   ```
   
   Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Access the application**
   - Navigate to `http://localhost:8000` (if using a server)
   - Or open `index.html` directly in your browser

## 📊 Sample Data

The application includes sample data for 8 programs across different Hong Kong districts:

- **Happy Kids Playgroup** (Central & Western) - 6-36 months
- **Little Scholars Pre-Nursery** (Wan Chai) - 24-36 months
- **Sunshine Toddlers** (Sha Tin) - 18-30 months
- **Rainbow Children Center** (Kowloon City) - 6-36 months
- **Bright Beginnings** (Kwun Tong) - 12-36 months
- **Smart Start Academy** (Tsuen Wan) - 24-36 months
- **Little Angels Playgroup** (Eastern) - 6-30 months
- **Creative Kids Corner** (Yuen Long) - 18-36 months

## 🎯 Program Types

### Playgroups (6 months to 3 years)
- **Focus**: Early development through play-based activities
- **Activities**: Sensory play, music and movement, parent-child bonding
- **Benefits**: Motor skills, language development, social awareness

### Pre-Nursery Programs (2-3 years)
- **Focus**: Structured learning to prepare for kindergarten
- **Activities**: Basic academic skills, language development, school readiness
- **Benefits**: Academic foundations, independent learning, social skills

## 🎯 Usage Guide

### Searching for Programs
1. Use the main search bar to find programs by name or location
2. Apply filters using the sidebar options
3. Use quick filter buttons for popular districts and age groups
4. Sort results by different criteria

### Viewing Program Details
1. Click on any program card to view detailed information
2. Browse through contact information, programs, and facilities
3. Read parent reviews and ratings
4. Submit applications directly through the platform

### Language Switching
- Click the language toggle button in the navigation
- All content switches between English and Traditional Chinese

## 🔮 Future Development

### Phase 2: Full-Stack Implementation
- [ ] React.js frontend with Next.js
- [ ] Node.js backend microservices
- [ ] PostgreSQL database integration
- [ ] User authentication and profiles
- [ ] Real-time application tracking

### Phase 3: Advanced Features
- [ ] Map-based search with geographic boundaries
- [ ] Advanced analytics and reporting
- [ ] Admin dashboard for institutions
- [ ] Email notifications and SMS alerts
- [ ] Mobile app development

### Phase 4: Integration & Scale
- [ ] Hong Kong Government API integration
- [ ] Education Bureau data synchronization
- [ ] Payment processing for applications
- [ ] Advanced search with Elasticsearch
- [ ] Cloud deployment and scaling

## 🤝 Contributing

We welcome contributions! Please feel free to submit issues and enhancement requests.

### Development Setup
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style
- Follow existing code formatting
- Add comments for complex logic
- Ensure responsive design compatibility
- Test on multiple browsers

## 📋 Requirements

### Functional Requirements
- Program search and discovery
- Comprehensive program profiles
- Online application system
- Bilingual support (English/Chinese)
- Mobile-responsive design

### Non-Functional Requirements
- Page load time < 3 seconds
- Mobile usage optimization
- Accessibility compliance (WCAG 2.1 AA)
- Cross-browser compatibility

## 🏛️ Compliance

This project is designed to comply with:
- **Hong Kong Personal Data (Privacy) Ordinance**
- **WCAG 2.1 AA accessibility standards**
- **Government accessibility requirements**
- **Education Bureau reporting standards**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Hong Kong Education Bureau** for institutional data structure
- **Font Awesome** for icons
- **Perplexity AI** for initial project planning and development
- **Open source community** for inspiration and best practices

## 📞 Contact

- **Project Link**: [https://github.com/rwwkvm-mtc/hk-playgroup-directory](https://github.com/rwwkvm-mtc/hk-playgroup-directory)
- **Live Demo**: [https://rwwkvm-mtc.github.io/hk-playgroup-directory/](https://rwwkvm-mtc.github.io/hk-playgroup-directory/)
- **Email**: info@hkplaygroups.com *(Coming Soon)*
- **Phone**: +852 1234-5678 *(Coming Soon)*

---

**Made with ❤️ for Hong Kong families**

*This project aims to make early childhood education more accessible and transparent for parents across Hong Kong.* 