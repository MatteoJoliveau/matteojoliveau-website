---
title: The Karavel Project
date: 2022-10-20T10:15:04.000+02:00
repository: https://github.com/karavel-io/platform
website: https://karavel.io
weight: "1"
language: kubernetes
tags: ["professional", "open source", "kubernetes"]
description: |
    The Karavel Project is an open governance community of technologists with the goal of building tools and knowledge in the Kubernetes and cloud-native space.

images:
- https://d1r70b9eh1brae.cloudfront.net/karavel.png?v=2

---
<img align="right" width=384 src="https://karavel.io/images/karavel-logo-white-bg.png">

**The Karavel Project** is an open governance community of technologists with the goal of building tools and knowledge in the Kubernetes and cloud-native space.

It hosts different open source projects that aim at simplifying the deployment and operation of Kubernetes-based platforms and streamlining the delivery of cloud-native apps on public cloud, private clouds and bare-metal environments.

The main output of the Karavel project is the [Karavel Container Platform], a curated set of components and services based on the best-in-breed open source projects, carefully configured to deliver a production-ready platform for enterprises.

I personally proposed, designed and implemented the Platform and acted as lead maintainer. My employer Neosperience sponsored the project by providing development time from me and some of my colleagues, and by paying for the cloud resources used by the project (domain name, cloud storage for packages and websites, etc). Our team at Neosperience provided consultancy services around the Karavel platform to customers that wanted to migrate their workflows to Kubernetes. The KCP has been used in production since 2020 to power deployment platforms in many different verticals, including healthcare, automotive, and finance.

## The Karavel Container Platform

Karavel provides many different components that together form a cohesive and integrated environment
called the **Karavel Container Platform**.

The Karavel Container Platform selects specific versions of these components that are tried and tested together
and publishes them as a ready-to-use kit to assemble GitOps-enabled platforms for enterprises. Check out
our [quickstart guide] for an introductory view to the Platform.

### Features

- Run on any [conformant Kubernetes cluster]
- 100% open source stack based on community and CNCF projects
- GitOps first workflow, enabling the platform to be self-hosted and updating itself
- Built-in security tools for secrets management, policy enforcement and access control
- Elastic routing layer with automated DNS, load balancing and certificate management
- Comprehensive observability stack with metrics, logging and distributed tracing collection and visualization

[Karavel Container Platform]: https://platform.karavel.io