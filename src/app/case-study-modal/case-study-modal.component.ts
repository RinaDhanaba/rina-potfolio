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
      id: 2,
      title: 'Business Portfolio Website',
      category: 'Frontend',
      description: 'A modern business portfolio website with responsive design and SEO optimization.',
      fullDescription: 'A sleek portfolio website for a creative agency showcasing their work and services. The design focuses on modern aesthetics, smooth animations, and optimal user experience across all devices.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'SEO'],
      liveUrl: '#',
      githubUrl: '#',
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
      id: 6,
      title: 'Squarespace Business Site',
      category: 'CMS',
      description: 'Custom Squarespace website for a local business with custom CSS modifications.',
      fullDescription: 'Professional business website built on Squarespace platform with extensive custom CSS modifications to achieve unique design requirements while maintaining platform stability.',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=500&fit=crop',
      technologies: ['Squarespace', 'Custom CSS', 'JavaScript', 'SEO Optimization'],
      liveUrl: '#',
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