document.addEventListener("DOMContentLoaded", function () {
    const formContainer = document.querySelector('.form');
    if (!formContainer) return;


    // Create a new header div
    const header = document.createElement('div');
    header.id = 'custom-header';
    header.style.display = 'flex';
    header.style.alignItems = 'center';
    header.style.justifyContent = 'flex-start';
    header.style.background = 'linear-gradient(to left, #003f7f, #ff6f3c)'; // 🎨 Gradient here
    header.style.padding = '12px 24px';
    header.style.borderBottom = '2px solid #003f7f';
    header.style.marginBottom = '8px';

    // Add logo image
    const logo = document.createElement('img');
    logo.src = 'https://welo5.github.io/style_profiles/ict_logo-removebg-preview.png'; // ✅ Replace if needed
    logo.alt = 'Bank Logo';
    logo.style.height = '100px';
    logo.style.marginRight = '16px';

    // Add label next to logo
    const label = document.createElement('span');
    label.textContent = 'Expense Claim Form';
    label.style.fontSize = '18px';
    label.style.fontWeight = '600';
    label.style.color = '#ffffff';
    label.style.fontFamily = "'Inter', sans-serif";

    // Append logo and label to header
    header.appendChild(logo);
    header.appendChild(label);

    // Insert the header before the form container
    formContainer.parentNode.insertBefore(header, formContainer);
});
