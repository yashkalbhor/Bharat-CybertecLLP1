
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.3
});

document.querySelectorAll(".service-image,.service-info").forEach(el=>{
    observer.observe(el);
});
