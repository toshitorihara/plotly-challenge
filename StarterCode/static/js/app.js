function dropDownMenu() {
    var menu = d3.select("#selDataset");

    d3.json("samples.json").then((data) => {
        var sampleName = data.names;
        sampleName.forEach((name) => {
            menu
            .append("option")
            .text(name)
            .property("value", name);                
        });

        const defaultSample = sampleName[0];
        demoTable(defaultSample);
        charting(defaultSample);
    });
}

function optionChanged(sampleName) {
    demoTable(sampleName)
    charting(sampleName);
}

function demoTable(sampleName) {
    d3.json("samples.json").then((data) => {
        var tabInfo = data.metadata;
        console.log(tabInfo)
        var filtered = tabInfo.filter(x => x.id == sampleName)[0];
        console.log(filtered)
        var tablegraphic = d3.select("#sample-metadata");
        tablegraphic.html("")

        Object.entries(filtered).forEach(([key,value]) => {
            var row = tablegraphic.append('tr');
            var cell = tablegraphic.append('td');
            cell.text(key.toUpperCase() + `: ${value}`)
            var cell = row.append('td');
        });
        buildGauge(filtered.wfreq);
    });
}

function charting(sampleName) {
    d3.json("samples.json").then((data) => {
        var tabInfo = data.samples;
        var filtered = tabInfo.filter(x => x.id.toString() === sampleName)[0];
        console.log(filtered)
        var otu_ids = filtered.otu_ids;
        var otu_labels = filtered.otu_labels
        var sample_values = filtered.sample_values;
        
        var trace1 = {
            type: "bar",
            orientation: "h",
            x: sample_values.slice(0,10).reverse(),
            y: otu_ids.slice(0,10).reverse().map(x => `OTU ${x}`),
        };

        var data1 = [trace1];

        var layout1 = {
            title: "Top 10 OTU",
            xaxis: { title: "OTU (Operational Taxonomic Unit) Labels" },
            yaxis: { title: "OTU (Operational Taxonomic Unit) IDs" }
        };
        Plotly.newPlot("bar", data1, layout1);

        var size = sample_values
        var trace2 = {
            x: otu_ids,
            y: sample_values,
            mode: 'markers',
            text: otu_labels,
            marker: {
                size: size,
                color: otu_ids,
                colorscale: "Earth"
            }
        };

        var data2 = [trace2];

        var layout2 = {
            title: 'Cultures per Sample',
            margin: { t: 25, r: 25, l: 25, b: 25 },
            showlegend: false,
            hovermode: 'closest',
            xaxis: {
                title:"OTU (Operational Taxonomic Unit) ID  from Sample " +sampleName
            },
            margin: {t:50}
        };
        Plotly.newPlot("bubble", data2, layout2);
    });
}

dropDownMenu();