// С использованием ID

// let curSlideID = 1;
// let sliderItems = $(`[sliderItemID]`).hide();
// let curSliderItem = $(`[sliderItemID=${curSlideID}]`).show();

// let next = $('[next]').click(function () {
//     let newCurSliderItem = $(`[sliderItemID=${curSlideID}]`).hide();
//     curSlideID++;
//     if (curSlideID > sliderItems.length) {
//         curSlideID = 1;
//     }
//     let nextSlide = $(`[sliderItemID=${curSlideID}]`).show();
// });

// let prev = $('[prev]').click(function () {
//     let newCurSliderItem = $(`[sliderItemID=${curSlideID}]`).hide();
//     curSlideID--;
//     if (curSlideID < 1) {
//         curSlideID = sliderItems.length;
//     }
//     let nextSlide = $(`[sliderItemID=${curSlideID}]`).show();
// });

// БЕЗ использования ID

let sliderItems = $(`[sliderItemID]`).hide();
let firslSlideShow = $(`[sliderItemID]`).first().show();
let curSlideID = 1;

let next = $('[next]').click(function () {
    let CurSlide = $(`[sliderItemID]:nth-child(${curSlideID})`).hide(500);
    curSlideID++;
    if (curSlideID > sliderItems.length) {
        curSlideID = 1;
    }
    let nextSlide = $(`[sliderItemID]:nth-child(${curSlideID})`).show(500);
});

let prev = $('[prev]').click(function () {
    let CurSlide = $(`[sliderItemID]:nth-child(${curSlideID})`).hide(500);
    curSlideID--;
    if (curSlideID < 1) {
        curSlideID = sliderItems.length;
    }
    let nextSlide = $(`[sliderItemID]:nth-child(${curSlideID})`).show(500);
});
