import React from 'react'
import { styled, Styled } from 'styled-components'
function Searchbar(set) {
    const Setter=(event)=>{
        
        return set.q(event.target.value)
    }
    return (
        <Container>
            <div className="parentsearchbox" >
                <input type="text" className='searchbox'    ></input>
                <div >
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
            

            

        </Container>
    )
}
const Container = styled.div`
    
    
    height:70px;
    width:80%;
    padding:10px;
    // margin:auto;

    

    .parentsearchbox
    {
        width:100%;
        height:100%;
        margin:auto;
        
        margin-top:15px;
        
        background: rgba(255, 255, 255, 0.82);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(4.8px);
        -webkit-backdrop-filter: blur(4.8px);
        border: 10px solid rgba(255, 255, 255, 1);
        font-size:20px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:10px;
    }
    
    .searchbox{
        
        width:100%;

        border:none;
    }
    input:focus {
        
        outline:none;
    }
    
    .parentsearchbox:focus-within {
      border: 2px solid wheat; 
    }
    
   
`

export default Searchbar