let closeBtn = document.querySelector("#close-btn");
let openBtn = document.querySelector("#open-btn");
let navigation = document.querySelector(".navigation");
	openBtn.addEventListener("click",()=>{
		navigation.style.visibility="visible";
		navigation.style.width="100%"
		navigation.style.height="100vh";
		navigation.style.opacity="1";
		openBtn.style.display="none";
		closeBtn.style.display="block";
	});
	closeBtn.addEventListener("click",()=>{
		navigation.style.visibility="hidden";
		navigation.style.width="0"
		navigation.style.opacity="0";
		openBtn.style.display="block"
		closeBtn.style.display="none";
	});

let btnClick = document.querySelectorAll(".btn-click");
let faculty = document.querySelector(".faculty");
faculty.style.display = "none"
for (let i = 0; i < btnClick.length; i++){
	btnClick[i].addEventListener("click",()=>{
		faculty.style.display = "block";
	})
}

let close = document.querySelector("#close");
close.addEventListener("click",()=>{
		faculty.style.display = "none";
})
