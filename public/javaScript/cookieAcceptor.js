const cookieBox = document.querySelector(".cookiewrapper"),
    acceptBtn = cookieBox.querySelector(".cookiebuttons button");
const cookiebox2= document.querySelector(".cookiewrapper");
acceptBtn.onclick = () => {
    // setting cookie for 1 day, after 1 day cookie will be expired automatically
    document.cookie = "CookiesAccepted=true; max-age="+60*60*24+"; SameSite=None; Secure";
    if (document.cookie) { // if the above cookie set
        cookieBox.classList.add("hide"); // hide cookie box once cookie set
    } else {
        alert("Cookie can't be set!"); // if cookie can't be set then alert an error
    }
}

// let's hide the cookie box if cookie is set and not expired
let checkCookie = document.cookie.indexOf("CookiesAccepted=true"); // checking our set cookie
// if cookie is set then hide the cookie box else show it
if (checkCookie !== -1) {
    cookieBox.classList.add("hide");
} else {
    cookiebox2.style.visibility = "visible";
    cookieBox.classList.remove("hide")
}