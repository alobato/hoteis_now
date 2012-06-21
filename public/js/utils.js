function addFavorites(url, title) {
    var browsName = navigator.appName; 
    if (browsName == "Microsoft Internet Explorer") { 
        window.external.AddFavorite(url, title);
    }
    else if (browsName == "Netscape") {
        alert ("nPara adicionar meu blog ao seu BookMark aperte CTRL+D");
    }
}

