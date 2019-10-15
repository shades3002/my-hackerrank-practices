$(document).ready(function(){
  // Call Ajax for README.md
  $.ajax({
    dataType: "text",
    url: 'README.md'
  })
  .done(function(response) {
    loadFilejs(response);
  })
  .fail(function() {
    console.log( "error" );
  });

  /**
   * method loadFilejs
   * @param {*} list 
   */
  function loadFilejs (list) {
    // Init values
    let re = /"([\w-]*)"/g;
    let listFileArray = list.split("|");
    let valid = [];
    // We prepare the data
    for (let index = 0; index < listFileArray.length; index++) {
      if(listFileArray[index].match(re) ) {
        valid.push(listFileArray[index].replace(/[" "]/g, ""));
      }
    }
    // We assign the data to the html tags
    for (let index = 0; index < valid.length; index++) {
        $('#result').append(
          '<pre><code class="language-javascript" id="' + valid[index] + '"></code></pre>'
        );
        $( "#" + valid[index] ).load("practices/" + valid[index] + ".js");
    }
    // Load prism-core
    let prism = document.createElement("script");
    prism.type = "text/javascript";
    prism.src = "https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/components/prism-core.min.js";
    // Load prism-autoloader
    let autoloader = document.createElement("script");
    autoloader.type = "text/javascript";
    autoloader.src = "https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/plugins/autoloader/prism-autoloader.min.js";
    // Add DOM
    $("body").append(prism);
    $("body").append(autoloader);
  }
});