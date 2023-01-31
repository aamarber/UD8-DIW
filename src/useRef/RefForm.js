import { useRef } from "react"

function RefForm() {

  const userRef = useRef()
  const passwordRef = useRef()

  function focusUser() {
    userRef.current.focus()
  }

  function showPassword() {
    alert(passwordRef.current.value)
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      User: <input ref={userRef} type="text" />
      <br />
      Pasword: <input ref={passwordRef} type="password" />
      <br />
      <button onClick={focusUser}>Focus user</button>
      <button onClick={showPassword}>Show password</button>
      <br />
    </form>
  )
}

export default RefForm
