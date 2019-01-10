var images=document.querySelectorAll("img");
console.log(images);

function myFunction(){
    console.log('You are over '+this);
    this.style.boxShadow = '10px 10px 8px grey';
}

function myFunction1()
{
    console.log('You went away from '+this);
    this.style.boxShadow = '';
}

for(var i=0;i<images.length;i++)
{
    images[i].addEventListener('mouseover',myFunction);
    images[i].addEventListener('mouseout',myFunction1);
}




