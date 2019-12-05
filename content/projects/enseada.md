+++
description = "A Cloud native multi-package registry, built on distributed technologies to achieve high availability and easy horizontal scaling"
images = ["https://d1r70b9eh1brae.cloudfront.net/enseada-logo-white.png"]
language = "elixir"
repository = "https://github.com/enseadaio/enseada"
tags = ["open source", "elixir", "cloud"]
title = "Enseada"
website = "https://enseada.io"
weight = 20

+++
A Cloud native multi-package registry.

Enseada is a modern, fast and scalable package registry, designed from the ground up
to run in elastic, container-based environments and to be highly available and distributed.

---

It leverages scalability by using natively distributed technologies

The registry itself is written in [Elixir](https://elixir-lang.org), an [Erlang](https://www.erlang.org/) compatible,
functional and process-based programming language that is both fast and resource efficient.

[CouchDB](https://couchdb.apache.org/) is used as the primary datastore, containing information about
repositories, users and access control. CouchDB is a web-native database written in Erlang and based on web technologies
like HTTP and JSON.

As far as storage is concerned, both local disks an object storage services are supported, altough
the latter are strongly recommended for production deployments.

## Supported package repositories

Enseada is a multi-package registry, meaning it can support a large number of package 
formats and registry APIs.

At the moment, the following formats are supported:

- [Maven 2 / 3](https://maven.apache.org/guides/introduction/introduction-to-repositories.html)
- [NPM](https://github.com/npm/registry/blob/master/docs/REGISTRY-API.md) (planned, coming soon)
- [Docker](https://docs.docker.com/registry/spec/api/) (planned, coming soon)
- [RubyGems](https://rubygems.org) (planned, coming soon)

## Supported storage providers

Enseada uses the wonderful library [Waffle](https://github.com/stavro/arc) to implement
its storage layer, and is therefore compatible with any provider supported by Waffle.
See [Configuration](#configuration) for how to setup the storage layer.

At the moment, only these providers are supported:

- Local disk
- S3 compatible (AWS S3, Minio, DigitalOcean Spaces, Scaleway Object Storage, Ceph, etc)
- Google Cloud Storage