// let images = [{}]
// let images = [{
//   src = "//img12.360buyimg.com/jrpmobile/jfs/t13744/11/2508939408/43213/58bfe502/5a421ff3N52d0a474.jpg?width=750&height=320"
// }, {
//   src = "//img12.360buyimg.com/jrpmobile/jfs/t16138/325/817844900/36681/5d874455/5a422029Ncd678ea3.jpg?width=750&height=320"
// }, {
//   src = "//img12.360buyimg.com/jrpmobile/jfs/t13465/324/2563794460/43029/3ffca963/5a421f83Ne8089231.jpg?width=750&height=320"
// }];
$(document).ready(function () {
  content.mouseDown(function () {
    handler.oriX = this.pageX
  })
  content.mouseUp(function () {
    handler.endX = this.pageX
    swiper()
  })

  let content = $('.swiper-content')
  // let itemCount = content.childElementCount()
  let itemShow = content.firstChild
  // let itemPrev = content.children
  let handler = {
    dire: 1,
    trig: false,
    oriX: 0,
    endX: 0,
    dis: 0
  }



  let swiper = () => {
    let mouseMove = handler.endX - handler.oriX
    let isHalf = mouseMove / content.width()
      (isHalf > 0.5) ? handler.trig = true : handler.trig = false
    if (handler.trig) begin()
    console.log(handler)
    let begin = () => {
      let distance = -1 * handler.dire + "%"
      itemShow.translate3d(distance, 0, 0);
    }
  }
})