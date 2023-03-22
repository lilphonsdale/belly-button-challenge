// Identify the source of the data and store it in a variable

const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"


// populate the default dashboard

function init() {
  d3.json("samples.json").then((data) => {
    console.log(data)
    let samples = data.samples;

    // Populate the dropdown menu
    let sampleIDs = samples.map(x => x.id)

        var choices = d3.select("#selDataset");
        Object.entries(sampleIDs).forEach(([k,v]) => {
          choices.append("option").attr("value", v).text(v)});

            // choices.onchange = function () {
            // var choice = choices.property("value");
            // console.log(choice);
            // console.log(samples[choice])
            // buildCharts(samples[choice]);
            // };

            let firstSample = sampleIDs[0];
            buildCharts(firstSample)
          }
        )};

function buildCharts(sample) {
   buildBarChart(sample);
}

function optionChanged(newSample) {
  buildBarChart (newSample);
}

function buildBarChart(sample) {
   d3.json(url).then((data) => {
    let samples = data.samples;
    let sampleofInterest = samples.filter(x => x.id == sample);
    let firstSample = sampleofInterest[0]
    let otuIds = firstSample.otu_labels
    let sampleValues = firstSample.sample_values
    let otuLabels =  firstSample.otu_labels

      var plot_data = [
        {
          x: otuIds,
          y: sampleValues,
          labels: otuLabels,
          type: "bar"
        }]
      layout = {
          title: "Graph"
      }
    Plotly.newPlot("bar", plot_data, layout);
    

    var bubbleData = [
      {
      x: otuIds.slice(0, 10).reverse(),
      y: sampleValues.slice(0, 10).reverse(),
      text: sampleValues.slice(0, 10).reverse(),
      mode: 'markers',
      marker: {
        size: sampleValues.slice(0, 10).reverse(),
        color: otuIds.slice(0, 10).reverse(),
        colorscale: 'sequential' 
      }}
    ];

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title: "<b>Bacteria Cultures Per Sample</b>",
      xaxis: {title: "OTU ID"},
      margin:{
        l: 50,
        r: 50,
        b: 100,
        t: 100,
        pad: 4
      },
      showlegend: false,
      hovermode: 'closest'
    };

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot("bubble", bubbleData, bubbleLayout);
  })
}


// // Fetch the JSON data 

//   d3.json(url).then(function (data) {
//     let names = data.names
//     let samples = data.samples
//   // console.log(names);
//     let sample_values = samples.map(function (x) {
//       return x.sample_values;
//     });
//     console.log(sample_values)

//     // // Use otu_ids as the labels for the bar chart.

//     let otu_ids = samples.map(function (x) {
//     return x.otu_ids});
// es
//     // // Use otu_labels as the hovertext for the chart.

//     let otu_labels = samples.map(function (x) {
//     return x.otu_labels});

//     // Use the names to populate the dropdown menu

//     var choices = d3.select("#selDataset");
//     Object.entries(names).forEach(([k,v]) => {
//       choices.append("option").attr("value", v).text(v)});

//     choices.onchange = function () {
//     var choice = choices.property("value");
//     console.log(choice);
//     console.log(samples[choice])
//     create_plot(samples[choice]);
//     };


//   // make a first plot to greet us on the page

//     function create_plot(d){
//       plot_data = [
//         {
//           x: sample_values[d],
//           y: otu_ids[d],
//           labels: otu_labels[d],
//           type: "bar"
//         }]
//       layout = {
//           title: "Graph"
//       }
//     Plotly.newPlot("bar", plot_data, layout);
// }
// // function update_plot(d){
// //   let values = Object.values(d);
// //   let labels =  Object.keys(d);
// //   Plotly.restyle("pie", "values", [values]);
// //   Plotly.restyle("pie", "labels", [labels]);
// // }

// create_plot(0);
// });
// }

init()

// function optionChanged(newSample) {
//   // Fetch new data each time a new sample is selected
//   buildMetadata(newSample);
//   buildCharts(newSample); 
// }

// Display the default plot
  // function init() {
  // let d = [{
  //   values: sample_values[0],
  //   labels: otu_ids[0],
  //   type: "bar"
  // }];

  
  // };

  // Plotly.newPlot("bar", d, layout);
  // // };

// Demographics Panel 
// function buildMetadata(sample) {
//   d3.json(url).then((data) => {
//     var metadata = data.metadata;
//     // Filter the data for the object with the desired sample number
//     var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
//     var result = resultArray[0];
//     // Use d3 to select the panel with id of `#sample-metadata`
//     var PANEL = d3.select("#sample-metadata");

//     // Use `.html("") to clear any existing metadata
//     PANEL.html("");

//     // Use `Object.entries` to add each key and value pair to the panel
//     // Hint: Inside the loop, you will need to use d3 to append new
//     // tags for each key-value in the metadata.
//     Object.entries(result).forEach(([key, value]) => {
//       PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
//     });

//   });
// }


// var choices = d3.select("#selDataset");
// Object.entries(names).forEach(([k,v])=>{
//     choices.append("option").attr("value",k).text(k)
// });

// choices.onchange = function(){
//     var choice = choices.property("value");
//     console.log(choice);
//     console.log(samples[choice]);
    // create_plot(samples[choice]);
// };

// function create_plot(d){
//     plot_data = [
//         {
//             values: Object.values(d),
//             labels: Object.values(d)
//         }
//     ]
//     Plotly.newPlot("bar",plot_data);
// };\

// function init() {
//   var selector = d3.select("#selDataset");

//   d3.json(url).then((data) => {
//     console.log(data);
//     var sampleNames = data.names;
//     sampleNames.forEach((sample) => {
//       selector
//         .append("option")
//         .text(sample)
//         .property("value", sample);
//     });
// })}

// init();

// function optionChanged(newSample) {
//   console.log(newSample);
//   buildMetadata(newSample);
//   //buildCharts(newSample);
// }

// function buildMetadata(sample) {
//   d3.json(url).then((data) => {
//     var metadata = data.metadata;
//     var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
//     var result = resultArray[0];
//     var PANEL = d3.select("#sample-metadata");

//     PANEL.html("");
//     PANEL.append("h6").text("ID: " + result.id);
//     PANEL.append("h6").text("Ethnicity: " + result.ethnicity);
//     PANEL.append("h6").text("Gender: " + result.gender);
//     PANEL.append("h6").text("Age: " + result.age);
//     PANEL.append("h6").text("Location: " + result.location);
//     PANEL.append("h6").text("BB-type: " + result.bb_type);
//     PANEL.append("h6").text("WFREQ: " + result.wfreq);
//   });
// }


// // Use sample_values as the values for the bar chart.

//   let sample_values = samples.map(function (x) {
//     return x.sample_values;
//   });

//   // Use otu_ids as the labels for the bar chart.

//   let otu_ids = samples.map(function (x) {
//     return x.otu_ids;
//   });

//   // Use otu_labels as the hovertext for the chart.

//   let otu_labels = samples.map(function (x) {
//     return x.otu_labels;
//   });

//   console.log("sample_values:", sample_values)
//   console.log("otu_ids:", otu_ids)
//   console.log("otu_labels:", otu_labels)




