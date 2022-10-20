---
title: Food Court
date: 2022-10-20T10:15:04.000+02:00
repository: 
website: https://food-court.fly.dev
weight: 10
language: elixir
tags: ["side project"]
description: |
    Food Court is a web application designed and developed to solve a real personal problem: handling group orders when eating at All-You-Can-Eat sushi restaurants
images:
- https://d1r70b9eh1brae.cloudfront.net/food-court-cover.jpg

---

**Food Court** is a web application to manage group orders at restaurants. I designed and developed it as a side project to solve a real personal problem: handling group orders when eating at All-You-Can-Eat sushi restaurants.

![Food Court room view](https://d1r70b9eh1brae.cloudfront.net/food-court.png){.align=right}

---

## Overview

When eating out at [AYCE] restaurants, they often provide you with a small paper sheet where you have to list all the food you want to order and give it to the waiter. When eating out in groups of more than four people, this practice becomes very messy as everyone may order 5 to 10 different dishes, and overlaps are very common for popular ones.

Food Court was designed as a glorified list application, with a very peculiar feature: list merging. Users can create rooms, which basically represent a specific meal or occasion. Each user in a room has a personal list they can add "items" to. Items are composed of a freeform name, an amount, and an optional price (if the price management feature is enabled for the particular room). Users can then update an item to reflect the amount that has actually arrived at the table, helping tracking large orders and remembering which dishes are still missing.  
Food Court then takes all the items from all the users in the room and merges them into a single, global list. Items are matched by name (lowercased and trimmed of excess whitespaces), so it's important that all users agree on the same naming convention. Usually copying the name from the restaurant menu verbatim works well, but names can be anything, like a number code or some other identifier from the menu.

Items can then be transcribed from the global list to the order sheet quickly and efficiently, as quantities are summed together automatically. Food Court even specifies who ordered each item and in what quantity, helping routing the correct dish to the right person when the waiter arrives with the food.

**Price management** is an optional feature that can be enabled for each room. It allows to assign each item a price, and the app will then compute both the entire room total bill and each user's share based on what they ordered. This helps when splitting the bill, so that each participant only pays for its part without having to manually calculate the shares.

Despite being popular only among my close circle of friends, Food Court is completely free to use for anyone.

## Technical Details

Food Court is written in [Elixir], a dynamic functional programming language for the BEAM runtime. It leverages the popular [Phoenix Framework]'s [LiveView] feature to provide an interactive, soft-realtime experience without the need for big and bulky client-side JavaScript frameworks. It uses [PostgreSQL] as its primary datastore, and [Scaleway Object Storage] to store and serve room cover images. It's deployed on [Fly.io] and fronted by [Bunny CDN] to cache static assets and serve fonts.

The interface is of course fully responsive and the website has been developed in a mobile-first way, as the primary scenario is using the app from a mobile device while at the restaurant.

![Food Court mobile view](https://d1r70b9eh1brae.cloudfront.net/food-court-mobile.jpg)

[AYCE]: https://en.wikipedia.org/wiki/All-you-can-eat_restaurant
[Elixir]: https://elixir-lang.org
[Phoenix Framework]: https://phoenixframework.org
[LiveView]: https://fly.io/blog/how-we-got-to-liveview/
[PostgreSQL]: https://www.postgresql.org/
[Scaleway Object Storage]: https://www.scaleway.com/en/object-storage/
[Fly.io]: https://fly.io
[Bunny CDN]: https://bunny.net