---
title: "Spotify Car Thing's Second Chapter"
excerpt: "How a discontinued car accessory inspired an open-source project to save thousands of devices from the landfill through creative engineering."
publishDate: "2024-01-15"
isFeatured: true
seo:
  image:
    src: "/projects/nocturne/nocturne-1.png"
    alt: "Nocturne OS running on Spotify Car Thing hardware"
---

<img src="/projects/nocturne/nocturne-1.png" alt="Nocturne OS running on Spotify Car Thing hardware" class="rounded-lg w-full" />

In July 2022, Spotify made a decision that would affect thousands of users: they discontinued the Car Thing, their first hardware product, after just five months on the market. While many saw this as just another failed product launch, I saw an opportunity. These devices – packed with capable hardware including an Amlogic S905D2 SoC, a beautiful display, and robust build quality – were about to become electronic waste. That didn't sit right with me.

## From Frustration to Innovation

When Spotify announced the discontinuation, they promised to maintain functionality for existing users, but we all knew what that meant – eventual obsolescence. A good friend of mine expressed his frustration with this, as well as the existing solutions for continued use that he had tried. All were clunky, requiring either convoluted server setups or unreliable workarounds that made the device more frustrating than functional. His frustration resonated with me – here was a perfectly good piece of hardware, thoughtfully designed and well-built, destined to become nothing more than a paperweight because of a business decision.

That conversation sparked something. Rather than accepting the limitations of existing solutions, we began to wonder if we could bypass them entirely. The hardware itself was solid – an Amlogic S905D2 SoC typically used in smart TVs and streaming boxes, suggesting untapped potential beyond its original single-purpose design. If we could understand how to communicate with this hardware directly, maybe we could give it a completely new brain.

The challenge was significant: how do you take a device designed solely for Spotify and transform it into a versatile music management system? The hardware was capable, but with only 512MB of RAM and no built-in networking beyond Bluetooth, we needed creative solutions.

## The Technical Journey

### Phase 1: The Raspberry Pi Era

