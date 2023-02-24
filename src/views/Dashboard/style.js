import styled from 'styled-components';


export const ButtonGradientRight = styled.button`

background-image: linear-gradient(to right, #F09819 0%, #EDDE5D  51%, #F09819  100%);
margin: 10px;
padding: 15px 45px;
width: 135px;
height: 80px;
text-align: center;
text-transform: uppercase;
transition: 0.5s;
background-size: 200% auto;
color: white;            
box-shadow: 0 0 20px #eee;
border-radius: 12px;
display: block;

padding: 20em

&:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
}
    `;


         
// .btn-grad {
//   }

//   .btn-grad:hover {
//     background-position: right center; /* change the direction of the change here */
//     color: #fff;
//     text-decoration: none;
//   }
 