
import Loading from "./Loading";

function WrapLoading(props) {

  const { loading } = props

  return (
    <>
      { loading ? <Loading/> : props.children }
    </>
  )
}

export default WrapLoading;
