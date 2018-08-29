// API documentation.......https://swapi.co/documentation
const results = document.querySelector(".results")
const planetImages = {
  "Alderaan" : "https://vignette.wikia.nocookie.net/starwars/images/4/4a/Alderaan.jpg/revision/latest?cb=20061211013805",
  "Yavin IV" : "https://vignette.wikia.nocookie.net/starwars/images/d/d4/Yavin-4-SWCT.png/revision/latest?cb=20170712005330",
  "Hoth": "https://vignette.wikia.nocookie.net/starwars/images/1/1d/Hoth_SWCT.png/revision/latest?cb=20160630022322",
  "Dagobah": "https://vignette.wikia.nocookie.net/starwars/images/4/48/Dagobah_ep3.jpg/revision/latest?cb=20100122163146",
  "Bespin": "https://vignette.wikia.nocookie.net/starwars/images/1/11/Bespin-SWCT.png/revision/latest?cb=20170709211642",
  "Endor": "https://vignette.wikia.nocookie.net/starwars/images/1/1d/Endor_BF2.png/revision/latest?cb=20171014232605",
  "Naboo": "https://vignette.wikia.nocookie.net/swg/images/e/ea/NabooFromSpace.jpg/revision/latest?cb=20060903011613",
  "Coruscant":  "https://vignette.wikia.nocookie.net/jdr-psw/images/e/ec/Coruscant.jpg/revision/latest?cb=20150926073733&path-prefix=fr",
  "Kamino": "https://vignette.wikia.nocookie.net/starwars/images/a/a9/Eaw_Kamino.jpg/revision/latest?cb=20090527045541",
  "Tatooine": "https://vignette.wikia.nocookie.net/starwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131019121937"
}

class GetStarWars{
  constructor(planets){
    this.planets = planets;
    //this.getInfo()
    this.getMultiple(6)
    // this.getMultiple(5.16843216812965464)
  }
  getInfo(num){
    $.ajax({
      url: `https://swapi.co/api/planets/${num}`,
      type: "GET",
      dataType:"json",
      success: data => {
        //console.log(data);
        results.innerHTML += `
        <div class = "container">
        <img src="${this.planets[data.name]}"/>
        <h5> Name:${data.name}</h5>
        <h5> Population: ${data.population}</h5>
        <h5> Diameter:${data.diameter}</h5>
        <h5> Climate:${data.climate}</h5>
        </div>

        `
      },
      error: error => {
        console.log("errrrrrrrrrrrrooooooooooorrrrrrrrrrrrrrr!!!!!!!!!!!!!!!");
      }
    })
  }
  getMultiple(int){
    if(int > 0 && Number.isInteger(int)){
      //create a loop that will call getIInfoas many times as the value of num
      //so for example if num is 6
      //getInfo(1)
      //getInfo(2)
      //getInfo(3)
      //getInfo(4)
      //getInfo(5)
      //getInfo(6)
      for (let i =1;i<=int;i++){
        this.getInfo(i)
      }
    }
  }
}

const planets = new GetStarWars(planetImages);