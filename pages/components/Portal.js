// import { useEffect, useState } from "react"
// import { createPortal } from "react-dom"

// const Portal = ({ children }) => {
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)

//     return () => setMounted(false)
//   }, [])

//   return mounted
//     ? createPortal(children,
//       document.querySelector("#myportal"))
//     : null
// }

// export default Portal

export default function NotFount() {
  return (
    <div>
      <h1>Not Found !!</h1>
    </div>
  );
}