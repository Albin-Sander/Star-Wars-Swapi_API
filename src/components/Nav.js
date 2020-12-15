import React from 'react'
import { Container, Menu} from 'semantic-ui-react';
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <Menu inverted>
            <Container>
                <Link to='/'>
                <Menu.Item name='Star Wars Api'/>
                </Link>
                <Link to='/characters'>
                <Menu.Item name='Characters'/>
                </Link>
                <Link to='/planets'>
                <Menu.Item name='Planets'/>
                </Link>
            
            
            </Container>
        </Menu>
    )
}
