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

    @media (max-width: 600px) {
        .flex-wrapper {
            display: block
        }

        .flex-wrapper img {
            height: auto !important;
            width: 100%;
            padding: 10px 0 !important;
        }
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



