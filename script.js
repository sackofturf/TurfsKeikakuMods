const pages = {
  overview: "Overview",
  "keikaku-mod-manager": "Keikaku Mod Manager",
  "keikaku-paint": "Keikaku Paint",
};

function selectPage() {
  const requestedPage = window.location.hash.slice(1);
  const activePage = Object.hasOwn(pages, requestedPage)
    ? requestedPage
    : "overview";

  document.querySelectorAll("[data-page]").forEach((page) => {
    page.hidden = page.dataset.page !== activePage;
  });

  document.title = `Turf's Keikaku Mods`;
}

window.addEventListener("hashchange", selectPage);
selectPage();
