export class Serie {

    idSerie: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    webSite: string;
    img: string;

    constructor(idSerie: number, name: string, channel: string, seasons: number, description: string, webSite: string, img: string) {
        this.idSerie = idSerie;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.webSite = webSite;
        this.img = img;
    }
    
}