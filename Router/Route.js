export default class Route {
    constructor(url, title, pathHtml, authorize,  pathJS = "") {
      this.url = url;
      this.title = title;
      this.pathHtml = pathHtml;
      this.pathJS = pathJS;
      this.authorize = authorize;
    }
}

/*
[] > tout le monde peut y accéder
["disconnected"] > réservé aux utilisateurs déconnectés
["client"] > réservé aux utilisateurs avec le rôle client
["admin"] > réservé aux utilisateurs avec le rôle admin
["admin", "client"] > réservé aux utilisateurs avec le rôle client OU admin
*/