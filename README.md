# Angielski

An English learning app for Polish speakers, covering levels A1 to C1: vocabulary, grammar, sentences, reading, and level exams.

Built with plain HTML, CSS, and JavaScript. No frameworks, no dependencies, and no build step needed to run it.

## Table of contents

- [Features](#features)
- [Getting started](#getting-started)
- [Project structure](#project-structure)
- [Development](#development)
- [Building and publishing](#building-and-publishing)
- [Adding vocabulary](#adding-vocabulary)

## Features

- **Daily review**: a mixed session of the items that are due today.
- **Vocabulary**: flashcards, quiz, typing, listening, gap fill, hardest words, your own word list, and a full word list.
- **Sentences**: real-life situations, translation, free answers, dictation, and shadowing (repeating out loud).
- **Grammar**: grammar topics with rules explained in Polish, irregular verbs, word formation, phrasal verbs, and prepositions.
- **Reading**: texts and dialogues with comprehension questions and text-to-speech.
- **Exams**: a level exam for each level.
- **Practice with Claude**: conversation scenarios and writing practice with feedback (only in the version published on claude.ai).
- Light and dark themes, a mobile layout, and an interface in Polish or English.

## Getting started

### Prerequisites

- A modern web browser.
- [Node.js](https://nodejs.org/) if you want to run the checks or build the single-file version. Nothing needs to be installed with npm.

### Running locally

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd English
   ```

2. Open `index.html` in your browser (double-click it or drag it into a browser window).

After you change a file, refresh the page (F5).

When the app runs locally, your progress is saved in the browser's `localStorage`. Syncing between devices, checking answers with Claude, and reporting errors only work in the version published on claude.ai.

## Project structure

```text
.
├── index.html               # Page skeleton: header, toggles, bottom menu on mobile
├── css/
│   ├── reset.css            # Basic reset, the same one claude.ai wraps around a published page
│   └── styles.css           # Styles, light and dark themes, mobile layout (@media (max-width: 720px))
├── js/
│   ├── app.js               # All logic: reviews, practice modes, views, syncing
│   ├── i18n-en.js           # English versions of the UI strings (the key is the Polish text)
│   └── data/
│       ├── words.js         # Vocabulary
│       ├── grammar.js       # Grammar topics: rules in Polish and exercises
│       ├── sentences.js     # Situations and sentence translation
│       ├── irregular.js     # Irregular verbs
│       ├── word-formation.js  # Word formation
│       ├── phrasal.js       # Phrasal verbs and prepositions
│       ├── texts.js         # Reading and listening texts with questions
│       └── chat.js          # Conversation scenarios for Claude
└── tools/
    ├── check.js             # Automated checks
    └── build.js             # Bundles the app into one HTML file
```

The scripts load in a fixed order (set in `index.html`) and share global variables, so the data in `js/data/` is available to `app.js`.

## Development

Run the checks after every change:

```bash
npm run check
# or
node tools/check.js
```

The script runs the app in a simulated browser, renders every mode at every level, and validates the data. For example, it checks that each exercise has a `___` gap and that each word has a valid part of speech. In VS Code you can also run it from the **NPM Scripts** panel.

## Building and publishing

```bash
npm run build
# or
node tools/build.js
```

This creates `dist/angielski.html`, which is the whole app in a single file. You can:

- publish it as an artifact on claude.ai. The easiest way is to ask Claude: *"publish dist/angielski.html to my app link"*.
- open it straight from your disk.
- upload it to any static hosting.

## Adding vocabulary

Add a line to the right level in `js/data/words.js`. Each line has this format:

```text
english|polish|part of speech|example sentence
```

For example:

```text
wrench|klucz (narzędzie)|n|Pass me the wrench, please.
```

Parts of speech:

| Code   | Part of speech |
| ------ | -------------- |
| `n`    | noun           |
| `v`    | verb           |
| `adj`  | adjective      |
| `adv`  | adverb         |
| `prep` | preposition    |
| `conj` | conjunction    |
| `num`  | numeral        |
| `pron` | pronoun        |
| `phr`  | phrase         |

Words in the file are grouped by topic, and the quiz picks wrong answers from neighbouring lines. Put a new word next to similar words.

After you add words, run `npm run check` to validate the data.
