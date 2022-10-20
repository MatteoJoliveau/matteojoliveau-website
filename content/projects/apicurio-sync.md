---
title: Apicurio Sync
date: 2022-10-20T10:15:04.000+02:00
repository: https://github.com/MatteoJoliveau/apicurio-sync
website:
weight: "25"
language: rust
tags: ["open source", "cli"]
description: Apicurio Sync is a command line tool used to synchronize artifacts between an instance of Apicurio Registry and a local folder.
images:
- https://developers.redhat.com/sites/default/files/styles/article_feature/public/blog/2021/03/apicurio-performance_2x.png?itok=eykZYcVI

---

Apicurio Sync is a command line tool used to synchronize artifacts between an instance of Apicurio Registry and a local folder.

It is used to share schema definitions such as ProtoBuf IDL files between multiple codebases using [Apicurio Registry], eliminating the need to fetch the schemas at runtime.

Schemas can be published during the regular CI/CD build step, and pulled by a developer when they want to update the vendored copy in another project. It uses a lockfile to avoid unexpectedly pulling in new versions of schemas

It also supports autenticating against multiple registries independently of the managed schemas, allowing to synchronize the same definitions on different registries for different uses, e.g. to separate prod and staging schema versions.

```yaml
push:
  - group: example
    artifact: push
    name: Push example
    description: An example Protobuf schema to demonstrate the push capabilities of apicurio-sync
    path: proto/example/push.proto
    type: PROTOBUF
    labels:
      - example
    properties:
      example.com/hello: world

pull:
 - group: example
   artifact: push
   path: proto/example/pull.proto
   version: 1
```
---
```bash
$ apicurio-sync context init
$ apicurio-sync context set production --url https://registry.example.com --current
$ apicurio-sync context login oidc https://auth.example.com --client-id my-client-id-for-apicurio-sync
$ apicurio-sync update
$ apicurio-sync
INFO apicurio_sync: Syncing artifacts with remote registry
INFO apicurio_sync: Sync completed
```
[Apicurio Registry]: https://www.apicur.io/registry/