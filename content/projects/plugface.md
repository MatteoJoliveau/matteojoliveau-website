---
title: PlugFace Framework
repository: https://github.com/matteojoliveau/plugface
website: https://plugface.matteojoliveau.com
description: PlugFace is the simple, friction-free Java plugin framework that allows
  you to load classes at runtime without having to worry about anything.
weight: 20
language: java
draft: true
images:
- https://d1r70b9eh1brae.cloudfront.net/plugface.png
tags:
- open source
- plugin
- framework

---
PlugFace allows to easily define, load and manage plugins in Java. Plugins are simply class that are loaded into an application at runtime, without the need to have them available at compile time.  

**PLUGFACE IS STILL IN EARLY DEVELOPMENT. WAIT FOR THE 1.0.0-RELEASE FOR PRODUCTION USE**   
*This README refers to versions 0.6.0+ which has undergone a major rewrite*

PlugFace is a simple, lightweight, high abstraction plugin framework for Java applications.
It focuses on simplicity, easy and clean API and modularity. Visit the [Documentation](https://plugface.matteojoliveau.com) for more in-depth information.  

**Browse the Javadoc [here](https://plugface.matteojoliveau.com/apidocs/plugface-core/index.html)**  

## Core Concepts

* Simple `Plugin` annotation to mark entry points to be loaded and registered in the classpath at runtime.
* `PluginManager` utility class to load, configure and register plugins. It should be the primary way for applications to manage the PlugFace echosystems.
* A `PluginContext` that acts as a repository for registered plugins and managers. It holds the reference to all the plugins that have been registered.
* Pluggable source mechanism. Implementing the `PluginSource` interface allows for nearly infinite possibilities as to from where plugins are loaded.
* **Dependency injection**: plugins can require other plugins using the standard Java `@Inject` annotation. If using the `plugface-spring` module for
Spring integration, plugins can also have Spring bean injected in their constructors (but not the other way around). (See [Dependency Injection](https://plugface.matteojoliveau.com/docs/dependency-injection.html))

### Download

There are many ways to download PlugFace. The easiest one is to use a build management system like **Maven** or **Gradle**.  
Check out the **[Download](https://plugface.matteojoliveau.com/docs/install-maven.html)** section of the Docs for the full list.  
*If using Spring Framework you may want to use `plugface-spring` instead of `plugface-core` for an out-of-the-box integration*

To download the latest stable release in Maven, add the following snippet to the `<dependencies>` section of your pom.xml:
<!-- markdownlint-disable no-inline-html -->
{{< highlight xml >}}
<dependency>
    <groupId>org.plugface</groupId>
    <artifactId>plugface-core</artifactId>
    <version>${release.version}</version>
</dependency>
{{< / highlight >}}
<!-- markdownlint-enable no-inline-html -->

For Gradle, add the following lines to `build.gradle`:
{{< highlight gradle>}}
repositories {
    mavenCentral()
}
{{< / highlight >}}
Then add:
{{< highlight gradle>}}
dependencies {
    compile 'org.plugface:plugface-core:$RELEASEVERSION'
}
{{< / highlight >}}

### Quick Start

Check out the [Quickstart](https://plugface.matteojoliveau.com/docs/app-quickstart.html) guides for more detailed instructions.

### License

*The MIT License*  
**Copyright 2017 Matteo Joliveau**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.