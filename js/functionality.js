const carousel = function () {
    let auto_scroll;
    const set_auto_scroll = function () {
        if (!auto_scroll) {
            auto_scroll = setInterval(auto_scroll_function, 5000);
        } else {
            clearInterval(auto_scroll);
            auto_scroll = null;
        }
    }
    const auto_scroll_function = function () {

        let enabled = document.getElementById("auto_scroll").checked;

        if (enabled) {
            scroll_left()
        }

    }
    const scroll_left = function () {

    }
    const scroll_right = function () {

    }

    document.getElementById("auto_scroll").addEventListener("click", set_auto_scroll);

    return {
        set_auto_scroll : set_auto_scroll,
        scroll_left : scroll_left,
        scroll_right : scroll_right
    }
}