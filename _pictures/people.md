---
title: people
layout: pictures
---

<style>

    .main {
        flex-basis: 1100px;
    }

    .flex-wrapper {
        display: flex;
    }

    .flex-wrapper img {
        height: 450px;
        padding: 10px;
    }
</style>


<div class="flex-wrapper">
    {% assign image_files = site.static_files | where: "project", 'people' %}
    {% for myimage in image_files %}
        <img src="{{ myimage.path }}" class="img-box">
    {% endfor %}
</div>



