import { useContext } from 'react';


import Editor from "./Editor";

import { Box, styled } from '@mui/material';

import { DataContext } from '../context/DataProvider';

const Container = styled(Box)`
    background-color: #060606;
    height: 50vh;
    display: flex;
`

const Code = () => {

    const { html, css, js, setHtml, setCss, setJs } = useContext(DataContext);

    return (
       
       <Container>
        <Editor 
              heading="HTML"
              icon='/'
              language="xml"
              value={html}
              onChange={setHtml}
              
              color='#FF3C41'
        />
        <Editor 
             heading="CSS"
             icon='*'
             language="css"
               
               value={css}
               onChange={setCss}
              
               color='#0EBEFF'
        />
        <Editor 
              heading="JavaScript"
              icon='( )'
              language="javascript"
              
              value={js}
              onChange={setJs}
             
             color='#FCD000'
        />
       </Container>
    )
}

export default Code;