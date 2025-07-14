document.addEventListener("DOMContentLoaded", function () {
    const existingHeader = document.getElementById('custom-header');
    if (existingHeader) {
        existingHeader.remove();
    }

    // Create a new header div
    const header = document.createElement('div');
    header.id = 'custom-header';
    header.style.display = 'flex';
    header.style.alignItems = 'center';
    header.style.justifyContent = 'flex-start';
    header.style.background = 'linear-gradient(to left, #003f7f, #ff6f3c)';
    header.style.padding = '12px 24px';
    header.style.borderBottom = '2px solid #003f7f';
    header.style.position = 'sticky'; // or 'fixed' if you want it to stay at the top during scroll
    header.style.top = '0';
    header.style.zIndex = '9999';
    header.style.width = '100%';

    // Add logo image
    const logo = document.createElement('img');
    logo.src = 'https://welo5.github.io/style_profiles/ict_logo-removebg-preview.png';
    logo.alt = 'Bank Logo';
    logo.style.height = '50px';
    logo.style.marginRight = '16px';

    // Add label
    const label = document.createElement('span');
    label.textContent = 'Expense Claim Form';
    label.style.fontSize = '20px';
    label.style.fontWeight = '600';
    label.style.color = '#ffffff';
    label.style.fontFamily = "'Inter', sans-serif";

    header.appendChild(logo);
    header.appendChild(label);

    // Insert header as first element inside <body>
    document.body.insertBefore(header, document.body.firstChild);
});
