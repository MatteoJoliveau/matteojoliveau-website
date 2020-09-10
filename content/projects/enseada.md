+++
description = "A Cloud native multi-package registry, built on distributed technologies to achieve high availability and easy horizontal scaling"
images = ["https://d1r70b9eh1brae.cloudfront.net/enseada.png"]
language = "rust"
repository = "https://github.com/enseadaio/enseada"
tags = ["open source", "rust", "cloud"]
title = "Enseada"
website = "https://enseada.io"
weight = 10

+++
A Cloud native multi-package registry.

Enseada is a modern, fast and scalable package registry, designed from the ground up
to run in elastic, container-based environments and to be highly available and distributed.

[![Enseada Logo](https://raw.githubusercontent.com/enseadaio/enseada/develop/.github/logo-white.png)](https://enseada.io)

---

It leverages scalability by using natively distributed technologies

The registry itself is written in [Rust](https://rust-lang.org), a statically typed and extremely fast programming language built for correctness and safety.

[CouchDB](https://couchdb.apache.org/) is used as the primary datastore, containing information about
repositories, users and access control. CouchDB is a web-native database written in Erlang and based on web technologies like HTTP and JSON.

Packages are can be stored in CouchDB itself, as file attachments, or in distributed object storage services like Amazon S3. The latter are recommended for production usage.

## Security first

Enseada aims at providing a small, yet complete set of feature for managing software packages.
Security is a priority concern, so an advanced policy engine provides the capabilities to define fine grained permissions over repositories and packages. From human users to automated service accounts, every access to the system is controlled, filtered and logged. A fully compliant [OAuth 2](https://auth0.com/docs/protocols/oauth2) implementation allows integration with third party systems with ease.

## Management API

A set of RESTful APIs allows to programmatically interact with Enseada and its resources. Check the [documentation](https://docs.enseada.io/developers/apis.html) for more information.

## Management UI

The same set of functionalities exposed in the [API](#management-api) is available as a built-in web GUI. Check the [documentation](https://docs.enseada.io/users/ui.html) for more information.

## Supported package repositories

Enseada is a multi-package registry, meaning it can support a large number of package formats and registry APIs.

At the moment, the following formats are supported:

- [Docker](https://docs.docker.com/registry/spec/api/)
- [Maven 2/3](https://maven.apache.org/guides/introduction/introduction-to-repositories.html)
- [NPM](https://github.com/npm/registry/blob/master/docs/REGISTRY-API.md) (planned, coming soon)
- [RubyGems](https://rubygems.org) (planned, coming soon)
- [Rust crates](https://doc.rust-lang.org/cargo/reference/registries.html) (planned, coming soon)
- [Go module proxy](https://docs.gomods.io/intro/protocol/) (planned, coming soon)

## Supported storage providers

Enseada abstracts the underlying storage provider with a custom storage engine tailored for its use cases.

At the moment, the following providers are supported:

- S3 compatible (AWS S3, Minio, DigitalOcean Spaces, Scaleway Object Storage, Ceph, etc)