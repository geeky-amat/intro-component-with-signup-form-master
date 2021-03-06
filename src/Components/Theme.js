import { ThemeProvider } from 'styled-components';

const theme = {
color: {
red: 'hsl(0, 100%, 74%)', 
green: 'hsl(154, 59%, 51%)',
blue: 'hsl(248, 32%, 49%)',
darkBlue: 'hsl(249, 10%, 26%)', 
grayishBlue: 'hsl(246, 25%, 77%)',
},
font: {
size: {
},
family: "'Poppins', sans-serif",
},
breakpoint: {
mobile: '850px',
},
};

const Theme = ({ children }) => {
return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;