import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  date?: string;
  duration?: string;
  fullDescription?: string;
  challenges?: string[];
  solutions?: string[];
  results?: string[];
}

@Component({
  selector: 'app-case-study-modal',
  standalone: false,
  templateUrl: './case-study-modal.component.html',
  styleUrls: ['./case-study-modal.component.scss']
})

export class CaseStudyModalComponent {
  project: Project | null = null;
  projectId: string | null = null;

  // Sample projects data - you can move this to a service later
  private projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce WordPress Site',
      category: 'WordPress',
      description: 'A fully responsive e-commerce website built with WordPress and WooCommerce.',
      fullDescription: 'This project involved creating a comprehensive e-commerce solution for a retail client. The website features a custom WordPress theme, WooCommerce integration, payment gateway setup, and inventory management system. The focus was on creating a seamless shopping experience across all devices.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
      technologies: ['WordPress', 'WooCommerce', 'PHP', 'JavaScript', 'CSS3', 'MySQL'],
      liveUrl: 'https://example.com',
      featured: true,
      date: 'Jan 2024',
      duration: '3 weeks',
      challenges: [
        'Complex product variations and inventory management',
        'Payment gateway integration with multiple providers',
        'Mobile-responsive design for complex product pages'
      ],
      solutions: [
        'Custom WooCommerce extensions for product variations',
        'Stripe and PayPal integration with fallback options',
        'Mobile-first responsive design approach'
      ],
      results: [
        '40% increase in mobile conversions',
        'Reduced cart abandonment by 25%',
        'Improved page load speed by 60%'
      ]
    },
    {
      id: 2,
      title: 'Business Portfolio Website',
      category: 'Frontend',
      description: 'A modern business portfolio website with responsive design and SEO optimization.',
      fullDescription: 'A sleek portfolio website for a creative agency showcasing their work and services. The design focuses on modern aesthetics, smooth animations, and optimal user experience across all devices.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'SEO'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true,
      date: 'Dec 2023',
      duration: '2 weeks',
      challenges: [
        'Creating engaging animations without compromising performance',
        'SEO optimization for competitive keywords',
        'Cross-browser compatibility'
      ],
      solutions: [
        'Optimized CSS animations and lazy loading',
        'Structured data implementation and meta tag optimization',
        'Progressive enhancement approach'
      ],
      results: [
        'PageSpeed score of 95+ on all pages',
        'First page Google ranking for target keywords',
        '30% increase in contact form submissions'
      ]
    },
    {
      id: 3,
      title: 'Shopify Store Development',
      category: 'E-Commerce',
      description: 'Custom Shopify store with tailored theme development and payment integration.',
      fullDescription: 'Complete Shopify store development for a fashion brand, including custom theme development, product catalog setup, and third-party app integrations.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop',
      technologies: ['Shopify', 'Liquid', 'JavaScript', 'CSS3', 'API Integration'],
      liveUrl: 'https://example.com',
      featured: false,
      date: 'Nov 2023',
      duration: '4 weeks',
      challenges: [
        'Customizing Shopify theme beyond standard options',
        'Integrating with inventory management system',
        'Creating unique product page layouts'
      ],
      solutions: [
        'Custom Liquid templates and sections',
        'API integration for real-time inventory sync',
        'Flexible section-based page builder'
      ],
      results: [
        '50% faster store loading compared to previous theme',
        'Seamless inventory synchronization',
        'Improved mobile conversion rate by 35%'
      ]
    },
    {
      id: 4,
      title: 'Laravel Admin Dashboard',
      category: 'Web Application',
      description: 'Frontend development for a Laravel-based admin dashboard with responsive UI components.',
      fullDescription: 'Admin dashboard interface for a SaaS application, featuring data visualization, user management, and reporting capabilities.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      technologies: ['Laravel', 'PHP', 'JavaScript', 'Bootstrap', 'Chart.js'],
      githubUrl: 'https://github.com/example',
      featured: false,
      date: 'Oct 2023',
      duration: '3 weeks',
      challenges: [
        'Complex data visualization requirements',
        'Real-time data updates',
        'Role-based access control interface'
      ],
      solutions: [
        'Interactive charts and graphs using Chart.js',
        'WebSocket integration for real-time updates',
        'Dynamic permission-based UI components'
      ],
      results: [
        'Reduced data analysis time by 60%',
        'Improved user productivity with intuitive interface',
        'Scalable architecture for future features'
      ]
    },
    {
      id: 5,
      title: 'Restaurant Website',
      category: 'WordPress',
      description: 'A restaurant website with online menu, reservation system, and location integration.',
      fullDescription: 'Complete restaurant website with online ordering, table reservation system, and integrated Google Maps for location and directions.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop',
      technologies: ['WordPress', 'PHP', 'JavaScript', 'Google Maps API', 'Reservation Plugin'],
      liveUrl: 'https://example.com',
      featured: false,
      date: 'Sep 2023',
      duration: '2 weeks',
      challenges: [
        'Integrating multiple third-party services',
        'Mobile-friendly menu with filtering options',
        'Real-time table availability system'
      ],
      solutions: [
        'Custom plugin development for service integration',
        'Progressive web app features for mobile users',
        'Database-driven reservation management'
      ],
      results: [
        '40% of reservations made online',
        'Increased takeaway orders by 65%',
        'Improved customer engagement with interactive menu'
      ]
    },
    {
      id: 6,
      title: 'Squarespace Business Site',
      category: 'CMS',
      description: 'Custom Squarespace website for a local business with custom CSS modifications.',
      fullDescription: 'Professional business website built on Squarespace platform with extensive custom CSS modifications to achieve unique design requirements while maintaining platform stability.',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=500&fit=crop',
      technologies: ['Squarespace', 'Custom CSS', 'JavaScript', 'SEO Optimization'],
      liveUrl: 'https://example.com',
      featured: false,
      date: 'Aug 2023',
      duration: '1 week',
      challenges: [
        'Limited customization options within Squarespace',
        'Maintaining platform updates with custom code',
        'SEO optimization within platform constraints'
      ],
      solutions: [
        'Strategic CSS overrides and JavaScript enhancements',
        'Modular code structure for easy maintenance',
        'Platform-specific SEO best practices implementation'
      ],
      results: [
        'Unique design while maintaining platform benefits',
        'Fast development timeline (1 week)',
        'Improved search engine visibility'
      ]
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get('id');
    this.loadProject();
  }

  loadProject(): void {
    if (this.projectId) {
      const projectIdNum = parseInt(this.projectId, 10);
      this.project = this.projects.find(p => p.id === projectIdNum) || null;
      
      if (!this.project) {
        // Redirect to work page if project not found
        this.router.navigate(['/work']);
      }
    }
  }

  goBack(): void {
    this.router.navigate(['/work']);
  }

  navigateToWork(): void {
    this.router.navigate(['/work']);
  }
}