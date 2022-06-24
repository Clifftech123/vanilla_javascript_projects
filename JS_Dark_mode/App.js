// accessing the dom to get all the htm tags

const themeToggle = document.getElementById('theme-toggle');


// add event listener to the theme toggle 
themeToggle.onclick = () => {
    themeToggle.classList.toggle('fa-sun');
    
    if (themeToggle.classList.contains('fa-sun')) {
    document.body.classList.add('active');
}else {
    document.body.classList.remove('active');
}

}


