/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/

function localizedText(value, lang) {
    if (value == null) return '';
    if (typeof value === 'string') return value;
    return value[lang] || value.ja || value.en || '';
}

async function loadProjects() {
    const list = document.getElementById('projects-list');
    if (!list) return;

    try {
        const response = await fetch('data/projects.json');
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const projects = await response.json();
        const lang = window.PortfolioI18n ? window.PortfolioI18n.getLang() : 'ja';

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

            const description = localizedText(project.description, lang);
            item.append(icon, link, document.createTextNode(` — ${description}`));
            return item;
        }));
    } catch (error) {
        console.error('Failed to load projects:', error);
        const item = document.createElement('li');
        item.className = 'mb-2';
        const lang = window.PortfolioI18n ? window.PortfolioI18n.getLang() : 'ja';
        item.textContent = window.PortfolioI18n
            ? window.PortfolioI18n.t('projects.loadError', lang)
            : 'プロジェクト一覧の読み込みに失敗しました。';
        list.replaceChildren(item);
    }
}

async function loadCves() {
    const list = document.getElementById('cve-list');
    if (!list) return;

    try {
        const response = await fetch('data/cves.json');
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const cves = await response.json();
        const lang = window.PortfolioI18n ? window.PortfolioI18n.getLang() : 'ja';

        list.replaceChildren(...cves.map(cve => {
            const article = document.createElement('article');
            article.className = 'cve-card mb-4';

            const header = document.createElement('div');
            header.className = 'cve-card-header';

            const id = document.createElement('h3');
            id.className = 'cve-id';
            id.textContent = cve.id;

            const meta = document.createElement('div');
            meta.className = 'cve-meta';

            const severity = document.createElement('span');
            severity.className = `cve-severity cve-severity-${(cve.severity || '').toLowerCase()}`;
            severity.textContent = `${cve.severity} ${cve.cvss}`;

            const year = document.createElement('span');
            year.className = 'cve-year';
            year.textContent = cve.year;

            meta.append(severity, year);
            header.append(id, meta);

            const title = document.createElement('p');
            title.className = 'cve-title';
            title.textContent = localizedText(cve.title, lang);

            const product = document.createElement('p');
            product.className = 'cve-product';
            product.textContent = `${cve.product} · ${localizedText(cve.role, lang)}`;

            const description = document.createElement('p');
            description.className = 'cve-description';
            description.textContent = localizedText(cve.description, lang);

            const links = document.createElement('div');
            links.className = 'cve-links';
            for (const item of cve.links || []) {
                const link = document.createElement('a');
                link.href = item.url;
                link.className = 'btn btn-sm btn-outline-primary me-2';
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                link.textContent = item.label;
                links.append(link);
            }

            article.append(header, title, product, description, links);
            return article;
        }));
    } catch (error) {
        console.error('Failed to load CVEs:', error);
        const item = document.createElement('p');
        const lang = window.PortfolioI18n ? window.PortfolioI18n.getLang() : 'ja';
        item.textContent = window.PortfolioI18n
            ? window.PortfolioI18n.t('security.loadError', lang)
            : 'CVE 一覧の読み込みに失敗しました。';
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
    loadCves();

    window.addEventListener('langchange', () => {
        loadProjects();
        loadCves();
    });

});
