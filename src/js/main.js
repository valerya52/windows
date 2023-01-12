import './slider.js';
import modals from "./modules/modals";
import tabs from "./modules/tads";

window.addEventListener('DOMContentLoaded', () => {
    modals();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'slick-active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
});
