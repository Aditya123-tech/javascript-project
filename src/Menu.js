import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
const Menu = () => {
  return (
    <>
      <Link to="/news">News</Link>
      <Link to="/jobs">Jobs</Link>
      <Link to="/"> Web Development</Link>
    </>
  )
}
export default Menu;
