const tabs = (headerSelector, tabsSelector, contentSelector, active) => {

    const header = document.querySelector(headerSelector),
          tabsCollection = document.querySelectorAll(tabsSelector),
          contentCollection = document.querySelectorAll(contentSelector);

        function closeContent () {
            contentCollection.forEach(item => {
                item.style.display = 'none';
                tabsCollection.forEach(item => {
                    item.classList.remove(active);
                })
            });
        }

    function showContent (i = 0) {
        contentCollection[i].style.display = 'block';
        tabsCollection[i].classList.add(active);
    }

    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target && (target.classList.contains(tabsSelector.replace(/\./, '')) ||
            target.parentNode.classList.contains(tabsSelector.replace(/\./, '')))) {
            tabsCollection.forEach((item, i) => {
                if(target === item || target.parentNode === item){
                    closeContent();
                    showContent(i);
                }
            })
        }
    });
}

export default tabs;