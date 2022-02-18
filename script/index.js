
//create a variable to save the API url
const url = "https://swapi.dev/api/people";
const api = async () => {
    const body = await fetch(url)
    .then((response)=> response.json())
    .then((data)=> {return data.results
    });

    console.log(body);



//create the images array
   let images =[
    "/week-1-node-010-chiomaT/style/images/img1.jpg",
    "/week-1-node-010-chiomaT/style/images/img2.jpg",
    "/week-1-node-010-chiomaT/style/images/img3.jpg",
    "/week-1-node-010-chiomaT/style/images/img4.png", 
    "/week-1-node-010-chiomaT/style/images/img5.png", 
    "/week-1-node-010-chiomaT/style/images/img6.png", 
    "/week-1-node-010-chiomaT/style/images/img7.jpg", 
    "/week-1-node-010-chiomaT/style/images/img8.png", 
    "/week-1-node-010-chiomaT/style/images/img9.png", 
    "/week-1-node-010-chiomaT/style/images/img10.png"
]

//declare an empty variable for the character properties
let name, height, gender;
//loop through the result
body.forEach((property, index) => {
    name = property.name;
    height = property.height;
    gender = property.gender;

console.log(name)
let divCards = document.querySelector('.character-container')
let divImg = document.createElement('div')
divImg.setAttribute('class', 'divImg' )
divCards.append(divImg)
divImg.innerHTML = `

                <!-- Modal -->
                <div class="modal fade" id="exampleModal${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                    <div class="modal-header">
                       
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <p>name : ${name}</p>
                    <p>height : ${height}</p>
                    <p>gender : ${gender}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
                </div>
            
                <img src = ${images[index]} data-bs-toggle="modal" data-bs-target="#exampleModal${index}" >
                <p>${name}</p>
            
                `
});

}

api();


