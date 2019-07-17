import React from 'react'
import { withRouter } from 'react-router-dom'

import './menu-item.styles.scss'

const MenuItem = ({title, subtitle, imageUrl, size, history, match}) => (
  <div
    onClick={() => history.push(`${match.url}${title}`)}
    className={`${size} menu-item`}
  >
    <div
      className="background"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">{subtitle}</span>
    </div>
  </div>
)

export default withRouter(MenuItem)