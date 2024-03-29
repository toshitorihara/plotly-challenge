# Belly Button Biodiversity

<p align="left">
<img src="https://github.com/toshitorihara/plotly-challenge/blob/main/Images/bacteria.jpg" height="30%" width="30%">
</p>

The purpose of this project is to build an interactive dashboard to explore the [**Belly Button Biodiversity**](http://robdunnlab.com/projects/belly-button-biodiversity/) dataset, which catalogs the microbes that colonize human navels. The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Instructions
1. Use the D3 library to read in `samples.json`.
2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
    * Use `sample_values` as the values for the bar chart.
    * Use `otu_ids` as the labels for the bar chart.
    * Use `otu_labels` as the hovertext for the chart.
3. Create a bubble chart that displays each sample.
    * Use `otu_ids` for the x values.
    * Use `sample_values` for the y values.
    * Use `sample_values` for the marker size.
    * Use `otu_ids` for the marker colors
    * Use `otu_labels` for the text val
4. Display the sample metadata, i.e., an individual's demographic information.
5. Display each key-value pair from the metadata JSON object somewhere on the page.
6. Update all of the plots any time that a new sample is selected.

<p align="center">
<img src="https://github.com/toshitorihara/plotly-challenge/blob/main/Images/hw02.png" height="100%" width="100%">
</p>
