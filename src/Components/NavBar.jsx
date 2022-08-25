import React from 'react'
import logo from '../Images/logo.png'

export const NavBar = () => {
  return (
    <>
     <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top " >
        <a className="navbar-brand" href="!#"> <img srcSet={`${logo}`} alt='logo app' /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse bg-warning" id="navbarsExampleDefault">
           
            <form className="form-inline my-2 my-lg-0 bg-success">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
        </nav>
    </>
  )
}
