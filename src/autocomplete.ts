const search = document.getElementById("search") as HTMLInputElement;
const list = document.getElementById("match-list")!;
import { countries } from "./countries";

function searchCountry(searchtext: string) {
  let searchedcountry: string[] = [];

  for (let i = 0; i < countries.length; i++) {
    if (
      countries[i].substr(0, searchtext.length).toUpperCase() ==
      searchtext.toUpperCase()
    ) {
      //    searchedcountry.push( countries[i].substr(0, searchtext.length));
      searchedcountry.push(countries[i]);
    }
  }
  if (searchtext.length == 0) {
    searchedcountry = [];
    list.innerHTML = "";
  }
  outputHtml(searchedcountry);
}
function outputHtml(input: string[]) {
  let htmlArray: string[] = [];
  if (input.length > 0) {
    for (let index = 0; index < input.length; index++) {
      htmlArray.push(`<div class=" text-primary card card-body mb-1">
        <p>${input[index]}</p>
        </div>`);
    }
    let stinghtmlarray = htmlArray.join().replace(/,/g, '');
    list.innerHTML = stinghtmlarray;
  } else list.innerHTML = "";
}
search?.addEventListener("input", () => searchCountry(search.value));
