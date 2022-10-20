+++
description = "A Cloud native multi-package registry, built on distributed technologies to achieve high availability and easy horizontal scaling"
images = ["https://d1r70b9eh1brae.cloudfront.net/enseada.png"]
language = "rust"
repository = "https://github.com/enseadaio/enseada"
tags = ["open source", "rust", "cloud"]
title = "Enseada"
website = "https://enseada.io"
weight = 30

+++

<a href="https://enseada.io" target="_blank">
    <img alt="Enseada Logo" align="right" width=512 src="https://raw.githubusercontent.com/enseadaio/enseada/develop/.github/logo-white.png">
</a>

A Cloud native multi-package registry.

Enseada is a modern, fast and scalable package registry, designed from the ground up
to run in elastic, container-based environments and to be highly available and distributed.

---

It leverages scalability by using natively distributed technologies.

The registry itself is written in [Rust](https://rust-lang.org), a statically typed and extremely fast programming language built for correctness and safety.

[CouchDB](https://couchdb.apache.org/) is used as the primary datastore, containing information about
repositories, users and access control. CouchDB is a web-native database written in Erlang and based on web technologies like HTTP and JSON.

Packages are can be stored in CouchDB itself, as file attachments, or in distributed object storage services like Amazon S3.

It is designed to support many different package formats and APIS, such as:


- OCI images
- Maven JARs
- NPM packages
- RubyGems
- Rust crates
- Go module proxy


## State of the project

So the funny thing is, this project never landed. It was originally written in Elixir in 2019, but as the scope grew I found the Elixir ecosystem lacking in high-quality third-party libraries that provided what I needed. I then rewrote the project in Go, a language I knew had a very large ecosystem of packages available. This worked for a while, but I quickly grew tired of Go's unergonomic syntax and questionable design choices. A friend of mine had previously introduced me to Rust, so I decided to give it a go (pun definitely intended).

This was the project that taught me the ins and outs of Rust, and has since seen another two rewrites as I changed the internal design of the application, first moving to an eventually-consistent approach which proved unsuccessful, and then to an event-sourced model.

I stopped developing it in 2021 to focus my efforts on [Karavel], but I still dream to get back and complete at least a functioning prototype. It's one of my dearest projects and I really hope to see it fly on its own one day.

[Karavel]: /projects/karavel