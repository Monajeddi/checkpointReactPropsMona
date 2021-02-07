import React from 'react'
import PropTypes from 'prop-types'


const Profil = ({fullName ,Date , Bio , Profession , children , handleName}) => {
    return (
        <div>
            <h1 style={{textDecoration:'underline'}}> Biography </h1>
            <h2 style={{fontStyle:'italic', color: '#166b83', marginBottom:'0px'}}>{fullName}</h2>
            <h2 style={{fontStyle:'italic', color: '#166b83',marginTop:'0px'}}>{Date}</h2>
            <h2 style={ {fontWeight:'lighter', margin: '5px 127px', fontStyle:'italic'}}>{Bio}</h2>
            <h2 style={{fontStyle:'italic', color: '#166b83'}}>{Profession}</h2>
            
            
            {children}
            <br />
            <button onClick={() => handleName(fullName)} style={{color:'white', backgroundColor:'#166b83', borderRadius:'5px', height:'35px' , width:'80px', margin:'5px' }}>Click Me</button>
            <br />
        </div>
    )
}

export default Profil

Profil.protoType = {
    fullName: PropTypes.string,
    Bio: PropTypes.string.isRequired,
    Profession: PropTypes.string,

}

Profil.defaultProps = {
    fullName : "No Name",
    Bio : "Néant",
    Profession : "Néant",
}