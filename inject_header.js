document.addEventListener("DOMContentLoaded", function () {
    const path = window.location.pathname.toLowerCase();
    let pageTitle = 'Expense Portal';

    if (path.includes('report')) {
        pageTitle = 'Expense Claim Report';
    } else if (path.includes('form')) {
        pageTitle = 'Expense Claim Form';
    }

    // ... (Create header as before)

    const existingHeader = document.getElementById('custom-header');
    if (existingHeader) {
        existingHeader.remove();
    }

    const header = document.createElement('div');
    header.id = 'custom-header';
    header.style.position = 'fixed';
    header.style.top = '0';
    header.style.left = '0';
    header.style.right = '0';
    header.style.width = '100vw';
    header.style.zIndex = '9999';
    header.style.display = 'flex';
    header.style.alignItems = 'center';
    header.style.justifyContent = 'flex-start';
    header.style.background = 'linear-gradient(to left, #003f7f, #ff6f3c)';
    header.style.padding = '20px 40px';
    header.style.borderBottom = '3px solid #003f7f';
    header.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.1)';

    const logo = document.createElement('img');
    logo.src = 'https://welo5.github.io/style_profiles/ict_logo-removebg-preview.png';
    logo.alt = 'Logo';
    logo.style.height = '60px';
    logo.style.marginRight = '20px';

    const label = document.createElement('span');
    label.textContent = pageTitle;
    label.style.fontSize = '24px';
    label.style.fontWeight = '700';
    label.style.color = '#ffffff';
    label.style.fontFamily = "'Inter', sans-serif";

    header.appendChild(logo);
    header.appendChild(label);
    document.body.insertBefore(header, document.body.firstChild);

    document.body.style.paddingTop = '90px';
});
