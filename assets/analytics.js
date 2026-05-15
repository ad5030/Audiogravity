/**
 * @module Analytics
 * @description Simple tracking pixel for the Audiogravity landing page.
 */
(function () {
    const host = window.location.hostname;
    if (host !== 'audiogravity.app' && host !== 'ad5030.github.io') return;

    const pixel    = new Image(1, 1);
    const ts       = Date.now();
    const path     = encodeURIComponent(window.location.pathname);
    const referrer = document.referrer ? encodeURIComponent(document.referrer) : '';
    pixel.src = `https://io.di-marco.net:65443/1x1.png?u=${path}&r=${referrer}&i=${ts}`;
})();
