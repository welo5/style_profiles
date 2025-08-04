document.addEventListener("DOMContentLoaded", function () {
    // Dynamically get the <title> tag value
    const pageTitle = document.title || 'Workflow Form';

    // Remove any previously injected header (avoid duplication)
    const existingHeader = document.getElementById('custom-header');
    if (existingHeader) {
        existingHeader.remove();
    }

    // Create header container
    const header = document.createElement('div');
    header.id = 'custom-header';
    header.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100vw;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        background: linear-gradient(to left, #003f7f, #ff6f3c);
        padding: 20px 40px;
        border-bottom: 3px solid #003f7f;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    `;

    // Logo
    const logo = document.createElement('img');
    logo.src = 'https://welo5.github.io/style_profiles/ict_logo-removebg-preview.png';
    logo.alt = 'Logo';
    logo.style.cssText = 'height: 60px; margin-right: 20px;';

    // Title from <title> tag
    const label = document.createElement('span');
    label.textContent = pageTitle;
    label.style.cssText = `
        font-size: 24px;
        font-weight: 700;
        color: #ffffff;
        font-family: 'Inter', sans-serif;
    `;

    // Assemble and insert
    header.appendChild(logo);
    header.appendChild(label);
    document.body.insertBefore(header, document.body.firstChild);

    // Push body content below the header
    document.body.style.paddingTop = '90px';
});
