document.addEventListener("DOMContentLoaded", function () {
    const existingHeader = document.getElementById('custom-header');
    if (existingHeader) {
        existingHeader.remove();
    }

    // Create a new header div
    const header = document.createElement('div');
    header.id = 'custom-header';
    header.style.position = 'fixed'; // Always visible at the top
    header.style.top = '0';
    header.style.left = '0';
    header.style.right = '0';
    header.style.width = '100vw'; // Full width of the viewport
    header.style.zIndex = '9999';
    header.style.display = 'flex';
    header.style.alignItems = 'center';
    header.style.justifyContent = 'flex-start';
    header.style.background = 'linear-gradient(to left, #003f7f, #ff6f3c)';
    header.style.padding = '20px 40px';
    header.style.borderBottom = '3px solid #003f7f';
    header.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.1)';

    // Logo
    const logo = document.createElement('img');
    logo.src = 'https://welo5.github.io/style_profiles/ict_logo-removebg-preview.png';
    logo.alt = 'Bank Logo';
    logo.style.height = '60px';
    logo.style.marginRight = '20px';

    // Label
    const label = document.createElement('span');
    label.textContent = 'Expense Claim';
    label.style.fontSize = '24px';
    label.style.fontWeight = '700';
    label.style.color = '#ffffff';
    label.style.fontFamily = "'Inter', sans-serif";

    // Assemble
    header.appendChild(logo);
    header.appendChild(label);
    document.body.insertBefore(header, document.body.firstChild);

    // Optional: Add padding-top to body to avoid overlap with fixed header
    document.body.style.paddingTop = '90px'; // Height of header + some space
});
