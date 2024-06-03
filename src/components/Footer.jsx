import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function App() {
  return (
    <>
      <hr style={{color:'white'}} />
      <p style={{textAlign:'center',color:'grey'}}>Follow me on :</p>
      <div style={{justifyContent:'center',display:'flex',paddingBottom:'20px',gap:'8px'}}>
        <a className='btn btn-light' href="https://wa.me/919866773003" target='_blank' rel="noreferrer"><WhatsAppIcon /></a>
        <a className='btn btn-light' href="https://www.linkedin.com/in/manikumarpula" target='_blank' rel="noreferrer"><LinkedInIcon /></a>
        <a className='btn btn-light' href="https://www.instagram.com/always_hemsworth?igsh=M245OW95djFsOXhm" target='_blank' rel="noreferrer"><InstagramIcon /></a>
        <a className='btn btn-light' href="https://www.facebook.com/manikumarpula" target='_blank' rel="noreferrer"><FacebookIcon /></a>
        <a className='btn btn-light' href="https://github.com/manikumarpula" target='_blank' rel="noreferrer"><GitHubIcon /></a>
        <a className='btn btn-light' href="https://x.com/Manihemsworth" target='_blank' rel="noreferrer"><TwitterIcon /></a>
      </div>
      <div style={{textAlign:'center',padding:'15px 0px',color:'white',backgroundColor:'#333333',opacity:'0.5'}}>
          Developed By Mani Hemsworth
      </div>
    </>
  );
}
