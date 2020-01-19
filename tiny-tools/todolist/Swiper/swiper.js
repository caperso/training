// let hasTouch = 'ontouchstart' in window,
//   startEvent = hasTouch ? "touchstart" : "mousedown",
//   moveEvent = hasTouch ? "touchmove" : "mousemove",
//   endEvent = hasTouch ? "touchend" : "mouseup",
//   cancelEvent = hasTouch ? "touchcancel" : "mouseup"

let items = $('.swiper-content')[0].children // [DOM]
let length = items.length
// 组件控制
let itemHandler = {
  dire: 1, // 1:left -1:right
  trig: false, // 触发条件
  oriX: 0,
  endX: 0,
}

// 监听鼠标
$('.swiper-content').on("touchstart mousedown", function (e) {
  if (e.pageX) {
    itemHandler.oriX = e.pageX
  } else {
    itemHandler.oriX = e.originalEvent.clientX
  }
});
$('.swiper-content').on("touchend mouseup", function (e) {
  if (e.pageX) {
    itemHandler.endX = e.pageX
    console.log(itemHandler.endX)

  } else {
    itemHandler.endX = e.originalEvent.clientX
    console.log(itemHandler.endX)
  }
  swiper()
})

// 阻止图片拖拽,开始冒泡
var img = $("img");
img.on("dragstart", function () {
  return false;
});

// 滑动
function swiper() {
  let mouseMove = itemHandler.endX - itemHandler.oriX;
  (mouseMove > 0) ? itemHandler.dire = 1: itemHandler.dire = -1;
  let isHalf = mouseMove / $('.swiper-content').width();
  (Math.abs(isHalf) < 0.3) ? itemHandler.trig = false: itemHandler.trig = true
  if (itemHandler.trig) begin();

  function begin() {
    // 查找show的位置
    let key;
    for (let i = 0; i < items.length; i++) {
      const element = items[i]
      if (element.className.match('show'))
        key = i
    }
    if (key != undefined) {
      $(".show").removeClass('show')
      $(".next").removeClass("next");
      $(".prev").removeClass("prev");
      setOrder()
    }

    function setOrder() {
      // 向右
      if (itemHandler.dire == -1) {
        if (key + 1 == length - 1) {
          // 下一张图的>>后图<<超出数组时
          $(items[key + 1]).addClass('show')
          $(items[key]).addClass('prev')
          $(items[0]).addClass('next')
        }
        // >>后图<<超出数组时
        else if (key == length - 1) {
          $(items[0]).addClass('show')
          $(items[key]).addClass('prev')
          $(items[1]).addClass('next')
        } else {
          $(items[key + 1]).addClass('show')
          $(items[key]).addClass('prev')
          $(items[key + 2]).addClass('next')
        }
      }
      //向左
      if (itemHandler.dire == 1) {
        // 下一张图的>>前图<<超出数组时
        if (key - 1 == 0) {
          $(items[0]).addClass('show')
          $(items[length - 1]).addClass('prev')
          $(items[key]).addClass('next')
        }
        // >>前图<<超出数组时
        else if (key == 0) {
          $(items[length - 1]).addClass('show')
          $(items[length - 2]).addClass('prev')
          $(items[key]).addClass('next')
        } else {
          $(items[key - 1]).addClass('show')
          $(items[key - 2]).addClass('prev')
          $(items[key]).addClass('next')
        }
      }
    }
  }
}