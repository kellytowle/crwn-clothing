import React from 'react'
import './directory.styles.scss'
import sections from '../../data/directory.data'

import MenuItem from '../menu-item/menu-item.component'

class Directory extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      sections: sections
    }
  }

  render () {
    return (
      <div className='directory-menu'>
        {
          this.state.sections.map(({title, subtitle, imageUrl, id, size}) => (
            <MenuItem
              key={id}
              title={title}
              subtitle={subtitle}
              imageUrl={imageUrl}
              size={size}
            />
          ))
        }
      </div>
    )
  }
}

export default Directory
