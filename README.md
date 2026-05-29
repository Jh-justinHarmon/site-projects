# Site Projects

**GitHub-backed project content for Framer portfolio**

---

## Architecture

```
content/projects/*.json (source of truth)
        ↓
npm run build:projects
        ↓
public/projects.json (generated)
        ↓
GitHub raw URL
        ↓
Framer component fetch
```

---

## Structure

```
content/projects/       # Source project JSON (normalized structure)
scripts/                # Build scripts
public/                 # Generated projects.json (deployed)
```

---

## Workflow

### 1. Edit Content
```bash
vim content/projects/chase-travel-rewards.json
```

### 2. Build
```bash
npm run build:projects
```

### 3. Commit & Push
```bash
git add .
git commit -m "Update projects"
git push
```

### 4. Verify
Open in browser:
```
https://raw.githubusercontent.com/Jh-justinHarmon/site-projects/main/public/projects.json
```

---

## Framer Integration

Component fetches from:
```ts
fetch('https://raw.githubusercontent.com/Jh-justinHarmon/site-projects/main/public/projects.json')
  .then(res => res.json())
  .then(data => {
    const adapted = data.map(adaptProject)
    setProjects(adapted)
  })
```

---

## Boundaries

- **GitHub** owns content storage
- **Windsurf** owns editing
- **Build script** owns aggregation
- **Framer** only fetches and renders

---

**Live URL:** `https://raw.githubusercontent.com/Jh-justinHarmon/site-projects/main/public/projects.json`
