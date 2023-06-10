const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

function printHi() {
    console.log("Hi");
}

grandparent.addEventListener('click', printHi);

setTimeout(() => grandparent.removeEventListener('click', printHi), 2000);

parent.addEventListener('click', e => console.log("Parent"), {capture: true});
child.addEventListener('click', e => console.log("Child"), {once: true});
document.addEventListener('click', e => console.log("Document"));