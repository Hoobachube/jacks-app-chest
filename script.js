(function getNavbar(){
    var theScriptHTML = document.getElementById('navbar-template').innerHTML;
    var theTemplate = Handlebars.compile(theScriptHTML);
    var contextObj = {navbar: "navbar"};
    var compiledData = theTemplate(contextObj);

document.getElementById('navbar').innerHTML = compiledData;
}());