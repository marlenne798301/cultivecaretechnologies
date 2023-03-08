
const container = document.createElement("div");
container.classList.add("container");

const row = document.createElement("div");
row.classList.add("row");

const logoCol = document.createElement("div");
logoCol.classList.add("col-xl-3", "col-lg-3", "col-md-3", "col-sm-12", "col", "logo_section");

const logoFull = document.createElement("div");
logoFull.classList.add("full");

const logoCenterDesk = document.createElement("div");
logoCenterDesk.classList.add("center-desk");

const logo = document.createElement("div");
logo.classList.add("logo");

const logoLink = document.createElement("a");
logoLink.href = "index.html";

const logoImg = document.createElement("img");
logoImg.src = "./img/CULTIVE_CARE_TECHNOLOGIES.png";
logoImg.alt = "#";

logoLink.appendChild(logoImg);
logo.appendChild(logoLink);
logoCenterDesk.appendChild(logo);
logoFull.appendChild(logoCenterDesk);
logoCol.appendChild(logoFull);

const locationCol = document.createElement("div");
locationCol.classList.add("col-xl-9", "col-lg-9", "col-md-9", "col-sm-9");

const locationIconBottomTT = document.createElement("div");
locationIconBottomTT.classList.add("location_icon_bottum_tt");

const locationIconList = document.createElement("ul");

const locationIconItem1 = document.createElement("li");
locationIconItem1.innerHTML = '<img src="icon/loc1.png" />Ubicación';

const locationIconItem2 = document.createElement("li");
locationIconItem2.innerHTML = '<img src="icon/email1.png" />CultiveCareTechnologies@gmail.com';

const locationIconItem3 = document.createElement("li");
locationIconItem3.innerHTML = '<img src="icon/call1.png" />618 273 7606';

locationIconList.appendChild(locationIconItem1);
locationIconList.appendChild(locationIconItem2);
locationIconList.appendChild(locationIconItem3);
locationIconBottomTT.appendChild(locationIconList);
locationCol.appendChild(locationIconBottomTT);

row.appendChild(logoCol);
row.appendChild(locationCol);
container.appendChild(row);
