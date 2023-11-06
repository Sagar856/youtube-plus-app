// Basic version of render props
// whatever this comp recieves as props childern 
// you can return multiple JSX elements
// Wrapper comp that dosent return any JSX on its own 

const LastLogin = (props) => props.children;

export default LastLogin;
