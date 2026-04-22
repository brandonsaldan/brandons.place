---
title: "Nocturne - Custom Firmware and Companion App Ecosystem for Spotify Car Thing Hardware"
description: "An open-source custom firmware and companion app ecosystem that repurposes discontinued Spotify Car Thing hardware into a standalone Bluetooth media controller."
publishDate: "2024-01-15"
isFeatured: true
seo:
  image:
    src: "/projects/nocturne/nocturne-1.png"
    alt: "Nocturne running on Spotify Car Thing hardware"
---

<img src="/projects/nocturne/nocturne-1.png" alt="Nocturne running on Spotify Car Thing hardware" class="rounded-lg w-full" />

**Project Overview:**
Nocturne is an open-source custom firmware and companion app ecosystem that repurposes the discontinued Spotify Car Thing into a standalone Bluetooth media controller. Built from the ground up by a three-person engineering team, Nocturne replaces the stock firmware with a complete embedded Linux distribution, a real-time Rust system daemon, a touch-optimized web application running on-device, and native companion apps on iOS and Android. With 700+ project sponsors and a community of 1,700+ members, Nocturne is the most advanced custom firmware available for the Spotify Car Thing.

## Project History

Nocturne has evolved significantly since its initial release, growing from a simple OS replacement into a full firmware and companion app ecosystem.

**v1.0.0-beta.1 - v2.1.1-beta.5**
The earliest versions of Nocturne ran a custom Debian 12 configuration on the Car Thing's hardware. Networking was provided externally via a Raspberry Pi integration - the Car Thing connected to the Pi over USB, which acted as a network bridge, enabling Spotify API communication. While functional, this architecture required users to have a dedicated Raspberry Pi running alongside their Car Thing, creating friction in the setup process.

**v3.0.0**
A major architectural shift replaced the Debian base with a custom NixOS configuration and eliminated the Raspberry Pi networking dependency entirely. Bluetooth tethering via a phone hotspot replaced the Pi bridge, dramatically simplifying the setup process and making Nocturne accessible to a much wider audience. This release marked Nocturne's transition from a hobbyist project into a polished, widely-adopted platform.

**v4.0.0 (Current)**
The current generation represents a complete reimagination of the stack. NixOS was replaced with a custom Buildroot-based embedded Linux distribution, giving the team full control over every layer of the OS. A native Rust daemon replaced the previous networking approach, and direct Bluetooth communication between the Car Thing and native iOS and Android companion apps replaced Bluetooth tethering entirely. On-device wake-word detection, A/B OTA update infrastructure, and a fully redesigned React 19 interface round out the most capable version of Nocturne yet.

## Architecture

Nocturne is a multi-component ecosystem spanning several interconnected systems:

**Firmware**
The base layer is a custom embedded Linux distribution built with Buildroot, targeting the Car Thing's ARM Cortex-A53 SoC (Amlogic S905D2) with 512MB RAM. The OS includes the Weston compositor, Chromium in kiosk mode, BlueZ Bluetooth stack, SWUpdate for A/B OTA updates, USB RNDIS gadget networking, and on-device ONNX wake-word inference for "Hey Nocturne" detection.

**nocturned (Rust Daemon)**
The system's core bridge - a Rust-based daemon managing WebSocket communication on port 5000, BlueZ Bluetooth device management, Spotify API proxying, OTA update orchestration, and overall device lifecycle management. Supervised alongside four other system services.

**nocturne-ui (React 19 + Vite)**
A touch-optimized single-page application running on-device inside Chromium, featuring full Spotify playback control, Bluetooth pairing UI, hardware button mapping, swipe gesture navigation, dynamic album art gradient backgrounds, real-time OTA update flows, and much more.

**Companion Apps (iOS + Android)**
Native mobile apps handling Bluetooth connectivity, Spotify OAuth delegation, phone media control relay, and subscription management. Available on the Google Play Store and iOS TestFlight.

**Communication Chain**
UI → WebSocket → nocturned → Bluetooth → Companion App → Spotify API

## Technical Challenges & Solutions

**Bluetooth Connectivity**
Engineering direct Bluetooth communication between the Car Thing and mobile devices was the project's most significant technical challenge. The solution involved implementing BlueZ-based device management in the Rust daemon with automatic reconnection using exponential backoff and bidirectional media control relay between the embedded device and paired smartphones.

**OTA Update Infrastructure**
Shipping firmware updates safely to devices in the field required building a robust OTA system using SWUpdate with cryptographic signature verification and dual-partition A/B failover, ensuring devices can recover gracefully from failed updates.

**On-Device Wake Word Detection**
Implementing "Hey Nocturne" voice detection within the 512MB RAM constraint required integrating ONNX runtime inference models optimized for the ARM Cortex-A53 architecture.

**Hardware Constraints**
Working within the Car Thing's original hardware limitations - 512MB RAM, a fixed SoC, and a small touch display - required careful optimization across the firmware, daemon, and UI layers to deliver smooth, responsive performance.

**Eliminating External Dependencies**
Each major version of Nocturne has worked to reduce friction in the setup process - moving from a required Raspberry Pi, to Bluetooth tethering, to direct Bluetooth via companion apps. This iterative simplification was as much an engineering challenge as the underlying technical work.

## Technology Stack

- Firmware: Buildroot embedded Linux, kernel 4.9.113, Weston compositor, BlueZ, SWUpdate
- Systems: Rust, WebSocket, Supervisord, ONNX inference
- Frontend: React 19, Vite, TailwindCSS, Chromium kiosk mode
- Mobile: iOS (TestFlight), Android (Google Play Store)
- Hardware: ARM Cortex-A53, Amlogic S905D2 SoC, 512MB RAM
- Version Control: Git, GitHub

**Previous Stack (for historical reference)**
- v1.0.0 - v2.1.1: Custom Debian 12, Raspberry Pi network bridge, Next.js, TailwindCSS
- v3.0.0: Custom NixOS, Bluetooth tethering via phone hotspot

## Project Status

Nocturne is under active development. The project maintains an open-source community of 1,700+ members and 700+ project sponsors. Companion apps are available on the Google Play Store and iOS TestFlight.

The project is open source and available on [GitHub](https://github.com/usenocturne).