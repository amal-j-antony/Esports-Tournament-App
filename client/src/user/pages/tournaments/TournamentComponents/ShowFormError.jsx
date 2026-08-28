import { RiErrorWarningFill } from "react-icons/ri";

function ShowFormError({ errorText }) {
  return (
    <>
      <div></div>
      <h1 className="text-yellow-500 flex items-center gap-2 "><RiErrorWarningFill /> {errorText}</h1>
    </>

  )
}

export default ShowFormError