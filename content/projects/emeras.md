---
title: Sinelec EMERAS
date: 2022-10-20T10:15:04.000+02:00
repository:
website: https://www.sinelec.it/en/portfolio/connected-mobility/c-its-platform-v2i-ready/
weight: "5"
language: nodejs
tags: ["professional", "automotive", "cloud"]
description: |
   A cloud-native Cooperative Intelligent Transportation Systems (C-ITS) providing the integration with road ITS devices and makes real-time bi-directional interconnection between vehicles and infrastructure possible
images:
- https://www.sinelec.it/wp-content/uploads/video/EMERAS_ENG-sd_01.jpg

---
<img align="right" width=384 src="https://www.sinelec.it/wp-content/uploads/logo-sinelec-big.png">

**EMERAS** is a software solution I designed for [Sinelec], the technological branch of [ASTM Group], to integrate connected vehicles with smart road infrastructures. I provided the technological solution design and followed the initial implementation phase working closely with Sinelec's domain experts, producing a cloud-native platform for interconnecting vehicles, appliances and third-party systems easily and securely.

---

EMERAS acts as a data processing platform capable of ingesting events in real-time from a variety of inputs (MQTT, AMQP, HTTP, UDP) and formats (XML, JSON, ProtoBuf), processing them, and forwarding them and/or producing new events to different outputs in different formats.

It provides a custom REST+WebSocket API and web UI to manage the system, and a modular design that allows to combine input and output formats at will.

EMERAS is been tested on a segment of the A4 highway, and a slimmed-down version is being deployed for [testing in Turin].

{{< youtube id="cwjUbHzTgoo" title="EMERAS promotional video" >}}

[Sinelec]: https://www.sinelec.it
[ASTM Group]: https://www.astm.it

[testing in Turin]: https://www.sinelec.it/en/sinelec-delivers-v2x-to-the-city-collaboration-with-5t-pioneer-in-turin-with-the-c-roads-project/
