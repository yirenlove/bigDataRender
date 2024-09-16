
const totalNum = 5e4 + 5;
const pageSize = 20;
const pageNum = Math.ceil(totalNum / pageSize);
const itemHeight = 25;

const ul = document.querySelector("ul");
ul.style.height = pageSize * itemHeight +5+ "px";
const observer = new IntersectionObserver(entries=>{
    console.log('entries')
    const fragment = document.createDocumentFragment();
    const start = entries[0].target.offsetTop / itemHeight;
    const end = pageNum > 1 ? start + pageSize : totalNum;
    for(let i=start;i<end;i++){
        const li = document.createElement("li");
        li.innerText = i;
        fragment.appendChild(li);
    }
    ul.insertBefore(fragment,entries[0].target)
},{
    root:ul,
    rootMargin:'0px',
    threshold:1
})

window.onload = (e)=>{
    console.log(e)
    observer.observe(document.querySelector('#loading'))
}

