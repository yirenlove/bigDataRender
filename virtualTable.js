const ul = document.querySelector("ul");
const wraper = document.querySelector(".wraper");
const placeholder = document.querySelector(".placeHolder");
const totalNum = 1e5 + 5;
const pageSize = 20;
const pageNum = Math.ceil(totalNum / pageSize);
const itemHeight = 25;

placeholder.style.height = itemHeight * totalNum + "px";
for (let i = 0; i < pageSize; i++) {
  const li = document.createElement("li");
  li.innerHTML = i;
  li.style.boxSizing = "border-box";
  li.style.borderBottom = "1px solid";
  li.style.height = itemHeight + "px";
  ul.appendChild(li);
}
wraper.addEventListener("scroll", function (e) {
  const scrollTop = e.target.scrollTop;
  const scrolledCnt = Math.ceil(scrollTop / itemHeight);
  const start = scrolledCnt;
  const end = pageNum > 1 ? start + pageSize : totalNum;
  ul.innerHTML = "";
  ul.style.transform = `translateY(${scrollTop}px)`;
  const fragment = document.createDocumentFragment();
  for (let i = start; i < end; i++) {
    const li = document.createElement("li");
    li.innerHTML = i;
    li.style.boxSizing = "border-box";
    li.style.borderBottom = "1px solid";
    li.style.height = itemHeight + "px";
    fragment.appendChild(li);
  }
  ul.append(fragment);
});
