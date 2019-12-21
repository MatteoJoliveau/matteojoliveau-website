+++
date = 2019-12-20T23:00:00Z
description = ""
title = "Talks"
[menu.main]
weight = 2

+++
# Talks and Workshops

Here is a listing of all the talks and workshops I gave in the past, with links to slides and repos when available.

---

## Empowering the client with GraphQL

### A tale of progressive adoption

_First delivered on 23rd September 2019 @ DEV Community Milano Meetup_  
_Hosts: Matteo Joliveau, Mattia Panzeri_  

An overview of how GraphQL changed the way we design API-driven applications and the interactions between frontend clients and backend servers. Among the covered topics were both basic and advanced practices and techniques, such as pagination, batch loading, caching and schema design.

[_Slides_](https://docs.google.com/presentation/d/1kl1jhjQJIHDIvTJfUL_GcPrBN7wGdqxiJiqegKZb9q0/edit?usp=sharing)

---

## Breaking the monolith!

### Modernizing legacy APIs with GraphQL on AWS Lambda

_First delivered on 23rd October 2019 @ Codemotion Milan 2019_  
_Hosts: Matteo Joliveau, Nicola Racco_  

An 8 hours long workshop about the use of GraphQL and AWS Lambda to upgrade legacy APIs without touching them, so that they can be easily used by modern mobile-first clients but without the need to refactor them or maintain legacy code. The workshop focused on developing a small GraphQL API in NodeJS that would act as a proxy between clients and the legacy API server, by converting GraphQL queries into REST/SOAP/whatever protocol was used upstream. This small API was then converted into an AWS Lambda function and deployed using the [Serverless](https://serverless.com) framework.

[_Slides_](https://docs.google.com/presentation/d/10YvN-INFGwgXzaejvguebwNiGL8wQ7I8kjmfcdRnWRk/edit?usp=sharing) | [_Code_](https://github.com/mikamai/codemotion-ws-breaking-the-monolith)
