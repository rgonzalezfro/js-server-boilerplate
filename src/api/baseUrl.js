export default () => {
    const development = getQueryStringParameterByName('useMockApi');
    return development ? 'http://localhost:3001/' : '/';
}

function getQueryStringParameterByName(name, url) {
    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]"); //eslint-disable-line no-useless-escape
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(url);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
