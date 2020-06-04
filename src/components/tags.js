import React from 'react'

const getColor = (tag) => {
    switch (tag) {
        case 'development':
            return {
                background: '#5252ff',
                text: '#FFFFFF'
            }
            break;
        case 'cloud':
            return {
                background: '#e68b1a',
                text: '#FFFFFF'
            }
            break;
        default:
            return {
                background: '#5252ff',
                text: '#FFFFFF'
            }
            break;
    }
    
}

const TagsList = ({tags}) => 
    <div style={{
        display: 'flex',
        fontFamily: 'Montserrat,sans-serif',
        fontWeight: '600'
    }}>
        {tags.map((tag, index) => {
            const color = getColor(tag)
            return (<div style={{
                background: color.background,
                color: color.text,
                padding: '0 13px',
                fontSize: '13px',
                margin: index > 0 ? '10px 0 10px 1%' : '10px 0',
                borderRadius: '6px'

            }}>
                {tag}
            </div>)
        })}
            
    </div>


export default TagsList

