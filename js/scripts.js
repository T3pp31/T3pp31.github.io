/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/

async function loadProjects() {
    const list = document.getElementById('projects-list');
    if (!list) return;

    try {
        const response = await fetch('data/projects.json');
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const projects = await response.json();

        list.replaceChildren(...projects.map(project => {
            const item = document.createElement('li');
            item.className = 'mb-2';

            const icon = document.createElement('span');
            icon.className = 'fa-li';
            icon.innerHTML = '<i class="fas fa-link"></i>';

            const link = document.createElement('a');
            link.href = project.url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.textContent = project.name;

            item.append(icon, link, document.createTextNode(` — ${project.description}`));
            return item;
        }));
    } catch (error) {
        console.error('Failed to load projects:', error);
        const item = document.createElement('li');
        item.className = 'mb-2';
        item.textContent = 'プロジェクト一覧の読み込みに失敗しました。';
        list.replaceChildren(item);
    }
}

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Scroll reveal animation
    const sections = document.querySelectorAll('.resume-section');
    sections.forEach(sec => sec.classList.add('hidden-section'));

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 });

    sections.forEach(sec => observer.observe(sec));

    // Smooth scroll for nav links
    document.querySelectorAll('.js-scroll-trigger').forEach(link => {
        link.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    loadProjects();

});
