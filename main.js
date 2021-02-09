class PhotoGallery{
    constructor(){
        this.galleryDiv = document.querySelector('.gallery');
        this.searchForm = document.querySelector('.header form');
        this.loadMore = document.querySelector('.load-more');
        eventHandle(); 

    }
eventHandle(){
    document.addEventListener('DOMContentLoaded', ()=>{
        this.getImg();
    });
}
async getImg(){
    const baseURL = 'https://jsonplaceholder.typicode.com/photos ';
    const response = await fetch(baseURL,{
    method: 'GET',
    headers:{
        Accept: 'application/json',
    }
});
console.log(response)

}
}
const gallery = new PhotoGallery;