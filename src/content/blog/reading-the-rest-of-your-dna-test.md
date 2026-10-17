---
title: "Reading the Rest of Your DNA Test"
excerpt: "Three years after GeneCodex, I rebuilt it from scratch as Twofold, with all of SNPedia, a report you can actually explore, and nothing leaving your device."
publishDate: "2026-10-17"
image:
  src: "../../assets/blog/art/reading-the-rest.webp"
  alt: "Abstract painting of a pond in loose ochre, yellow, and pale blue brushstrokes"
subject: "Genetic Analysis"
repository:
  label: "Twofold"
  href: "https://twofold.brandonsaldan.com"
isFeatured: true
seo:
  image:
    src: "../../assets/projects/twofold/twofold-1.webp"
    alt: "Twofold report overview showing SNPedia matches, repute and magnitude"
---

![Twofold report overview showing SNPedia matches, repute and magnitude](../../assets/projects/twofold/twofold-1.webp)

In 2023 I lost access to a paid Promethease report and, rather than pay for it again, built GeneCodex: a site that read a raw DNA file in the browser and matched it against SNPedia. It worked, and then I left it alone for three years. Twofold is the rebuilt version. It keeps the original idea and replaces almost everything else.

## What GeneCodex Got Wrong

GeneCodex never actually read all of SNPedia. It matched files against a handful of lists I had put together by hand, grouped into themes like appearance, medicine, and personality. Those lists covered the well-known variants and very little else, so most of what SNPedia knows about a given file never showed up.

The report had the same problem from the other direction. It showed a list of results with little sense of which ones mattered, why, or how sure anyone was about them. For something as easy to misread as genetic data, that was the bigger flaw.

## All of SNPedia

Twofold starts from a complete copy of SNPedia instead of a curated slice. A script crawls the wiki's API one request at a time, pausing between each, and saves every SNP, genotype, genoset, gene, condition, and medicine page. The October 2026 snapshot took 4,402 requests to fetch 220,056 pages.

From those pages, Twofold builds 111,734 SNP records, 104,732 genotype descriptions, and 283 genosets, which are combinations of variants that SNPedia describes together. Of those SNPs, 77,978 have at least one genotype described, so they can turn up in a report. A typical 23andMe file covers about 15,000 of them. A whole genome file can cover far more.

The whole dataset ships as two fixed files, about 8 MB compressed. Every visitor downloads exactly the same two files, so nothing the site requests depends on what is in your DNA.

## Nothing Leaves Your Device

GeneCodex processed files locally too, but Twofold is stricter about it. The file is read in a background worker in your browser and never uploaded. There is no account, no analytics, and no server code at all, just static files. The site's security policy only allows it to connect to itself, so the page cannot send your data to any other server. After your first visit, it works with your internet turned off, and the privacy page explains how to check that yourself.

Reports disappear when you close the tab. If you want to keep one, you can save an encrypted copy in your browser with a passphrase. The raw file itself is never stored.

## Reading a Report Carefully

Most of a report is unremarkable, and that is the point worth understanding first. In the sample report, 13,836 genotypes match an SNPedia entry, but 13,410 of those have a magnitude of 0, meaning they are common and SNPedia considers them not worth a second look. Only 191 reach a magnitude of 2 or higher.

Magnitude is SNPedia's rating of how interesting a genotype is, not how risky it is. Repute is its label for whether a genotype is generally good or bad to have, and "good" often just means the common, expected version. Twofold puts those explanations next to the charts and filters they describe instead of in a help page.

It is also careful about what consumer tests get wrong. DNA chips sometimes report rare variants that are not really there, so high-magnitude results on rare variants are flagged as worth confirming with a clinical test. Before any report opens, an acknowledgement screen says plainly that SNPedia is a community-edited wiki, that Twofold makes no guarantee the report is accurate or complete, and that anything worrying belongs with a doctor or genetic counselor. Nothing in the report is hidden behind it.

## Try It

Twofold is free, open source, and will stay that way. It reads files from 23andMe, AncestryDNA, MyHeritage, FamilyTreeDNA, Living DNA, and whole genome sequencing, and there is a sample report built from a made-up genome if you want to look around first.

You can try it at [twofold.brandonsaldan.com](https://twofold.brandonsaldan.com), and the code is on [GitHub](https://github.com/brandonsaldan/twofold).
