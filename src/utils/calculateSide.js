export default function calculateSide(side, e) {
    if (side === 'right') {
        let margin = 0;
        let gridWidth = document.documentElement.clientWidth;
        if (document.documentElement.clientWidth > 810) {
          margin = (document.documentElement.clientWidth - 810) / 2;
          gridWidth = 810;
        }
      
        // return Math.round((e.clientX / gridWidth) * 100 * 10) / 10;
        console.log(Math.round((e.clientX / gridWidth) * 100 * 10) / 10)
    }
    else return
}