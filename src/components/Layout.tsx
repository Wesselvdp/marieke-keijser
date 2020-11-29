import React, { FC } from "react"
import { Link } from "gatsby"

type T = {
  location?: String
  title?: String
}

const Layout: FC<T> = ({ location, title, children }) => {
  return <div>{children}</div>
}

export default Layout
