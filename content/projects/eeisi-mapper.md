---
title: EeISI Mapper
description: The EeISI mapper translates from the formats required by EN 16931 (OASIS UBL and UN/CEFACT CII) into the national FatturaPA format and viceversa.
images: 
  - https://www.agid.gov.it/themes/custom/agid/logo.svg
  - https://d1r70b9eh1brae.cloudfront.net/chef-in-camicia-white.png
language: java
tags: 
  - professional
  - open source
  - techgap
website: https://github.com/AgID/EeISI-mapper
repository: https://github.com/AgID/EeISI-mapper
weight: 15
---

The **EeISI mapper** is a Java-based solution that translates from the formats required by EN 16931 (OASIS UBL and UN/CEFACT CII) into the national FatturaPA format and viceversa. 
It was developed with [InfoCert] for [AgID] in order to simplify the integration with the rest of the european invoicing systems by providing a composable toolkit
to easily convert between multiple e-invoicing formats. 

The project provides a core Java library implementing an intermediate in-memory representation 
and several converters between this structure and the actual invoicing formats, allowing to quickly and dynamically compose convertion pipelines as needed.

The project also provides a high level API that abstracts away the conversion system and provide a single, easy to use interface to convert XML-based 
invoices, and a CLI tool as the reference implementation using the aforementioned API.

[InfoCert]: https://infocert.it
[AgID]: https://agid.gov.it
