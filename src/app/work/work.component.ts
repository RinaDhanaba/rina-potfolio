import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      technologies: ['WordPress', 'WooCommerce', 'PHP', 'JavaScript', 'CSS3'],
      liveUrl: 'https://example.com',
      featured: true,
      date: 'Jan 2024',
      duration: '3 weeks'
    },
    {
      id: 2,
      title: 'Business Portfolio Website',
      category: 'Frontend',
      description: 'A modern business portfolio website with responsive design, smooth animations, and SEO optimization. Built with HTML5, CSS3, and JavaScript.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true,
      date: 'Dec 2023',
      duration: '2 weeks'
    },
    {
      id: 3,
      title: 'Shopify Store Development',
      category: 'E-Commerce',
      description: 'Custom Shopify store with tailored theme development, product catalog setup, and payment integration. Focus on user experience and conversion optimization.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop',
      technologies: ['Shopify', 'Liquid', 'JavaScript', 'CSS3'],
      liveUrl: 'https://example.com',
      featured: false,
      date: 'Nov 2023',
      duration: '4 weeks'
    },
    {
      id: 4,
      title: 'Laravel Admin Dashboard',
      category: 'Web Application',
      description: 'Frontend development for a Laravel-based admin dashboard. Implemented responsive UI components and interactive features.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      technologies: ['Laravel', 'PHP', 'JavaScript', 'Bootstrap'],
      githubUrl: 'https://github.com/example',
      featured: false,
      date: 'Oct 2023',
      duration: '3 weeks'
    },
    {
      id: 5,
      title: 'Restaurant Website',
      category: 'WordPress',
      description: 'A restaurant website with online menu, reservation system, and location integration. Built with custom WordPress theme.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop',
      technologies: ['WordPress', 'PHP', 'JavaScript', 'Google Maps API'],
      liveUrl: 'https://example.com',
      featured: false,
      date: 'Sep 2023',
      duration: '2 weeks'
    },
    {
      id: 6,
      title: 'Squarespace Business Site',
      category: 'CMS',
      description: 'Custom Squarespace website for a local business with custom CSS modifications and integrated booking system.',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500&h=300&fit=crop',
      technologies: ['Squarespace', 'Custom CSS', 'JavaScript'],
      liveUrl: 'https://example.com',
      featured: false,
      date: 'Aug 2023',
      duration: '1 week'
    }
  ];

  filteredProjects: Project[] = [];
  categories: string[] = ['All', 'WordPress', 'Frontend', 'E-Commerce', 'Web Application', 'CMS'];
  activeCategory: string = 'All';
  showAll: boolean = false;

  constructor(private router: Router) {}
  
  // Modal state
  selectedProject: Project | null = null;
  showModal: boolean = false;

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

  // viewCaseStudy(project: Project): void {
  //   this.selectedProject = project;
  //   this.showModal = true;
  //   // Prevent body scroll when modal is open
  //   document.body.style.overflow = 'hidden';
  // }

  

viewCaseStudy(project: Project): void {
  console.log('Navigating to case study modal with ID:', project.id);
  this.router.navigate(['/case-study-modal', project.id])
    .then(success => {
      console.log('Navigation successful:', success);
    })
    .catch(error => {
      console.log('Navigation failed:', error);
    });
}

  closeCaseStudy(): void {
    this.showModal = false;
    this.selectedProject = null;
    // Restore body scroll
    document.body.style.overflow = 'auto';
  }
}