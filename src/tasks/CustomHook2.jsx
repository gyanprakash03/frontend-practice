import useWindowWidth from "../hooks/useWindowWidth"

const CustomHook2 = () => {

    const windowWidth = useWindowWidth();

  return (
    <div>
        Window width : {windowWidth}
    </div>
  )
}

export default CustomHook2