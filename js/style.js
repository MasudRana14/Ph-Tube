const allCategory = async () => {

    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await response.json();

    const buttonContainer = document.getElementById('button-container');

    data.data.slice(0, 4).forEach((category) => {
        const div = document.createElement('div');
        div.classList = `justify-center text-center gap-5 mt-8 flex md:flex-row lg:flex-row`
        div.innerHTML = `
        <button onclick="buttonClick('${category.category_id}')" class="btn font-medium text-white px-5 py-2 rounded-lg bg-rose-600">${category.category}</button>
        `
        buttonContainer.appendChild(div);
    });
}


const buttonClick = async (categoryId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const data = await response.json();
    const allCardContainer = document.getElementById('card-container');
    allCardContainer.textContent = '';
    data.data.forEach((cardDetails) => {

        const div = document.createElement('div');
        div.classList = `grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-2 mt-8`;
        div.innerHTML = `
            <div class="card card-compact w-full md:w-64 lg:w-64 h-72 bg-base-100 shadow-2xl">
            <figure>
                <img src="${cardDetails.thumbnail}" alt="Shoes" />
            </figure>
            <div class="card-body">
                <div class="flex gap-2">
                    <img class="rounded-full w-10 h-10" src="${cardDetails.authors[0].profile_picture}" alt="">
                    <h2 class="card-title font-bold">${cardDetails.title}</h2>
                </div>
                <div class="ml-12 ">
                    <p class ="flex gap-2">${cardDetails.authors[0].profile_name} ${cardDetails?.authors[0]?.verified ? "<img src=./img/verified.png alt='images'/>" : ""}</p>
                    <p class= "mt-2 font-normal">${cardDetails.others.views} views</p>
                </div>
            </div>
        </div>
            `
        allCardContainer.appendChild(div);
    })

}


// Blog Button Click 
const blogButton = () => {
    window.location.href = 'Blog.html';
}

// Go Home Button 
const goHomeButton = () => {
    window.location.href = 'index.html';
}



allCategory()
buttonClick("1000")
