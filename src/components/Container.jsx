const Container = ({children}) => {
  return (
    <div>
      <div className={`max-w-[1280px] mx-auto px-2`}>{children}</div>
    </div>
  )
}

export default Container
