import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import { styled } from 'styled-components';
import SearchBar from './SearchBar';

const SharedLayout = () => {
  return (
    <>

      <Container>

        <Sidebar></Sidebar>
        <Outlet></Outlet>

      </Container>
    </>
  )
}



const Container = styled.div`
display:flex;`




export default SharedLayout;
