---
title: "Democratizing Genetic Analysis"
excerpt: "How a missing $12 report led to building an open-source platform for genetic analysis, attracting attention from industry pioneers."
publishDate: "2023-06-13"
isFeatured: true
seo:
  image:
    src: "/projects/codex/codex-1.png"
    alt: "Codex platform interface"
---

<img src="/projects/codex/codex-1.png" alt="Codex platform interface" class="rounded-lg w-full" />

**Project Overview:**
Codex emerged from a personal need to analyze genetic raw data after losing access to a paid report. What started as a solution to avoid repaying $12 evolved into an innovative bioinformatics platform that processes genetic information locally in-browser, making sophisticated genetic analysis accessible to everyone.

## The Challenge

Within the last two decades, genetic health testing has transformed our understanding of individual health, particularly through the study of Single Nucleotide Polymorphisms (SNPs). While ancestry tests have become common, accessing comprehensive genetic analysis typically requires additional paid services. After losing access to a Promethease report due to a server migration, I decided to build an open-source alternative that would be free and accessible to all.

## Technical Innovation

1. **Local Data Processing:**

- Implemented browser-based genetic data analysis using genome.js
- Developed IndexedDB integration for secure local data storage
- Achieved 50% faster processing compared to server-based solutions

2. **SNPedia Integration:**

- Integrated comprehensive SNPedia database for genetic variant analysis
- Achieved 99% accuracy in genetic interpretation
- Created efficient data querying and caching systems

## Architecture & Implementation

1. **Frontend Development:**

- Built with Next.js and React for a responsive interface
- Implemented file processing using genome.js
- Utilized IndexedDB for client-side data storage
- Created PDF export functionality for report generation

2. **Data Processing Pipeline:**

- Raw data conversion to JSON format
- Local database storage and retrieval
- Integration with SNPedia for variant interpretation
- Real-time analysis and report generation

## Key Features

1. **Secure Data Handling:**

- Complete local processing ensuring privacy
- No server-side storage of genetic data
- Efficient handling of 700,000+ SNP entries

2. **Comprehensive Analysis:**

- Disease predisposition assessment
- Medication response analysis
- Personality trait insights
- Detailed genetic variant reporting

3. **User Experience:**

- Intuitive file upload interface
- Real-time analysis updates
- Downloadable PDF reports
- Sample report viewing option

## Impact & Results

- Successfully replicated and improved upon paid genetic analysis services
- Attracted attention from Promethease and SNPedia co-founder
- Demonstrated the viability of client-side genetic data processing
- Created a free, accessible alternative to paid genetic analysis services

## Technology Stack

- Frontend: Next.js, React
- Data Processing: genome.js
- Storage: IndexedDB
- Data Source: SNPedia API integration
- Export: PDF generation capabilities

## Outcome

Codex has evolved from a personal project into a powerful tool for democratizing genetic analysis.

![Codex Demo](https://raw.githubusercontent.com/brandonsaldan/codex/main/public/images/genecodex.gif)

The project is open source and available on [GitHub](https://github.com/brandonsaldan/codex), with a live demo at [codex-brandonsaldan.vercel.app](https://codex-brandonsaldan.vercel.app/).
