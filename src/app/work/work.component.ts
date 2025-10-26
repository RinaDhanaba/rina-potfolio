import { Component } from '@angular/core';

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
}

@Component({
  selector: 'app-work',
  standalone: false,
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce WordPress Site',
      category: 'WordPress',
      description: 'A fully responsive e-commerce website built with WordPress and WooCommerce. Features custom theme development, payment gateway integration, and product management system.',
      image: 'assets/images/projects/ecommerce-wp.jpg',
      technologies: ['WordPress', 'WooCommerce', 'PHP', 'JavaScript', 'CSS3'],
      liveUrl: 'https://example.com',
      featured: true
    },
    {
      id: 2,
      title: 'Business Portfolio Website',
      category: 'Frontend',
      description: 'A modern business portfolio website with responsive design, smooth animations, and SEO optimization. Built with HTML5, CSS3, and JavaScript.',
      image: 'assets/images/projects/business-portfolio.jpg',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true
    },
    {
      id: 3,
      title: 'Shopify Store Development',
      category: 'E-Commerce',
      description: 'Custom Shopify store with tailored theme development, product catalog setup, and payment integration. Focus on user experience and conversion optimization.',
      image: 'assets/images/projects/shopify-store.jpg',
      technologies: ['Shopify', 'Liquid', 'JavaScript', 'CSS3'],
      liveUrl: 'https://example.com',
      featured: false
    },
    {
      id: 4,
      title: 'Laravel Admin Dashboard',
      category: 'Web Application',
      description: 'Frontend development for a Laravel-based admin dashboard. Implemented responsive UI components and interactive features.',
      image: 'assets/images/projects/laravel-dashboard.jpg',
      technologies: ['Laravel', 'PHP', 'JavaScript', 'Bootstrap'],
      githubUrl: 'https://github.com/example',
      featured: false
    },
    {
      id: 5,
      title: 'Restaurant Website',
      category: 'WordPress',
      description: 'A restaurant website with online menu, reservation system, and location integration. Built with custom WordPress theme.',
      image: 'assets/images/projects/restaurant-wp.jpg',
      technologies: ['WordPress', 'PHP', 'JavaScript', 'Google Maps API'],
      liveUrl: 'https://example.com',
      featured: false
    },
    {
      id: 6,
      title: 'Squarespace Business Site',
      category: 'CMS',
      description: 'Custom Squarespace website for a local business with custom CSS modifications and integrated booking system.',
      image: 'assets/images/projects/squarespace-business.jpg',
      technologies: ['Squarespace', 'Custom CSS', 'JavaScript'],
      liveUrl: 'https://example.com',
      featured: false
    }
  ];

  filteredProjects: Project[] = [];
  categories: string[] = ['All', 'WordPress', 'Frontend', 'E-Commerce', 'Web Application', 'CMS'];
  activeCategory: string = 'All';
  showAll: boolean = false;

  ngOnInit(): void {
    this.filteredProjects = this.projects;
  }

  filterProjects(category: string): void {
    this.activeCategory = category;
    if (category === 'All') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project => project.category === category);
    }
    this.showAll = false;
  }

  get displayedProjects(): Project[] {
    if (this.showAll) {
      return this.filteredProjects;
    }
    return this.filteredProjects.slice(0, 6);
  }

  get featuredProjects(): Project[] {
    return this.projects.filter(project => project.featured);
  }

  toggleShowAll(): void {
    this.showAll = !this.showAll;
  }

  hasLiveUrl(project: Project): boolean {
    return !!project.liveUrl;
  }

  hasGithubUrl(project: Project): boolean {
    return !!project.githubUrl;
  }
}