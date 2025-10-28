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
      id: 2,
      title: 'Business Portfolio Website',
      category: 'WordPress',
      description: 'A modern business portfolio website with responsive design, smooth animations, and SEO optimization. Built with HTML5, CSS3, and JavaScript.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      date: 'Dec 2023',
      duration: '2 weeks'
    },
    {
      id: 6,
      title: 'Squarespace Business Site',
      category: 'SEO',
      description: 'Custom Squarespace website for a local business with custom CSS modifications and integrated booking system.',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500&h=300&fit=crop',
      technologies: ['Squarespace', 'Custom CSS', 'JavaScript'],
      liveUrl: '#',
      featured: false,
      date: 'Aug 2023',
      duration: '1 week'
    }
  ];

  filteredProjects: Project[] = [];
  categories: string[] = ['All', 'WordPress', 'SEO', 'CMS'];
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

  

viewCaseStudy(project: Project): void {
  console.log('Navigating to case study modal with ID:', project.id);
  this.router.navigate(['/work', project.id])
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