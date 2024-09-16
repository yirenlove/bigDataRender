const totalNum = 1e5 + 5;
const pageSize = 20;
const pageNum = Math.ceil(totalNum / pageSize);

const ul = document.querySelector("ul");

window.onload = ()=>{
  console.timeEnd("index");
  const main = document.querySelector('.main')
  main.style.visibility = 'visible'
  const loading = document.querySelector('.loading')
  loading.style.display = 'none'
}
console.time('index')
function renderer(index) {
  if (index > pageNum) {
    return;
  }
  const start = index * pageSize - pageSize;
  const end = start + pageSize > totalNum ? totalNum : start + pageSize;
  const fragment = document.createDocumentFragment()
  requestAnimationFrame(() => {
    for (let i = start; i < end; i++) {
      const li = document.createElement("li");
      li.innerText = i;
      fragment.appendChild(li);
    }
    ul.append(fragment)
    
  });
    renderer(index + 1);
}

renderer(1);

