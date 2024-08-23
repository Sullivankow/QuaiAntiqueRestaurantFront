

const galerieImage = document.getElementById("allImage");



//Récupérer les informations des images

let titre = "fgdfhfdgh";
let imgSource = "../Images/pexels-fecundap6-351679.jpg";

let monImage = getImage(titre, imgSource );

galerieImage.innerHTML = monImage




function getImage(titre, urlImage){
    titre = sanitizeHtml(titre);
    urlImage = sanitizeHtml(urlImage);
    return `<div class="col p-3">
<div class="image-card text-white">
<img src="${urlImage}" class="rounded w-100"/>
<p class="titre-image">${titre}</p>
<div class="action-image-button" data-show="admin">
    <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#EditionPhotoModal"><i class="bi bi-pencil-square"></i></button>
    <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#DeletePhotoModal"><i class="bi bi-trash"></i></button>
    </div>
</div>
</div>`;
}