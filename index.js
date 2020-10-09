// function Timer() {
//   this.f = false;
//   this.start = null;
//   this.end = null;
//   this.startTimer = function () {
//     if (this.f === true) {
//       console.log("Timer has already started");
//       return;
//     }
//     this.f = true;
//     this.start = Date.now();
//     console.log("Timer started " + this.start);
//   };
//   this.getDuration = function () {
//     return (this.end - this.start) / 1000;
//   };
//   this.stopTimer = function () {
//     if (this.f === false) {
//       console.log("Timer has not started yet");
//       return;
//     }
//     this.end = Date.now();
//     console.log("Timer ended at " + this.end);
//     return this.getDuration();
//   };
//   this.reset = function () {
//     this.start = 0;
//     this.end = 0;
//     this.f = false;
//   };
// }
// let t = new Timer();
// t.startTimer();
// setTimeout(()=>{
//   console.log(t.stopTimer());
// },2000);

