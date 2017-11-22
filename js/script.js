/* global firebase */
const portfolioData = document.getElementById("portfolio-data");
const profilePic = document.getElementById("profile-pic");
const about = document.querySelector(".about");
const fullName = document.querySelector("#engineer");

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBBqnjSpIO7dN392ZgTszBjMLwvWrkpobE",
    authDomain: "portfolio-d4fa3.firebaseapp.com",
    databaseURL: "https://portfolio-d4fa3.firebaseio.com",
    projectId: "portfolio-d4fa3",
    storageBucket: "portfolio-d4fa3.appspot.com",
    messagingSenderId: "1042241920069"
};
firebase.initializeApp(config);

const info = firebase.database().ref("info");
info.on('value', function(snapshot) {
    const info = snapshot.val();
    console.log(snapshot.val());
    profilePic.innerHTML = `
        <img class="profile-pic" src="${info.profilePic}" width="200px" height="200px">
    `;
    about.innerHTML = info.aboutMe;
    fullName.innerHTML = info.firstName + " " + info.lastName;
});

const projects = firebase.database().ref("projects");
projects.on("value", function(snapshot) {
    const projects = snapshot.val();
    portfolioData.innerHTML = `
        <div class="col-md-4 project project-row-2">
            <h4>${projects["projectTwo"].title}</h4>
            <a href=""><img src="${projects["projectTwo"].projectImgUrl}" alt="page construction" height="200px" width="200px" /></a>
            <br><button class="btn btn-primary" type="button"><a href="${projects["projectTwo"].liveSiteUrl}">Live Site</a></button><button class="btn btn-success" type="button"><a href="${projects["projectTwo"].sourceUrl}">Source Code</a></button>
        </div>
        <div class="col-md-4 project project-row-2">
            <h4>${projects["projectThree"].title}</h4>
            <a href=""><img src="${projects["projectThree"].projectImgUrl}" alt="page construction" height="200px" width="200px" /></a>
            <br><button class="btn btn-primary" type="button"><a href="${projects["projectThree"].liveSiteUrl}">Live Site</a></button><button class="btn btn-success" type="button"><a href="${projects["projectThree"].sourceUrl}">Source Code</a></button>
        </div>
        <div class="col-md-4 project project-row-2">
            <h4>${projects["projectFour"].title}</h4>
            <a href=""><img src="${projects["projectFour"].projectImgUrl}" alt="page construction" height="200px" width="200px" /></a>
            <br><button class="btn btn-primary" type="button"><a href="${projects["projectFour"].liveSiteUrl}">Live Site</a></button><button class="btn btn-success" type="button"><a href="${projects["projectFour"].sourceUrl}">Source Code</a></button>
        </div>
        <div class="col-md-4 project project-row-2">
            <h4>${projects["projectFive"].title}</h4>
            <a href=""><img src="${projects["projectFive"].projectImgUrl}" alt="page construction" height="200px" width="200px" /></a>
            <br><button class="btn btn-primary" type="button"><a href="${projects["projectFive"].liveSiteUrl}">Live Site</a></button><button class="btn btn-success" type="button"><a href="${projects["projectFive"].sourceUrl}">Source Code</a></button>
        </div>
        <div class="col-md-4 project project-row-2">
            <h4>${projects["projectSix"].title}</h4>
            <a href=""><img src="${projects["projectSix"].projectImgUrl}" alt="page construction" height="200px" width="200px" /></a>
            <br><button class="btn btn-primary" type="button"><a href="${projects["projectSix"].liveSiteUrl}">Live Site</a></button><button class="btn btn-success" type="button"><a href="${projects["projectSix"].sourceUrl}">Source Code</a></button>
        </div>
        <div class="col-md-4 project project-row-2">
            <h4>${projects["projectSeven"].title}</h4>
            <a href=""><img src="${projects["projectSeven"].projectImgUrl}" alt="page construction" height="200px" width="200px" /></a>
            <br><button class="btn btn-primary" type="button"><a href="${projects["projectSeven"].liveSiteUrl}">Live Site</a></button><button class="btn btn-success" type="button"><a href="${projects["projectSeven"].sourceUrl}">Source Code</a></button>
        </div>
    `;
});

