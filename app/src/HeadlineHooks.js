import React, {Fragment , useState, useEffect} from 'react';
import {Card, Container, Header, Label} from 'semantic-ui-react';
import {Input} from 'react-rainbow-components';

const HeadlineHooks = () => {

    const [greeting, setGreetingInput] = useState('Default State Greeting')   
    const [greeting2, setGreetingInput2] = useState('Default 2nd State Greeting')
    const [randomColor, getRandomColor] = useState(`blue`);

    const randomHsl = () => `hsla(${Math.random() * 360}, 100%, 50%, 1)`;

    const alignStyles = {width: '50%', margin: '5px auto', padding: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center'}                    
    const inputStyles = {border: '1px solid deeppink', color: 'dodgerblue', ...alignStyles}
    const headerStyles = {fontWeight: 'bold', color: 'darkred', ...alignStyles}
    const inputStyles2 = {...inputStyles, ...alignStyles, ...{border: '4px solid seagreen'}, alignItems: 'stretch' }
    const borderStyle = {border: `10px solid ${randomHsl()} `, display: 'flex'}

    const _handleInputs = (ev) => setGreetingInput2( ev.target.value );

    useEffect( () => {console.log('useEffect invoked ONLY on first input') }, [greeting]); 
    useEffect( () => {console.log('useEffect invoked ONLY on 2nd & 3rd input') }, [greeting2]); 
    useEffect( () => getRandomColor(randomHsl()), [greeting]  );

    return (
        <Fragment>
          <p style = {{backgroundColor: `  ${randomHsl()}   `, textAlign: 'center', fontWeight: 'bold'}}> useEffect only changes on specific state variable !</p>

            <div style = {borderStyle}>
                <div style = {{width: '10%', height: '455px', backgroundColor: `${randomColor}`}}></div>
                <div style = {{width: '80%'}}>
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

                    <Input
                        label="setGreetingInput2 handler directly called with passed in ev"
                        placeholder="Placeholder text"
                        type="text"
                        style = {inputStyles2}
                        value = {greeting2}
                        onChange={(ev) => _handleInputs(ev)}     
                    />

                </div>
                <div style = {{width: '10%', height: '455px', backgroundColor: `${randomColor}`}}></div>
            </div>
        </Fragment>
    )


}

export default HeadlineHooks;