Our first approach was ambitious but effective. Luckily for us, a GitHub user by the name of [bishopdynamics](https://github.com/bishopdynamics) had created a set of tools that helped unlock the hardware's potential. His early work in documenting the Car Thing's hardware and creating tools for initial access proved huge for us - it gave us the foundation we needed to start building something new. Standing on these shoulders, we developed a distributed system where a Raspberry Pi would handle all networking and connectivity. The Pi would connect to either a home WiFi network or, using a custom setup script, to a phone's mobile hotspot for in-car use.

This solution, while not elegant, proved our concept: these devices could do more than their original design intended. The Raspberry Pi acted as the brain of the operation, managing all network communications while the Car Thing focused purely on interface and control. The setup wasn't perfect – requiring additional hardware and separate network configuration wasn't ideal – but it was a crucial first step in understanding how we could push the boundaries of what this hardware could do.

```python
# Excerpt from setup_hotspot_rpi.py, shipped in v2.0.0-beta.1

# get ssid from user
SSID = str(input("Please enter the SSID of your phone's hotspot. \n"))

# get password from user
password = getpass.getpass("Please enter the password of your phone's hotspot. Your input is hidden to protect your hotspot password. \n")

# check if network config file exists
if not os.path.exists(config_path):
    config = open(config_path, "w+")
else:
    config = open(config_path, "r+")
    existing_data = config.read()
    if existing_data:
        input("The configuration file already contains data. Press enter if you would like to continue, and overwrite the data in the file. \n")
        config.seek(0)
        config.truncate()
...
```

By this point, Nocturne had already become the first mod for the Car Thing with the capability to be used in a vehicle; which was particularly meaningful given that the device was originally designed for exactly this purpose, yet other modifications had lost this crucial functionality. The mobile hotspot connection script meant you could simply start your car, and within moments your Car Thing would be connected and ready to go – just as Spotify had originally intended, but now with our own software running the show.

The community's response was overwhelming. Users began contributing ideas and code, helping us optimize the system and add features. But we knew we could do better. The Raspberry Pi requirement, while functional, felt like a temporary solution rather than the elegant final form this project deserved. Each installation required precise setup, and troubleshooting network issues meant dealing with two devices instead of one. These complications, while manageable for technically-inclined users, created a barrier for wider adoption.

Despite these challenges, Nocturne had received coverage in numerous news outlets, including [TechSpot](https://www.techspot.com/news/105402-developers-keep-spotify-car-thing-alive-custom-firmware.html), [Ars Technica](https://arstechnica.com/gaming/2024/11/firmware-hacks-are-rejuvenating-spotifys-car-thing-before-the-company-bricks-it/), and [Gizmodo](https://gizmodo.com/spotify-car-thing-is-being-kept-alive-by-devoted-tinkerers-2000536816), and had been reviewed by large tech YouTubers, gathering over 3 million views. It even earned a mention on Linus Tech Tips' "The WAN Show".

<figure>
    <img src="/blog/nocturne-1.png" alt="Nocturne OS running on Spotify Car Thing hardware" width="600" class="rounded-lg mx-auto" />
    <figcaption class="text-sm text-center mt-2 font-serif text-gray-600">v1.0.0-alpha running on my Car Thing with a Raspberry Pi Zero 2 W connected.</figcaption>
</figure>

### Phase 2: Breaking Free

A major turning point came when GitHub user [JoeyEamigh](https://github.com/JoeyEamigh) developed a NixOS-based system for the Car Thing as part of a [hackathon submission](https://devpost.com/software/car-thang). This custom Linux distribution opened up new possibilities for running software directly on the device, without requiring additional hardware. We saw the potential immediately – if we could run a full Linux distribution on the Car Thing, we could eliminate the need for the Raspberry Pi entirely.

We expanded our team, bringing on two new members who specialized in backend development and Linux engineering. Together, we developed `nocturned`, a lightweight daemon that runs locally on the device and manages Bluetooth connectivity. This daemon enables direct Bluetooth tethering with a phone, handling everything from device pairing to network connection management through a clean API interface.

The shift from a Raspberry Pi-dependent system to a fully local solution was transformative:

1. **Simplified Architecture:**

   - Eliminated the need for additional hardware
   - Reduced setup complexity significantly
   - Enabled true portable use with just a phone and the Car Thing

2. **Network Management:**
   - Built robust Bluetooth tethering support
   - Implemented clean WebSocket-based status updates
   - Created comprehensive device pairing and network management APIs

The new architecture also opened up possibilities for easy software updates through an OTA (Over-The-Air) update system, making it simple for users to stay current with the latest improvements. What started as a hacky solution requiring multiple pieces of hardware had evolved into an elegant, self-contained system that better realized the Car Thing's potential as a truly mobile device.

## Community Impact

What started as a personal project to save our own Car Thing devices grew into something much larger. The Nocturne community now includes hundreds of users. We've collectively prevented hundreds of devices from ending up in landfills, giving them new purpose and extended life.

```bash
# Usage statistics from our telemetry
Active Devices: 300+
Community Contributors and Sponsors: 20+
Merged Pull Requests: 50+
```

## Looking Forward

Nocturne continues to evolve. We're currently working on:

- Further Bluetooth device management
- NixOS image optimization
- Various new usability features, improving the overall user experience

## The Bigger Picture

This project has reinforced something I deeply believe: hardware obsolescence should be a technical limitation, not a business decision. Through open-source collaboration and creative engineering, we can extend the life of devices long after their manufacturers have abandoned them.

For those interested in joining our effort, you can find the project on [GitHub](https://github.com/usenocturne). Whether you're a developer looking to contribute or a user wanting to give your Car Thing a second life, we welcome you to our community.

Remember: every device we save from the landfill is a small victory for sustainability in tech. Sometimes, innovation isn't about creating something new, but about reimagining what's already there.

## The Team Behind Nocturne

None of this would have been possible without the collective effort of the incredible team that came together to make this project a reality:

- [Brandon Saldan](https://github.com/brandonsaldan)
- [bbaovanc](https://github.com/bbaovanc)
- [Dominic Frye](https://github.com/itsnebulalol)
- [shadow](https://github.com/68p)

(Listed alphabetically – I promise I didn't put myself first on purpose! Trust me, the rest of the team are the real heroes here!)

Special thanks also go to [bishopdynamics](https://github.com/bishopdynamics) for their early work in documenting the Car Thing hardware, [JoeyEamigh](https://github.com/JoeyEamigh) whose NixOS work helped pave the way for our v3 release, the [Thing Labs](https://github.com/JoeyEamigh) team, and all contributors and sponsors to the project.
