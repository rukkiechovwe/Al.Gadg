let closeBtn = document.querySelector("#close-btn-p");
let openBtn = document.querySelector("#open-btn-p");
let dashboardNav = document.querySelector("#dashboard-nav");
	openBtn.addEventListener("click",()=>{
		dashboardNav.style.visibility="visible";
		dashboardNav.style.width="280px"
		dashboardNav.style.height="100vh";
		openBtn.style.display="none";
		closeBtn.style.display="block";
		dashboardNav.style.opacity="1";
	});
	closeBtn.addEventListener("click",()=>{
		dashboardNav.style.visibility="hidden";
		dashboardNav.style.opacity="0";
		openBtn.style.display="block"
		dashboardNav.style.width="0"
		closeBtn.style.display="none";
	});