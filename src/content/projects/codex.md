---
title: "Codex - In-Browser Bioinformatics Tool"
description: "An open-source platform that enables users to explore and understand their genetic data through SNPedia integration."
publishDate: "2024-01-15"
image:
  src: "/projects/art/codex.webp"
  alt: "Painterly artwork selected for the Codex project"
isFeatured: true
seo:
  image:
    src: "/projects/codex/codex-1.png"
    alt: "Codex interface displaying genetic analysis"
---

<img src="/projects/codex/codex-1.png" alt="Codex interface displaying genetic analysis" class="w-full" />

Codex is an open-source interface for analyzing genetic data through SNPedia's research database. It processes raw DNA files in the browser, allowing users to explore genetic variants without uploading sensitive information to a server. The result is a privacy-first tool that makes a complex bioinformatics workflow easier to understand.

## Objectives

Codex was designed to give people more control over their genetic data. The project focused on client-side processing, an efficient connection to SNPedia, a clear interface for exploring genetic information, and a storage model that kept personal data local to the user's device.

## Privacy-First Architecture

Raw DNA files are parsed and analyzed in the browser rather than sent to a central application server. IndexedDB provides local storage for the working dataset, so the application can preserve progress without creating a remote copy of a user's genetic information. This architecture made privacy a core product behavior instead of an afterthought.

The analysis flow validates uploaded files, identifies SNPs, and organizes the results into categories that are easier to review. Local processing also keeps the application useful when users need to work with a large file while maintaining control of the underlying data.

## SNPedia Integration

Codex connects the local dataset to SNPedia's MediaWiki API to provide context for relevant genetic markers. The integration includes filtering, caching, and error handling for rate limits, which helps the application stay responsive during repeated lookups. The interface presents the resulting information alongside the user's data rather than hiding the research process behind a single opaque result.

## Product Experience

The application includes a clean upload flow, real-time analysis updates, smart filtering, and categorized variant views. Users can review information related to disease predisposition, medication response, personality traits, and other documented associations. Export workflows support PDF, CSV, JSON, and XML formats for people who want to keep or share a record of their results.

Codex was built with Next.js and TailwindCSS. The data pipeline uses dna2json and IndexedDB, while PDF-lib and file-saver support report exports. The project remains open source and is available on [GitHub](https://github.com/brandonsaldan/codex), with a live demo at [codex-brandonsaldan.vercel.app](https://codex-brandonsaldan.vercel.app/).

## Outcome & Status

Codex demonstrates how modern web technologies can make personal genetic analysis more accessible without giving up local control of sensitive data. The project is dormant and has not received a release in several years, but it remains open source and available for anyone who wants to explore, use, or extend the codebase.
