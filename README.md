# ##: built using Next.JS

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Table of contents

- 📖 [Installation](#installation)
- 📚 [Environment Variables](#environment-variables)
- 💻 [Application Routes](#application-routes)
- 📂 [Folder Structure](#folder-structure)
- 📦 [Dependencies](#dependencies)

## Installation

To install all the dependencies used in the project, simply run the command:

```
$ yarn
```

## Environment Variables

There is no need to create a .env file for this project.

## Application Routes:

| URL path | Description | Protected |
| :------: | :---------: | :-------: |
|    /     |  Gift page  |    ❌     |
|  /cake   |  Cake page  |    ❌     |

## Folder Structure

The project structure is as follows:

project-root/
│
├── public/
│
├── src/
│ ├── app/
│ │ ├── cake/  
│ │ │ └── page.tsx
│ │ ├── components/  
│ │ │ ├── BirthdayMessageModal/
│ │ │ │ └── BirthdayMessageModal.tsx
│ │ │ ├── Meteors/
│ │ │ │ └── Meteors.tsx
│ │ │ └── TypewriterEffect/
│ │ │ └── TypewriterEffect.tsx
│ │ ├── utils/
│ │ │ └── index.tsx
│ │ ├── views/
│ │ │ ├── cake/
│ │ │ │ ├── cake.module.css
│ │ │ │ └── index.tsx
│ │ │ ├── home/
│ │ │ └── index.tsx
│ │ ├── globals.css
│ │ ├── layout.tsx
│ │ └── page.tsx
│
├── context/
│ └── CostumeAudioContext.tsx
│
├── .eslintrc.json
├── .gitignore
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
├── tsconfig.json
└── yarn.lock

## Dependencies

|                           Packages                           |
| :----------------------------------------------------------: |
|           [tailwindcss](https://tailwindcss.com/)            |
|          [clsx](https://www.npmjs.com/package/clsx)          |
| [Framer Motion](https://www.npmjs.com/package/framer-motion) |
|         [Aceternity UI](https://ui.aceternity.com/)          |
