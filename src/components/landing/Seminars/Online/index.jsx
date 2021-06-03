import React from 'react';
import { Link } from 'gatsby';
import { Container, Card } from 'components/common';
import { Wrapper, Content, Button, DisplayHandler } from './styles';

export const Online = (props) => {
    return (
        <Wrapper as={Container} id="projects">
            <Card pad='1rem 1rem 0 1rem'>
                <Content>
                    <DisplayHandler >
                        <img src={props.data.img} />
                        <div style={{ paddingLeft: '3rem' }}>
                            <h4>{props.data.name}</h4>
                            <p>期間 : {props.data.long}</p>
                            <p>{props.data.description}</p>
                        </div>
                    </DisplayHandler>
                </Content>
            </Card>
        </Wrapper >
    );
}