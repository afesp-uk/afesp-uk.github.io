# Advancing the Frontier of Earth System Prediction

<div align="center">

**Research site for the AFESP programme**

</div>

## What is this site for?

This website serves a the scientific workspace for AFESP and contains:

- Research highlights and scientific achievements
- Work package activities and project milestones
- Publications, preprints, software, datasets, and other research outputs
- Researcher profiles and collaborations
- Seminars, workshops, and community events
- Emerging methods, tools, and scientific developments
- Progress towards the programme’s long-term scientific objectives

### Table Of Contents

<!--ts-->

- [Advancing the Frontier of Earth System Prediction](#advancing-the-frontier-of-earth-system-prediction)
  - [What is this site for?](#what-is-this-site-for)
    - [Table Of Contents](#table-of-contents)
  - [For members: How to add content?](#for-members-how-to-add-content)
    - [Adding a short bio](#adding-a-short-bio)
    - [Adding a publication](#adding-a-publication)
    - [Adding news](#adding-news)
    - [Writing a blog entry](#writing-a-blog-entry)
  - [How to modify a text file on GitHub?](#how-to-modify-a-text-file-on-github)
    - [Editing files and publishing changes](#editing-files-and-publishing-changes)
      - [Option 1: GitHub web interface (recommended for simple edits)](#option-1-github-web-interface-recommended-for-simple-edits)
      - [Option 2: Local Git workflow (recommended for regular contributors and comprehensive edits)](#option-2-local-git-workflow-recommended-for-regular-contributors-and-comprehensive-edits)
  - [Using AI Agents for modifications](#using-ai-agents-for-modifications)
    - [Codex](#codex)
    - [Claude](#claude)
    - [Copilot And Other Agents](#copilot-and-other-agents)

<!--te-->

## For members: How to add content?

The AFESP website uses the **al-folio** Jekyll template. Website content is managed through Markdown files in this GitHub repository. When content is added or updated, GitHub Pages automatically rebuilds the website, making it easy for members to maintain and share the latest programme updates.

### Adding a short bio

1. Add a mark down file in **\_pages/bios/**
2. Add your profile picture in _assets/img_
3. Add the profile in **\_pages/people.md** by simply copy and pasting one of the existing profiles and replace with your information (don't forget to replace the link to the picture and about_name.md with the correct references to your picture and short bio.

### Adding a publication

1. Add the bibtex-formatted reference to **\_bibliography/papers.bib** (you can copy and paste from Google Scholar)
2. Be sure to include a link and DOI
3. Add an animation or representative figure from the publication in **assets/img/publication_preview/** and link to it by using the *preview=img_name.jpg* argument in the bibtex citation.


### Adding news

1. Add a mark down file with your announcement in *_\_news/_ (you can use _announcement_short.md_ as a template)
2. If there is a longer announcement, use the template _announcement_long.md_ where you can link to a more detailed description.

### Writing a blog entry

_To be completed._

## How to modify a text file on GitHub?

### Editing files and publishing changes

There are two ways to contribute to the website.

#### Option 1: GitHub web interface (recommended for simple edits)

Edit files directly in your web browser without installing any software.

1. Navigate to the file you want to edit.
2. Click the **Edit** (✏️) button.
3. Make your changes.
4. Commit the changes.
5. GitHub Pages will automatically rebuild and publish the updated website.

Useful GitHub documentation:

- https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files
- https://docs.github.com/en/get-started/start-your-journey/hello-world

#### Option 2: Local Git workflow (recommended for regular contributors and comprehensive edits)

Clone the repository, edit files locally using your preferred editor, commit your changes, and push them to your branch.

Typical workflow:

```bash
git checkout -b my-feature         # create a new branch (or switch to an existing one)
# edit files
git add .
git commit -m "Describe your changes"
git push -u origin my-feature
```

GitHub Pages will automatically rebuild and publish the website after changes are merged.

Useful GitHub documentation:

- https://docs.github.com/en/get-started/using-git
- https://docs.github.com/en/get-started/using-git/pushing-commits-to-a-remote-repository
- https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests

## Using AI Agents for modifications

Agents should read [AGENTS.md](AGENTS.md) first, then use [docs/BOUNDARIES.md](docs/BOUNDARIES.md) to route changes to the starter or the owning plugin repo.

For existing customized forks, the recommended migration path is to ask an agent to use the [al-folio v1 migration skill](.agents/skills/al-folio-v1-migration/SKILL.md). The skill walks through creating a disposable migration branch, bringing site-owned content/config/data onto the v1 starter contract, running `al_folio_upgrade`, auditing local overrides, and validating the build. This is preferred over a manual file-by-file upgrade because v1 runtime ownership moved into plugins and local overrides need explicit drift tracking.

The canonical skills live in [.agents/skills/](.agents/skills/). They are also exposed through `.codex/skills/` and `.claude/skills/` symlinks for agents that discover skills from tool-specific directories.

### Codex

Codex can use the repo-local skills:

- [al-folio bootstrap](.agents/skills/al-folio-bootstrap/SKILL.md): create and configure a new v1 site.
- [al-folio v1 migration](.agents/skills/al-folio-v1-migration/SKILL.md): migrate customized forks and audit local overrides.

Useful first prompts:

- "Use the al-folio bootstrap skill to configure my new site."
- "Use the al-folio v1 migration skill to migrate this customized fork and run the override audit."

### Claude

Claude should start from [CLAUDE.md](CLAUDE.md), which imports [AGENTS.md](AGENTS.md). For setup or migration tasks, use the matching skill from `.claude/skills/`, which points to the canonical `.agents/skills/` directory.

### Copilot And Other Agents

Copilot should follow [.github/copilot-instructions.md](.github/copilot-instructions.md) and the specialized agents in [.github/agents/](.github/agents/). Other agents should follow the same rule: keep starter work in this repo, route runtime behavior to the owning `al-org-dev` plugin, and run `bundle exec al-folio upgrade overrides audit` whenever local overrides are added or retained.
