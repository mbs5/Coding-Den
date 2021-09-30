"use strict";

// Selecting Elements
const websitesEL = document.querySelector(".websites");
const ecommerceEL = document.querySelector(".ecommerce");
const mobileAppsEL = document.querySelector(".mobile-apps");
const digitalMarketingEL = document.querySelector(".digital-marketing");
const graphicDesignEL = document.querySelector(".graphic-design");
const sectionSpecialize = document.querySelector(".section-specialize");
const sec2Title = document.querySelector(".title-2");

// To change background-image to default once user mouseout from test
const defaultBackground = function () {
  sectionSpecialize.style.backgroundImage =
    "url('/Resources/images/sec-2-default.png')";
  websitesEL.style.marginLeft = "4em";
  ecommerceEL.style.marginLeft = "4em";
  mobileAppsEL.style.marginLeft = "4em";
  digitalMarketingEL.style.marginLeft = "4em";
  graphicDesignEL.style.marginLeft = "4em";
};
// Website : mouseover
const addMargin_Color_Website = function () {
  websitesEL.style.marginLeft = "4.5em";
  ecommerceEL.style.color = "#6F7177";
  mobileAppsEL.style.color = "#6F7177";
  digitalMarketingEL.style.color = "#6F7177";
  graphicDesignEL.style.color = "#6F7177";
};

// Website : mouseout
const addTextColorWebsite = function () {
  ecommerceEL.style.color = "#FFF";
  mobileAppsEL.style.color = "#FFF";
  digitalMarketingEL.style.color = "#FFF";
  graphicDesignEL.style.color = "#FFF";
};

// Ecommerce : mouseover
const addMargin_Color_Ecom = function () {
  ecommerceEL.style.marginLeft = "4.5em";
  mobileAppsEL.style.color = "#6F7177";
  digitalMarketingEL.style.color = "#6F7177";
  graphicDesignEL.style.color = "#6F7177";
  websitesEL.style.color = "#6F7177";
};

// Ecommerce : mouseout
const addTextColorEcom = function () {
  websitesEL.style.color = "#FFF";
  mobileAppsEL.style.color = "#FFF";
  digitalMarketingEL.style.color = "#FFF";
  graphicDesignEL.style.color = "#FFF";
};

// Mobileapps : mouseover
const addMargin_Color_Mob = function () {
  mobileAppsEL.style.marginLeft = "4.5em";
  ecommerceEL.style.color = "#6F7177";
  digitalMarketingEL.style.color = "#6F7177";
  graphicDesignEL.style.color = "#6F7177";
  websitesEL.style.color = "#6F7177";
};

// Mobileapps : mouseout
const addTextColorMob = function () {
  websitesEL.style.color = "#FFF";
  ecommerceEL.style.color = "#FFF";
  digitalMarketingEL.style.color = "#FFF";
  graphicDesignEL.style.color = "#FFF";
};

// Digital Marketing : mouseover
const addMargin_Color_DM = function () {
  digitalMarketingEL.style.marginLeft = "4.5em";
  ecommerceEL.style.color = "#6F7177";
  mobileAppsEL.style.color = "#6F7177";
  graphicDesignEL.style.color = "#6F7177";
  websitesEL.style.color = "#6F7177";
};
// Digital Marketing : mouseout
const addTextColorDM = function () {
  websitesEL.style.color = "#FFF";
  ecommerceEL.style.color = "#FFF";
  mobileAppsEL.style.color = "#FFF";
  graphicDesignEL.style.color = "#FFF";
};

// Graphic Design : mouseover
const addMargin_Color_GD = function () {
  graphicDesignEL.style.marginLeft = "4.5em";
  ecommerceEL.style.color = "#6F7177";
  mobileAppsEL.style.color = "#6F7177";
  digitalMarketingEL.style.color = "#6F7177";
  websitesEL.style.color = "#6F7177";
};
// Graphic Design : mouseout
const addTextColorGD = function () {
  websitesEL.style.color = "#FFF";
  ecommerceEL.style.color = "#FFF";
  mobileAppsEL.style.color = "#FFF";
  digitalMarketingEL.style.color = "#FFF";
};

// --- Mouseover Listeners ---
// Websites --mouse-over--
websitesEL.addEventListener("mouseover", function () {
  sectionSpecialize.style.backgroundImage =
    "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/Resources/images/sec-2-website.png')";
  addMargin_Color_Website();
});
// Websites --mouse-out--
websitesEL.addEventListener("mouseout", function () {
  defaultBackground();
  addTextColorWebsite();
});

// E-commerce --mouse-over--
ecommerceEL.addEventListener("mouseover", function () {
  sectionSpecialize.style.backgroundImage =
    "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/Resources/images/sec-2-ecom.png')";
  addMargin_Color_Ecom();
});
// E-commerce --mouse-out--
ecommerceEL.addEventListener("mouseout", function () {
  defaultBackground();
  addTextColorEcom();
});

// Mobile Apps --mouse-over--
mobileAppsEL.addEventListener("mouseover", function () {
  sectionSpecialize.style.backgroundImage =
    "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/Resources/images/sec-2-mobile.png')";
  addMargin_Color_Mob();
});
// Mobile Apps --mouse-out--
mobileAppsEL.addEventListener("mouseout", function () {
  defaultBackground();
  addTextColorMob();
});

// Digital Marketing --mouse-over--
digitalMarketingEL.addEventListener("mouseover", function () {
  sectionSpecialize.style.backgroundImage =
    "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/Resources/images/sec-2-dm.jpg')";
  addMargin_Color_DM();
});
// Digital Marketing --mouse-out--
digitalMarketingEL.addEventListener("mouseout", function () {
  defaultBackground();
  addTextColorDM();
});

// Graphic Design --mouse-over--
graphicDesignEL.addEventListener("mouseover", function () {
  sectionSpecialize.style.backgroundImage =
    "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/Resources/images/sec-2-gd.png')";
  addMargin_Color_GD();
});

// Graphic Design --mouse-out--
graphicDesignEL.addEventListener("mouseout", function () {
  defaultBackground();
  addTextColorGD();
});
