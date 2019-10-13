import React, {Fragment , useState, useEffects} from 'react';
import {Card, Container, Header} from 'semantic-ui-react';
import {Input} from 'react-rainbow-components';

const HeadlineHooks2 = () => {

    const [greeting, setGreetingInput] = useState('Another Default State Greeting')    
    const alignStyles = {width: '50%', margin: '5px auto', padding: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}                    
    const inputStyles = {border: '1px solid purple', color: 'dodgerblue', ...alignStyles}
    const headerStyles = {fontWeight: 'bold', color: 'darkyellow', ...alignStyles}
    const inputStyles2 = {...inputStyles, ...alignStyles, ... {border: '4px solid orangered'} }

    const _handleInputs = (ev) => setGreetingInput(
        ev.targetValue
        
        );

    return (
        <div >
            <Header style = {headerStyles}> {greeting}</Header>



            <Input
                label="Input Text"
                placeholder="Placeholder text"
                type="text"
                style = {inputStyles}
                value = {greeting}
                onChange={ev => setGreetingInput(ev.target.value)}
            />
        
            <Input
            label="Input Text"
            placeholder="Placeholder text"
            type="text"
            style = {inputStyles2}
            value = {greeting}
            onChange={ _handleInputs}
            />
        </div>
    )


}

 export default HeadlineHooks2;