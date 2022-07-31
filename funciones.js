function doGet()
{
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda GAS');
}

function obtenerDatosHtml(nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}