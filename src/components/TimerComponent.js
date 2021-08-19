// import React from "react";

// function Timer(props) {
//   setInterval(function () {}, 1000);
//   return (
//     <div className="timer_container">
//       <div className="clock_icon">
//         <i className="fa fa-clock-o" />
//       </div>
//       <div className="timer_display">
//         <span className="fourth_decimal">0</span>
//         <span className="third_decimal">0</span>
//         <span className="second_decimal">0</span>
//         <span className="first_decimal">0</span>
//       </div>
//     </div>
//   );
// }

// export default Timer;

import React from "react";
import { useStopwatch } from "react-timer-hook";

function Timer() {
  const { seconds, minutes, hours } = useStopwatch({
    autoStart: true,
  });

  return (
    <div>
      <div className="timer_container">
        <div className="clock_icon">
          <i className="fa fa-clock-o" />
        </div>
        <div className="timer_display">
          <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        </div>
      </div>
    </div>
  );
}

export default Timer;
