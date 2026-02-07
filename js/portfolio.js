function scrollToProject(projectId) {
    // Check if we're on mobile (viewport width <= 900px)
    const isMobile = window.innerWidth <= 900;
    
    // Special case for RUBus - scroll to very top (no height calculations)
    if (projectId === 'rubus-wrapper') {
        const startPosition = window.pageYOffset;
        const targetPosition = 0;
        const distance = targetPosition - startPosition;
        const duration = 300; // milliseconds
        
        let start = null;
        
        function animation(currentTime) {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }
        
        // Easing function for smooth animation
        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }
        
        requestAnimationFrame(animation);
        return;
    }
    
    // Calculate mobile header wrapper height dynamically (only for non-RUBus projects)
    let mobileHeaderHeight = 0;
    if (isMobile) {
        const mobileHeader = document.querySelector('.mobile-header-wrapper');
        if (mobileHeader) {
            mobileHeaderHeight = mobileHeader.offsetHeight;
        }
    }
    
    // Normal case for other projects
    const element = document.getElementById(projectId);
    if (element) {
        const startPosition = window.pageYOffset;
        
        let targetPosition;
        if (isMobile) {
            // On mobile, position the element just below the fixed header wrapper
            // Get the element's position relative to the viewport
            const elementTop = element.getBoundingClientRect().top;
            // Calculate scroll position: current scroll + element's viewport position - header height
            // Add a small buffer (0.5rem = 8px) for spacing
            const buffer = 8;
            targetPosition = startPosition + elementTop - mobileHeaderHeight - buffer;
        } else {
            // Desktop: center the element in the viewport
            targetPosition = element.getBoundingClientRect().top + window.pageYOffset - (window.innerHeight / 2) + (element.offsetHeight / 2);
        }
        
        const distance = targetPosition - startPosition;
        const duration = 300; // milliseconds (shorter than default smooth scroll)
        
        let start = null;
        
        function animation(currentTime) {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }
        
        // Easing function for smooth animation
        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }
        
        requestAnimationFrame(animation);
    }
}