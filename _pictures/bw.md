---
title: b&w
layout: pictures
---

<style>
    
    .main {
        flex-basis: 900px;
    }

    .img-box {
        width: 100%;
        height: 100%;
        padding: 10px 0;
    }

    .flex-col {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        flex-basis: 0;
        margin: 10px;
    }

    .flex-row {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
    }
</style>

<div class="flex-row">

{% assign image_files = site.static_files | where: "project", 'bw' %}
<div class="flex-col">
{% for myimage in image_files limit:5 %}
    <img src="{{ myimage.path }}" class="img-box" data-action="zoom">
{% endfor %}
</div>

<div class="flex-col">
{% for myimage in image_files offset:5 %}
    <img src="{{ myimage.path }}" class="img-box" data-action="zoom">
{% endfor %}
</div>

</div>

