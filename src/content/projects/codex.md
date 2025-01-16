---
title: "Codex - In-Browser Bioinformatics Tool"
description: "An open-source platform that enables users to explore and understand their genetic data through SNPedia integration."
publishDate: "2024-01-15"
isFeatured: true
seo:
  image:
    src: "/projects/codex/codex-1.png"
    alt: "Codex interface displaying genetic analysis"
---

![Codex interface displaying genetic analysis](/projects/codex/codex-1.png)

**Project Overview:**
Codex is an intuitive interface for analyzing genetic data by connecting with SNPedia's wealth of genetic research. By processing raw DNA data files in the browser, users can explore their genetic variants while maintaining complete privacy of their sensitive genetic information.

## Objectives

1. Create a privacy-focused platform for analyzing personal genetic data
2. Build efficient integration with SNPedia's research database
3. Develop intuitive interface for exploring genetic information
4. Ensure data security through client-side processing

## Technical Challenges & Solutions

1. **Privacy-First Architecture:**

- Implemented client-side processing of raw DNA files
- Built using IndexedDB for local-only data storage
- Eliminated need for server-side storage of genetic data
- Designed with privacy and data security as core principles

2. **SNPedia Integration:**

- Developed efficient API integration with SNPedia's database
- Created robust error handling for API rate limits
- Implemented caching system for faster repeated lookups
- Built filtering system for relevant genetic markers

## Key Features

1. **Data Analysis:**

- Raw DNA file parsing and validation
- SNP (Single Nucleotide Polymorphism) identification
- Integration with SNPedia's research database
- Categorized display of genetic variants

2. **User Experience:**

- Clean, intuitive interface
- Real-time analysis updates
- Smart filtering and search
- Multiple export formats (PDF, CSV, JSON, XML)

## Technology Stack

- Frontend: Next.js, TailwindCSS
- Data Processing: dna2json
- Storage: IndexedDB
- External API: SNPedia MediaWiki API
- Export: PDF-lib, file-saver

## Outcome

Codex demonstrates how modern web technologies can be used to create privacy-focused tools for personal genetic analysis. The project makes genetic information more accessible while ensuring user data remains under their control. The platform successfully processes genetic data locally, integrates with SNPedia's research database, and provides users with detailed insights into their genetic variants.

## Project Status

Active development with regular updates based on user feedback and SNPedia's evolving database. The project remains open source, welcoming contributions from the developer community.

The project is open source and available on [GitHub](https://github.com/brandonsaldan/codex), with a live demo at [codex-brandonsaldan.vercel.app](https://codex-brandonsaldan.vercel.app/).
