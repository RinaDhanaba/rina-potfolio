import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'rina-portfolio';
  hasProfileImage = false;

  isSidebarOpen = true;
  isNavOpen = false;
  isMobile = false;
  private resizeListener: any;

  ngOnInit() {
    this.checkScreenSize();
    this.setupResizeListener();
  }

  ngOnDestroy() {
    if (this.resizeListener) {
      window.removeEventListener('resize', this.resizeListener);
    }
    this.removeBodyClass();
  }

  private setupResizeListener() {
    this.resizeListener = this.onResize.bind(this);
    window.addEventListener('resize', this.resizeListener, { passive: true });
  }

  private checkScreenSize() {
    const wasMobile = this.isMobile;
    this.isMobile = window.innerWidth <= 768;
    
    if (this.isMobile) {
      // Mobile behavior - sidebar closed by default
      this.isSidebarOpen = false;
      if (!wasMobile) {
        this.isNavOpen = false;
      }
    } else {
      // Desktop behavior - keep current sidebar state, close nav
      this.isNavOpen = false;
      // Don't force sidebar open on desktop - respect user's choice
    }
    this.updateBodyClass();
  }

  // Public method to check if overlay should be active
  shouldShowOverlay(): boolean {
    return (this.isSidebarOpen || this.isNavOpen) && this.isMobile;
  }

  // Public method to check if sidebar should be aria-hidden
  shouldSidebarBeHidden(): boolean {
    return !this.isSidebarOpen && this.isMobile;
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
    
    // Close nav when opening sidebar on mobile
    if (this.isSidebarOpen && this.isMobile) {
      this.isNavOpen = false;
    }
    
    this.updateBodyClass();
  }

  toggleNavMenu(): void {
    this.isNavOpen = !this.isNavOpen;
    
    // Close sidebar when opening nav on mobile
    if (this.isNavOpen && this.isMobile) {
      this.isSidebarOpen = false;
    }
    
    this.updateBodyClass();
  }

  // Close both sidebar and nav
  closeAll(): void {
    if (this.isMobile) {
      this.isSidebarOpen = false;
      this.isNavOpen = false;
      this.updateBodyClass();
    }
  }

  // Close sidebar when navigating on mobile
  onNavigate(): void {
    if (this.isMobile) {
      this.isSidebarOpen = false;
      this.isNavOpen = false;
      this.updateBodyClass();
    }
  }

  private updateBodyClass(): void {
    if (this.isMobile && (this.isSidebarOpen || this.isNavOpen)) {
      document.body.classList.add('menu-open');
    } else {
      this.removeBodyClass();
    }
  }

  private removeBodyClass(): void {
    document.body.classList.remove('menu-open');
  }

  // Close sidebar when clicking outside on mobile
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.querySelector('.sidebar-toggle');
    const nav = document.querySelector('.main-nav');
    const hamburger = document.querySelector('.hamburger-menu');
    
    if (this.isMobile) {
      // Mobile behavior - close when clicking outside
      
      // Close sidebar if clicking outside
      if (this.isSidebarOpen && sidebar && !sidebar.contains(target) && 
          toggleButton && !toggleButton.contains(target)) {
        this.isSidebarOpen = false;
        this.updateBodyClass();
      }
      
      // Close nav menu if clicking outside
      if (this.isNavOpen && nav && !nav.contains(target) && 
          hamburger && !hamburger.contains(target)) {
        this.isNavOpen = false;
        this.updateBodyClass();
      }
    } else {
      // Desktop behavior - close sidebar when clicking outside (optional)
      // You can enable this if you want the same behavior on desktop
      /*
      if (this.isSidebarOpen && sidebar && !sidebar.contains(target) && 
          toggleButton && !toggleButton.contains(target)) {
        this.isSidebarOpen = false;
        this.updateBodyClass();
      }
      */
    }
  }

  // Close on escape key press
  @HostListener('document:keydown.escape')
  onEscapePress(): void {
    if (this.isMobile) {
      this.isSidebarOpen = false;
      this.isNavOpen = false;
      this.updateBodyClass();
    }
    // Optional: Add desktop escape key behavior
    /*
    else {
      this.isSidebarOpen = false;
      this.updateBodyClass();
    }
    */
  }

  // Handle window resize with debounce
  private resizeTimeout: any;
  onResize(event: Event): void {
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(() => {
      this.checkScreenSize();
    }, 150);
  }
}