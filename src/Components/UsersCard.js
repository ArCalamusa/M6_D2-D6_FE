import Card from 'react-bootstrap/Card';
import React from 'react'

export const UsersCard = ({ userName, email }) => {
    return (
        <Card border="primary" style={{ width: '17rem' }}>
            <Card.Header>Utente</Card.Header>
            <Card.Body>
                <Card.Title>{userName}</Card.Title>
                <Card.Title>{email}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default UsersCard
