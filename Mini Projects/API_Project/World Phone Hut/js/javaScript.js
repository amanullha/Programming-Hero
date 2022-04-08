
const searchText = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const alertText = document.getElementById('alert-text');
const spinnerDiv = document.getElementById('spinner-div');

const searchedAllPhone = document.getElementById('phones');
const showMore = document.getElementById('more-phones');
let isShowMore = undefined;
let unShowedPhones = undefined;



const spinnerControl = (isShow) => {
    if (isShow == true) {
        spinnerDiv.classList.remove("d-none");

    } else {
        spinnerDiv.classList.add("d-none");
    }

}

const NumberOfPhones = n => {
    if (n == 0) {
        alertText.innerText = `No Phone found for this name ${phoneName}`;

        alertText.style.color = 'red';
    }
    else {
        alertText.innerText = `${n} Phones found 😎 `;

        alertText.style.color = 'green';
    }
}


// generate random price for new phone

const priceGenerator = () => Math.random() * 100000;

// spinner control


// clear alert when enter a cheracture
searchText.addEventListener('keypress', function
    () {
    alertText.innerText = '';
})


// searchd button clicked events
searchBtn.addEventListener('click', function
    () {

    // disable show more button after new search
    showMore.style.display = "none";
    isShowMore = false;

    // check empty search
    if (searchText.value.length == 0) {
        alertText.innerText = "😝 Please write something to search";
        alertText.style.color = "red";
    }
    else {
        // spinner show
        spinnerControl(true);

        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText.value}`;
        //clear search Text
        searchText.value = "";

        fetchData(url);
    }
})



const fetchData = async (url) => {

    try {

        const response = await fetch(url);
        const datas = await response.json();

        NumberOfPhones(datas.data.length);

        // clear previous searched phones
        searchedAllPhone.innerHTML = '';

        displayPhone(datas.data);

    } catch (error) {

        searchedAllPhone.innerHTML = '';
        spinnerControl(false);

        // alertText.innerText = error;
        alertText.innerText = " Data not found!!";
        alertText.style.color = 'red';
    }

}


function displayPhone(phonesCollection) {

    // hide spinner 
    spinnerControl(false);


    var phones = undefined;


    // keep 20 phone or less then 20
    if (phonesCollection.length <= 20) {

        // disable show more button
        showMore.style.display = "none";
        isShowMore = false;

        phones = phonesCollection;
    }
    else {

        // enable show more button
        showMore.style.display = "block";
        isShowMore = true;

        phones = phonesCollection.slice(0, 20);

        // store unshowed phone 
        unShowedPhones = phonesCollection.slice(20, phonesCollection.length);
    }

    phones.forEach(phone => {

        createNewPhone(phone);
    });



}

// create new phone div

const createNewPhone = phone => {
    // console.log(phone);


    const pName = phone.phone_name;
    const pBrand = phone.brand;
    const pSlug = phone.slug;
    const pImage = phone.image;
    const pPrice = parseInt(priceGenerator());


    // create new div for new phone, then add as child of phones div

    const newPhone = document.createElement("div");

    newPhone.classList.add("phone");
    newPhone.classList.add("position-relative");
    newPhone.classList.add("col");
    newPhone.classList.add("mb-2");

    newPhone.innerHTML = `


 <div class="card w-100">

                        <div class="card-img-top w-75 mx-auto">
                            <img src="${pImage}"
                                class="card-img w-100" alt="...">
                        </div>

                        <div class="card-body">
                            <h5 class="card-title text-center">${pName}</h5>
                        </div>

                        <ul class="list-group-display list-group list-group-flush">
                            <li class="list-group-item">brand: ${pBrand}</li>
                            
                            <li class="list-group-item">Price: $${pPrice}</li>
                        </ul>

                        <div class=" card-end-body card-body">



                            <div id="phone-review-links" class="phone-review-links  d-flex justify-content-between ">

                                <a href="#" class=" phone-review-link">Review</a>

                                <a href="#" class="  phone-review-link">Review</a>

                            </div>

                            <br>

                          
                        <button onclick="loadPhoneDetails('${pSlug}')"
                                class="w-100 details-btn btn btn-primary d-inline-block w-100" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Details</button>


                        </div>
 </div>
    
    `;

    searchedAllPhone.appendChild(newPhone);
}



// click phone details 

const loadPhoneDetails = async (phoneId) => {



    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
    // fetch data 
    try {

        const response = await fetch(url);
        const datas = await response.json();





        const pName = datas.data.name;
        const pBrand = datas.data.brand;
        const pImage = datas.data.image;
        const mainFeatures = datas.data.mainFeatures;
        const pStorage = mainFeatures.storage;
        const pChipSet = mainFeatures.chipSet
        const PDisplaySize = mainFeatures.displaySize;
        const pMemory = mainFeatures.memory
        const pSensors = mainFeatures.sensors;
        // let pReleaseDate = datas.data.releaseDate;
        // pReleaseDate = undefined ? "Date not found!" : pReleaseDate;

        // if (pReleaseDate == undefined) {
        //     pReleaseDate = "Release Data Not found";

        // }


        let pReleaseDate = datas.data.releaseDate ? datas.data.releaseDate : "Release Data Not found";





        const xp = `<li class="col-sm-6">hello</li>`;

        let pOthers = datas.data?.others;






        const div = document.createElement('div');
        div.classList.add("modal-content")


        div.innerHTML = `
                        <div class="modal-header">

                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                        </div>




                        
                        <div
                            id="card-modal" class="card-modal w-100   justify-content-center  align-items-center d-flex flex-column flex-md-row">

                            <div
                                class="p-4 card-img-top w-100 d-flex justify-content-center align-content-center ">
                                <img src="${pImage}"
                                    class="card-img w-100 " alt="...">
                            </div>

                            <div class="mobile-details w-100 p-2">
                                <div class="des-title">
                                    <h2 class="fw-bold ms-3">${pName}</h2>

                                    <div class="d-flex align-content-center ">
                                        <img class="release-icon ms-3 me-3" src="images/logo/release-1.png" alt=""
                                            srcset="">
                                        <h4>${pReleaseDate}</h4>
                                    </div>
                                </div>

                                <ul class="row des-features  m-3">
                                    <li class="col-sm-6">${pMemory}</li>
                                    <li class="col-sm-6">${PDisplaySize}</li>
                                    <li class="col-sm-6">${pStorage}</li>
                                    <li class="col-sm-6">${pChipSet}</li>
                                    ${xp};
                                </ul>

                                <h4 class="ps-3">Sensors </h4>

                                <ul id="phone-sensors" class="row des-features  m-3 ">
                                    
                                </ul>

                                <h4 id="des-others-heading" class="ps-3 ">Others </h4>

                                 <ul id="des-others" class="row des-features  m-3 ">
                                    
                                </ul>



                                
                                <div class="des-price ps-3">
                                    <h3>Price : $<span class="text-white">55555</span></h3>
                                    <h3>MRP: <span class="text-warning text-m text-decoration-line-through">5000</span>
                                        <span class="text-success">4% OFF</span>
                                    </h3>
                                </div>


                                <div class="des-add-card ps-3">
                                    <a class="btn add-card-btn" data-position="1"><b class="icon-addcart"></b>Add
                                        to Cart</a>
                                </div>
                            </div>

                        </div>
    

`;




        const modalDialog = document.getElementById("modal-dialog");

        modalDialog.innerHTML = "";

        modalDialog.appendChild(div);


        // add sensors
        const phoneSensors = document.getElementById("phone-sensors");


        if (pSensors.length > 0) {
            for (const sen of pSensors) {

                const li = document.createElement('li');
                li.classList.add('col-sm-6');
                li.innerText = sen;
                phoneSensors.appendChild(li)
            }
        }


        // others


        if (pOthers == undefined) {
            document.getElementById("des-others-heading").style.display = "none";

        }


        const desOthers = document.getElementById("des-others");

        // console.log("others " + pOthers.length);


        if (pOthers != undefined) {

            document.getElementById("des-others-heading").style.display = "block";

            for (const [key, value] of Object.entries(pOthers)) {
                // console.log(`${key}:-> ${value}`);

                const li = document.createElement('li');
                li.classList.add('col-sm-6');
                li.innerText = `${key}: ${value}`;
                desOthers.appendChild(li)
            }
        }
        else {
            document.getElementById("des-others-heading").style.display = "none";

            // console.log("not found Others");
        }




    } catch (error) {

        // console.log(error);
        alertText.innerText = error;
        alertText.style.color = 'red';
    }



}


// show more

document.getElementById("show-more-btn").addEventListener('click', function
    () {

    if (isShowMore == true) {
        ;
        unShowedPhones.forEach(phone => {

            createNewPhone(phone);
        });

        // disable show more button
        showMore.style.display = "none";
        isShowMore = false;
    }
})



// phone hovered checked
