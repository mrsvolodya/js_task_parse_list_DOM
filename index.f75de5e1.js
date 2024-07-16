"use strict";
const listArray = [
    ...document.querySelectorAll("li")
];
const ul = document.querySelector("ul");
const helper = (value)=>{
    const changeValue = value.getAttribute("data-salary");
    return +changeValue.replace("$", "").split(",").join("");
};
const sortList = (list)=>{
    const ulWrap = document.createElement("ul");
    const sortedList = [
        ...list
    ].sort((a, b)=>helper(b) - helper(a));
    sortedList.forEach((item)=>ulWrap.appendChild(item));
    ul.replaceWith(ulWrap);
};
const getEployees = ()=>{
    const sortedArray = [
        ...document.querySelectorAll("li")
    ];
    return sortedArray;
};
sortList(listArray);
getEployees();

//# sourceMappingURL=index.f75de5e1.js.map