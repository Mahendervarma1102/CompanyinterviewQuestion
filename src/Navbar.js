import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav class="navbar bg-body-primary">
        <div class="container-fluid bg-info sticky-bottom">
          <a class="navbar-brand p-2 m-3" style={{color:"white"}}>ROLLS - ROYCE</a>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button class="btn btn-outline-success me-3 " type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
  )
}
