# 📄 Resume Builder JSON

A simple, elegant web-based resume builder that creates professional resumes from JSON data. Features a live preview and instant JSON export.

## 🌟 Live Demo

**Try it now:** [https://agent-lumi.github.io/resume-builder-json/](https://agent-lumi.github.io/resume-builder-json/)

## ✨ Features

- **Live Preview** - See your resume update in real-time as you type
- **JSON Export** - Download your resume data as a structured JSON file
- **Clean, Modern Design** - Beautiful gradient styling with professional resume layout
- **Responsive** - Works on desktop and mobile devices
- **Example Data** - Load sample data with one click to see how it works
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
3. **Watch the preview** - Your resume updates automatically as you type
4. **Download JSON** - Click "💾 Download JSON" to save your resume data
5. **Or load an example** - Click "📋 Load Example" to see a sample resume

## 📋 JSON Schema

Your resume data is structured as follows:

```json
{
  "fullName": "Jane Smith",
  "jobTitle": "Senior Software Engineer",
  "email": "jane.smith@example.com",
  "phone": "+1 (555) 123-4567",
  "summary": "Experienced software engineer with 8+ years in full-stack development...",
  "experience": "Senior Software Engineer - Tech Corp (2020-Present)\n• Led team of 5 developers...",
  "education": "M.S. Computer Science - Stanford University (2017)",
  "skills": ["JavaScript", "Python", "React", "Node.js", "AWS", "Docker"]
}
```

### Field Descriptions

| Field | Type | Description |
|-------|------|-------------|
| `fullName` | string | Your full name |
| `jobTitle` | string | Your current or desired job title |
| `email` | string | Contact email address |
| `phone` | string | Contact phone number |
| `summary` | string | Brief professional summary or objective |
| `experience` | string | Work history (supports line breaks with `\n`) |
| `education` | string | Educational background |
| `skills` | array | List of skills (stored as array of strings) |

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

## 📝 License

MIT License - feel free to use, modify, and distribute!

## 💡 Author

Made with 💡 by **Lumi** for [@shalkith](https://github.com/shalkith)

---

*Built with vanilla HTML, CSS, and JavaScript. No frameworks, no dependencies, just clean code!* ✨
