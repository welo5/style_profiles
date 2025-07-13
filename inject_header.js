document.addEventListener("DOMContentLoaded", function () {
    // Check if the SmartForm is present
    const formContainer = document.querySelector('.form');
    if (!formContainer) return;

    // Create the header container
    const header = document.createElement('div');
    header.id = 'custom-header';
    header.style.display = 'flex';
    header.style.alignItems = 'center';
    header.style.backgroundColor = '#f5f8fc';
    header.style.padding = '12px 24px';
    header.style.borderBottom = '2px solid #003f7f';

    // Add the logo image
    const logo = document.createElement('img');
    logo.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeGPyZex-V1Os0bQH2W6Ku8Sh0_FM-78madw&s'; // 🔁 Change to your logo URL
    logo.alt = 'Bank Logo';
    logo.style.height = '40px'; // adjust height as needed
    logo.style.marginRight = '16px';

    // Optional: Add a text label next to the logo
    const label = document.createElement('span');
    label.textContent = 'Your Bank Portal';
    label.style.fontSize = '18px';
    label.style.color = '#003f7f';
    label.style.fontWeight = '600';
    label.style.fontFamily = 'Inter, sans-serif';

    // Append logo and label to the header
    header.appendChild(logo);
    header.appendChild(label);

    // Insert the header before the form container
    formContainer.parentNode.insertBefore(header, formContainer);
});
