import styled from "styled-components";

export const StyledHeader = styled.header`
//   background-color: #ebfbff;

// props
//   background-color: ${(props) => props.bg}; 
// This is the concept of props which we can pass the attribute in the element where we are using this component instance as bg attribute then we cam use
// syntax as template literals and give a call back which takes the argument as props and using the props object to use it;  


// theme Provider
// Using theme provider we can pass the theme object and using values using the props objects
background-color: ${( props ) => props.theme.colors.header }; 



padding: 40px 0;
//   h1 {
//     color: blue;
//   } // This is called nesting element of the header how many ever h1 has in the header tag this will affect to all of them
//   .test {
//     color: red;
//   } // this will apply to the classNName of the element;

//   h1:hover {
//     color: black;
//     cursor: pointer;
//   } // even the pseudo-class will be applied in styled components

//   &: hover {
//         background-color: black;
//   } // & Means 
`;
