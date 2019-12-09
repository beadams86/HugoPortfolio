+++ 
date = "2019-10-20"
title = "UI/UX Design & Development for Biobanking App"
blurb = "A prominent university's medical department was in the early stages of developing a Biobanking application to be used by medical researchers and doctors. The application would allow, for the first time, users to connect datasets from multiple systems and formats, and ultimately do analysis on that data from the browser. E84 and I were brought on to help provide a more user-friendly experience and ultimately implement an MVP version of the app."
image = "images/portfolio/biobank_preview.jpg"
splash = "images/portfolio/biobank_preview.jpg"
slug = "biobank-design" 
tags = ["UI/UX Design", "Web Development"]
type = "portfolio"
+++


<div class="row">
    <div class="eight columns offset-by-two">
        <h3>Uncharted territory</h3>
        <p>The biggest challenge of this project was that it was attempting to solve multiple, very complex problems, most of all the connecting of disparate data from various systems with their own formats.</p>
        <p>Our team noticed early on the potential issues with an overly-complex application that was trying to do too much, and we convinced stakeholders to scale back the features in order to focus on the core of the application:
        <ol><li>Connecting disparate data</li>
        <li>Analyzing the connected data</strong></li>
        </ul></p>
<br><br>

<h3>Making sense of the user flow</h3>
<img src="images/portfolio/biobank/Previous_UserFlow.png" class="portfolio-image" />
</div>
</div>
<img src="images/portfolio/biobank/Optimized_UserFlow.png" class="portfolio-image" />


<div class="row">
    <div class="eight columns offset-by-two">
        <h3>How to connect different formats</h3>
        <p>The biggest achievement this application makes is that it gives the user full control over the formatting of their patient IDs, which are ultimately used to link the datasets.</p>
        <p>For example, if you have two datasets that format their patient ID differently, the system has no way of knowing patient <strong>Jan01</strong> is the same as <strong>01-Jan</strong>, but through a series of UI interactions we are able to correctly link this example.</p>
    </div>
</div>
<img src="images/portfolio/biobank/FormatID.png" class="portfolio-image" />


<div class="row">
    <div class="eight columns offset-by-two">
        <h3>Organizing large datasets</h3>
        <p>Once we're able to successfully connect the disparate datasets we now need a way to analyze that data. Based on input from potential users, this would be done in a data table format. The layout and implementation of the data table would undergo many different variations and testing before we ultimately landed at what we have now.</p>
        <p>The data table columns are controlled by a collapsible left-hand bar organized and color-coded by source. This color-coding carries over into the table itself, providing users the ability to quickly discern which source a given column belongs to.</p>
    </div>
</div>
<img src="images/portfolio/biobank/DataTable_SourceSignifiers.png" class="portfolio-image" />
<div class="row">
    <div class="eight columns offset-by-two">
        <h3>Advanced Searching</h3>
        <p>One new feature we've been working on is an Advanced Search capability, that will allow users to broadly or narrowly filter down the data table in ways the inline column filtering doesn't easily allow. </p>
    </div>
</div>
<img src="images/portfolio/biobank/DataTable_AdvancedSearch.gif" class="portfolio-image" />