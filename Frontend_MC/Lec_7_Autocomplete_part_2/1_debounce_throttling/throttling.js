let productValue = 100;
function apply20Coupon(args) {
  console.log("New price", productValue - productValue * 0.2, "args", args);
}
//we will usually see delay in web but it is actually interval in throttle
function throttle(fn, interval = 500) {
  let shouldWait = false;
  console.log("1 returning fn");
  return function (...args) {
    //prevent it also
    if (shouldWait == true) {
      console.log(" 3 I have been called before", args);
      return;
    }
    fn(...args);
    shouldWait = true;
    // console.log(" 2Called fn first time");
    // console.log(" 2should Wait", shouldWait);
    setTimeout(() => {
      shouldWait = false;
    }, interval);
  };
}

const throttledApplyCoupon = throttle(apply20Coupon, 3000);
console.log("```````````````````");
throttledApplyCoupon("biru"); //1
console.log("```````````````````");
throttledApplyCoupon("satu"); //2

setTimeout(() => {
  console.log("at t=2000");
  throttledApplyCoupon("sangeet"); //3
}, 2000);

setTimeout(() => {
  console.log(" at t=5000");
  throttledApplyCoupon("bindu"); //4
}, 5000);

/* throttling usecase:-It is used to put a limit
 *lets say when you order on swiggy an item of price 20
 *and apply a coupon less 20 percentage . Now the final price
 *will be 16 after discount .Now there is a usecase you can apply
 * a coupon once in a given interval.Lets assume that the coupon could
 * be applied in a interval of 2 hours.Now lets go to checkout page
 *and apply the coupon at 8:30 am since it is the first time the coupon
 *gets applied.Now lets again apply the coupon again at 9:30 am
 *since we are doing the task before the interval is finished the coupon will not get applied
 *At 10:30 we again apply the coupon the coupon gets applied*******/

/*Throttling defination:-It is used to limit a function in a given interval
 *Throlling Algorithm:-a)Only first call is registered and acted upon
 *b)all the subsequent functions calls are ignored
 *
 * Throttling usecase:-a)coupon application b)scroll c)resize
 * In throttling time represents interval***/

/*In simple words difference between throttling and debouncing is:-
Throttling for first call and debouncing for latest result
**/

/*Throttling is useful in scenarios where you want to
 *limit the frequency of a function's execution to a specified
 *time interval****/
