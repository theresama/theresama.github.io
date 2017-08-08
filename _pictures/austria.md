---
title: austria
layout: pictures
---

<style>

    .main {
        flex-basis: 900px;
    }

    img {
        width: 100%;
        box-sizing: border-box;
        padding: 1px 3px;
    }
    .fixed {
        position: fixed;
    }
    .inline-b {
        display: inline-block;
    }

    .pull-right {
        float: right;
    }
    .container {
    }
    a, h1, p {
        color: rgb(78, 78, 78);
    }
    h1 {
        font-size: 1.5em;
    }
    a {
        text-decoration: none;
    }
    @media (max-width: 480px) {
        h1 {
            -webkit-margin-before: 0;
            -webkit-margin-after: 0;
        }

        p {
            -webkit-margin-before: 0;
        }
    }
    @media (max-width: 720px) {
        .hide-sm {
            display: none;
        }
    }
</style>

<div class="container">
    <div class="">
        <h1 class="inline-b" style="margin-right: 3px">austria</h1>
        <p class="inline-b">a collection of textures + colours</p>
    </div>

{% assign image_files = site.static_files | where: "project", 'austria' %}
{% for myimage in image_files %}
<div class="box-25">
    <img src="{{ myimage.path }}" data-action="zoom">
</div>
{% endfor %}
</div>

