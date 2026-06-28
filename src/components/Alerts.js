// import React from "react";

// export default function Alerts(props) {
//   return (
//     <div
//       className={`alert alert-${props.type}`}
//       role="alert"
//     >
//       {props.alertmessage}
//     </div>
//   );
// }
import React from "react";

export default function Alerts(props) {
  return (
    props.alert && (
      <div className={`alert alert-${props.alert.type}`} role="alert">
        {props.alert.msg}
      </div>
    )
  );
}