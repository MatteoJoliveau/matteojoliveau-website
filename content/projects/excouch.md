+++
description = "A pure Elixir client for CouchDB"
images = ["https://d1r70b9eh1brae.cloudfront.net/couch.png"]
language = "elixir"
repository = "https://github.com/enseadaio/ex_couch"
tags = ["open source", "elixir", "couchdb"]
title = "ExCouch"
website = "https://hexdocs.pm/ex_couch"
weight = 35

+++
# ExCouch

A pure Elixir client for CouchDB 2.

## Quick start

The `ExCouch` module can be supervised. Start it as part of your application.
The `url` parameter is required, and should point to the base URL of your
CouchDB instance (e.g. `http://localhost:5984`).
`username` and `password` are optional for unauthenticated servers.

```elixir
defmodule MyApplication do
  use Application
  def start(_type, _args) do
    children = [
      {ExCouch, url: "http://localhost:5984", username: "couch", password: "couch"}
    ]
    
    opts = [strategy: :one_for_one, name: Enseada.Supervisor]
    Supervisor.start_link(children, opts)
  end
end
```

After being started, methods can be called to interact with the server.

```elixir
list = ExCouch.list_databases(limit: 10, skip: 5)

{:ok, "mydb"} = ExCouch.create_database("mydb")

if ExCouch.database_exists?("mydb") do
  {:ok, info} = ExCouch.get_database("mydb")
end
```

## Documentation

Documentation can be found at [https://hexdocs.pm/ex_couch](https://hexdocs.pm/ex_couch).