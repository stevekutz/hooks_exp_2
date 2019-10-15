import React, {Fragment , useState, useEffect} from 'react';
import {Card, Container, Header} from 'semantic-ui-react';
import {Input} from 'react-rainbow-components';

const HeadlineHooks = () => {

    const [greeting, setGreetingInput] = useState('Default State Greeting')   
    const [greeting2, setGreetingInput2] = useState('Default 2nd State Greeting')
    
    const randomHsl = () => `hsla(${Math.random() * 360}, 100%, 50%, 1)`;

    const alignStyles = {width: '50%', margin: '5px auto', padding: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center'}                    
    const inputStyles = {border: '1px solid deeppink', color: 'dodgerblue', ...alignStyles}
    const headerStyles = {fontWeight: 'bold', color: 'darkred', ...alignStyles}
    const inputStyles2 = {...inputStyles, ...alignStyles, ...{border: '4px solid seagreen'}, alignItems: 'stretch' }
    const borderStyle = {border: `10px solid ${randomHsl()} `}

    const _handleInputs = (ev) => setGreetingInput2(
        ev.target.value       
        );

        useEffect( () => {console.log('useEffect invoked ONLY on first input') }, [greeting]); 
        useEffect( () => {console.log('useEffect invoked ONLY on 2nd & 3rd input') }, [greeting2]); 

    return (
        
        <div style = {borderStyle}>
                <p style = {{backgroundColor: `  ${randomHsl()}   `, textAlign: 'center'}}> useEffect does color change !</p>

                <Header style = {headerStyles}> {greeting}</Header>
                <Header style = {headerStyles}> {greeting2}</Header>

                <Input
                    label="ev passed inline to setGreetingInput"
                    placeholder="Placeholder text"
                    type="text"
                    style = {inputStyles}
                    value = {greeting}
                    onChange={ev => setGreetingInput(ev.target.value)}
                />

                <Input
                    label="ev passed inline to c"
                    placeholder="Placeholder text"
                    type="text"
                    style = {inputStyles2}
                    size = 'mini'
                    value = {greeting2}
                    // onChange={(ev) => _handleInputs(ev)}  
                    onChange={ev => setGreetingInput2(ev.target.value)}
                />

                <Input
                    label="setGreetingInput2 handler directly called"
                    placeholder="Placeholder text"
                    type="text"
                    style = {inputStyles2}
                    value = {greeting2}
                    onChange={_handleInputs}     
                />
        </div>
    )


}

export default HeadlineHooks;
