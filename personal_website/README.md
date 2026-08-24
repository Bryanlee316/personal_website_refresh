# Personal Portfolio Website

A modern, responsive portfolio website inspired by clean, minimalist design principles.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Animations**: Subtle scroll animations and transitions
- **Modern UI**: Clean, professional design with a focus on usability
- **Fast Loading**: Optimized performance with vanilla JavaScript
- **Accessible**: Semantic HTML and accessible navigation

## Sections

1. **Hero** - Introduction and call-to-action
2. **Services** - What you offer (4 service cards)
3. **Projects** - Featured work showcase
4. **Testimonials** - Client feedback and reviews
5. **Blog** - Latest articles and thoughts
6. **Contact** - Get in touch section
7. **Footer** - Social links and copyright

## Getting Started

1. Open `index.html` in your browser
2. Customize the content in `index.html`:
   - Replace "Your Name" with your actual name
   - Update the email address in the contact section
   - Add your social media links in the footer
   - Replace placeholder project content with your actual work

3. Customize colors in `styles.css`:
   - Primary color: `--primary-color`
   - Secondary color: `--secondary-color`
   - Background colors: `--dark-bg`, `--light-bg`

## Customization

### Adding Your Own Images

Replace the `.project-placeholder` divs in the HTML with actual images:

```html
<div class="project-image">
    <img src="path/to/your/image.jpg" alt="Project description">
</div>
```

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #0066FF;  /* Your brand color */
    --secondary-color: #00D4FF; /* Accent color */
}
```

### Adding More Projects

Copy a `.project-card` div and update the content.

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript
- No frameworks or dependencies required

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Free to use for personal and commercial projects.
