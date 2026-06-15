# 📄 Resume Builder JSON

A simple, elegant web-based resume builder that creates professional resumes from JSON data. Features a live preview, PDF export, and beautiful templates.

## 🌟 Live Demo

**Try it now:** [https://agent-lumi.github.io/resume-builder-json/](https://agent-lumi.github.io/resume-builder-json/)

## ✨ Features

- **Live Preview** - See your resume update in real-time as you type
- **PDF Export** - Download your resume as a professional PDF document
- **JSON Export/Import** - Save and load your resume data as structured JSON
- **Multiple Templates** - Choose from Professional, Modern, Minimal, or Creative styles
- **Custom Accent Colors** - Personalize your resume with your preferred color scheme
- **Print Support** - Print or save as PDF with Ctrl+P
- **Dark Mode** - Toggle between light and dark themes
- **Section Toggles** - Show/hide sections like Summary, Experience, Education, Skills
- **Keyboard Shortcuts** - Quick actions with Ctrl+S (save), Ctrl+P (print), Ctrl+E (export PDF)
- **PWA Support** - Install as a standalone app with offline support
- **Auto-Save** - Your data is automatically saved to localStorage
- **Responsive** - Works on desktop and mobile devices
- **No Backend Required** - Pure HTML/CSS/JavaScript, runs entirely in your browser

## 🚀 How to Use

1. **Open the builder** - Visit the [live demo](https://agent-lumi.github.io/resume-builder-json/) or open `index.html` locally
2. **Fill in your information** - Enter your details in the form fields:
   - Full Name
   - Job Title
   - Email & Phone
   - Professional Summary
   - Work Experience
   - Education
   - Skills (comma-separated)
3. **Choose a template** - Select from Professional, Modern, Minimal, or Creative
4. **Customize the color** - Pick your preferred accent color
5. **Toggle sections** - Show or hide specific resume sections
6. **Watch the preview** - Your resume updates automatically as you type
7. **Export** - Download as PDF or JSON

## 📤 Export Options

### Export as PDF
- Click the **📄 Export PDF** button
- Uses html2pdf.js for high-quality PDF generation
- A4 format with automatic page breaks

### Print
- Click the **🖨️ Print** button or press `Ctrl+P` (or `Cmd+P` on Mac)
- Opens a print-friendly version in a new window
- Use "Save as PDF" from your browser's print dialog

### Save as JSON
- Click the **💾 Download JSON** button or press `Ctrl+S`
- Stores all your resume data including template and color preferences
- Can be imported later to restore your work

### Import JSON
- Click the **📁 Import JSON** button
- Select a previously saved JSON file
- Restores all your resume data, settings, and preferences

## 📋 JSON Schema

Your resume data is structured as follows:

```json
{
  "fullName": "Jane Smith",
  "jobTitle": "Senior Software Engineer",
  "email": "jane.smith@example.com",
  "phone": "+1 (555) 123-4567",
  "summary": "Experienced software engineer with 8+ years...",
  "experience": "Senior Software Engineer - Tech Corp (2020-Present)...",
  "education": "M.S. Computer Science - Stanford University (2017)",
  "skills": ["JavaScript", "Python", "React", "Node.js"],
  "template": "professional",
  "accentColor": "#11998e",
  "showSummary": true,
  "showExperience": true,
  "showEducation": true,
  "showSkills": true
}
```

### Field Descriptions

| Field | Type | Description |
|-------|------|-------------|
| `fullName` | string | Your full name |
| `jobTitle` | string | Your current or desired job title |
| `email` | string | Contact email address |
| `phone` | string | Contact phone number |
| `summary` | string | Brief professional summary |
| `experience` | string | Work history (supports line breaks) |
| `education` | string | Educational background |
| `skills` | array | List of skills as strings |
| `template` | string | Template: professional, modern, minimal, creative |
| `accentColor` | string | Hex color code for accents |
| `showSummary` | boolean | Whether to display the summary section |
| `showExperience` | boolean | Whether to display experience section |
| `showEducation` | boolean | Whether to display education section |
| `showSkills` | boolean | Whether to display skills section |

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+S` (or `Cmd+S`) | Download JSON |
| `Ctrl+P` (or `Cmd+P`) | Print resume |
| `Ctrl+E` (or `Cmd+E`) | Export as PDF |

## 🎨 Templates

- **Professional** - Classic, clean layout with elegant accents
- **Modern** - Contemporary design with bold section headers
- **Minimal** - Simple, distraction-free format
- **Creative** - Colorful header with modern styling

## 🛠️ Local Development

To run locally:

```bash
# Clone the repository
git clone https://github.com/Agent-Lumi/resume-builder-json.git

# Navigate to the directory
cd resume-builder-json

# Open in your browser
open index.html
```

Or serve with a local server:

```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

## 📱 PWA Installation

You can install this app on your device:

- **Desktop Chrome**: Click the install icon in the address bar
- **Mobile Chrome**: Tap "Add to Home Screen" from the menu
- **Safari (iOS)**: Tap Share → "Add to Home Screen"

## 📝 License

MIT License - feel free to use, modify, and distribute!

## 💡 Author

Made with 💡 by **Lumi** for [@shalkith](https://github.com/shalkith)

---

*Built with vanilla HTML, CSS, and JavaScript. Uses html2pdf.js for PDF export.* ✨
