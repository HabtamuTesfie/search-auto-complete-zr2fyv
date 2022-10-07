import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Auto-Complete using Angular " + VERSION.major;
  keyword = "name";
  public countries = [
    { id: 1, name: "Twiyo" },
    { id: 2, name: "Demimbu" },
    { id: 3, name: "Jaxworks" },
    { id: 4, name: "Skajo" },
    { id: 5, name: "Shufflebeat" },
    { id: 6, name: "Thoughtmix" },
    { id: 7, name: "Mycat" },
    { id: 8, name: "Photobug" },
    { id: 9, name: "Zazio" },
    { id: 10, name: "Vitz" },
    { id: 11, name: "Dablist" },
    { id: 12, name: "Ntag" },
    { id: 13, name: "Kwinu" },
    { id: 14, name: "Trudoo" },
    { id: 15, name: "Yodoo" },
    { id: 16, name: "Demimbu" },
    { id: 17, name: "Thoughtstorm" },
    { id: 18, name: "Trudeo" },
    { id: 19, name: "Tambee" },
    { id: 20, name: "Eayo" },
    { id: 21, name: "Linkbuzz" },
    { id: 22, name: "Avaveo" },
    { id: 23, name: "Twitterlist" },
    { id: 24, name: "Oyoyo" },
    { id: 25, name: "Wordify" },
    { id: 26, name: "Zoomzone" },
    { id: 27, name: "Flashpoint" },
    { id: 28, name: "Katz" },
    { id: 29, name: "Blogpad" },
    { id: 30, name: "Fliptune" },
    { id: 31, name: "Agimba" },
    { id: 32, name: "Mydo" },
    { id: 33, name: "Geba" },
    { id: 34, name: "Katz" },
    { id: 35, name: "Ozu" },
    { id: 36, name: "Photolist" },
    { id: 37, name: "Browsecat" },
    { id: 38, name: "Mydo" },
    { id: 39, name: "Gabvine" },
    { id: 40, name: "Twimm" },
    { id: 41, name: "Buzzshare" },
    { id: 42, name: "Aivee" },
    { id: 43, name: "Jaxbean" },
    { id: 44, name: "Demivee" },
    { id: 45, name: "Dynava" },
    { id: 46, name: "Skyble" },
    { id: 47, name: "Feedfire" },
    { id: 48, name: "Edgepulse" },
    { id: 49, name: "Browsecat" },
    { id: 50, name: "Flashspan" },
    { id: 51, name: "Yotz" },
    { id: 52, name: "Tagchat" },
    { id: 53, name: "DabZ" },
    { id: 54, name: "Skidoo" },
    { id: 55, name: "Skipstorm" },
    { id: 56, name: "Dynabox" },
    { id: 57, name: "Feedfire" },
    { id: 58, name: "Jabbertype" },
    { id: 59, name: "Livepath" },
    { id: 60, name: "Oyoloo" },
    { id: 61, name: "Wordify" },
    { id: 62, name: "Topicshots" },
    { id: 63, name: "Youspan" },
    { id: 64, name: "Voomm" },
    { id: 65, name: "Voomm" },
    { id: 66, name: "InnoZ" },
    { id: 67, name: "Linkbridge" },
    { id: 68, name: "Fatz" },
    { id: 69, name: "Photobug" },
    { id: 70, name: "Mymm" },
    { id: 71, name: "Skyble" },
    { id: 72, name: "Rhynyx" },
    { id: 73, name: "Fadeo" },
    { id: 74, name: "Riffwire" },
    { id: 75, name: "Buzzshare" },
    { id: 76, name: "Abata" },
    { id: 77, name: "Oyoloo" },
    { id: 78, name: "Photolist" },
    { id: 79, name: "Quire" },
    { id: 80, name: "Meejo" },
    { id: 81, name: "Dabjam" },
    { id: 82, name: "Gigaclub" },
    { id: 83, name: "Kwilith" },
    { id: 84, name: "Lajo" },
    { id: 85, name: "Ozu" },
    { id: 86, name: "Livetube" },
    { id: 87, name: "Yombu" },
    { id: 88, name: "Feedfish" },
    { id: 89, name: "Meejo" },
    { id: 90, name: "Agimba" },
    { id: 91, name: "Edgeblab" },
    { id: 92, name: "Linktype" },
    { id: 93, name: "Buzzshare" },
    { id: 94, name: "Yodo" },
    { id: 95, name: "Flashpoint" },
    { id: 96, name: "Oyoloo" },
    { id: 97, name: "Photofeed" },
    { id: 98, name: "Jaxbean" },
    { id: 99, name: "Tagcat" },
    { id: 100, name: "Realpoint" }
  ];

  selectEvent(item) {
    // do something with selected item
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something when input is focused
  }
}
