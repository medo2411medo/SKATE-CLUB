
function search (value){

    for (let i =0; i < all.length;i++){
        if(all[i].title.includes(value)){
            console.log(i)
        }
    }

}


















/*
function search(value){
    let searchbar = document .querySelector('.search2').value.toUpperCase();
    let productlist = document .querySelector ('.all');
    let product = document .querySelectorAll ('.c');
    let productname = document .getElementsByTagName('.h1');

    for (let i =0 ; i<productname.length; i++) {
        if(productname[i].innerHTML.toUpperCase().indexOf(searchbar) >=0){
            product[i].style.display="";
        } else {
            product[i].style.display="hide";
        }
    }
}
    */