import React, {Fragment , useState, useEffects} from 'react';
import {Card, Container, Header} from 'semantic-ui-react';
import {Input} from 'react-rainbow-components';

const HeadlineHooks = () => {

    const [greeting, setGreetingInput] = useState('Default State Greeting')    
    const alignStyles = {width: '50%', margin: '5px auto', padding: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}                    
    const inputStyles = {border: '1px solid deeppink', color: 'dodgerblue', ...alignStyles}
    const headerStyles = {fontWeight: 'heavy', color: 'darkred', ...alignStyles}

    return (
        <div >
            <Header style = {headerStyles}> {greeting}</Header>

            <Input
                label="Input Text"
                placeholder="Placeholder text"
                type="text"
                style = {inputStyles}
                value = {greeting}
                onChange={ev => setGreetingInput(ev.taret.value)}
            />
        
        
        </div>
    )


}

export default HeadlineHooks;