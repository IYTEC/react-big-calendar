import PropTypes from 'prop-types'
import React from 'react'
import clsx from 'clsx'
import { navigate } from './utils/constants'

class Toolbar extends React.Component {
  render() {
    let {
      localizer: { messages },
      label,
    } = this.props

    return (
      <div className="rbc-toolbar">
        <div className="rbc-btn-group">
          <div
            className="rbc-btn-item"
            onClick={this.navigate.bind(null, navigate.TODAY)}
          >
            {messages.today}
          </div>
          <div
            className="rbc-btn-item"
            onClick={this.navigate.bind(null, navigate.PREVIOUS)}
          >
            {messages.previous}
          </div>
          <div
            className="rbc-btn-item"
            onClick={this.navigate.bind(null, navigate.NEXT)}
          >
            {messages.next}
          </div>
        </div>

        <span className="rbc-toolbar-label">{label}</span>

        {/* <span className="rbc-btn-group">{this.viewNamesGroup(messages)}</span> */}
        <div className="rbc-btn-group">{this.viewNamesGroup(messages)}</div>
      </div>
    )
  }

  navigate = action => {
    this.props.onNavigate(action)
  }

  view = view => {
    this.props.onView(view)
  }

  viewNamesGroup(messages) {
    let viewNames = this.props.views
    const view = this.props.view

    if (viewNames.length > 1) {
      // return viewNames.map(name => (
      //   <button
      //     type="button"
      //     key={name}
      //     className={clsx({ 'rbc-active': view === name })}
      //     onClick={this.view.bind(null, name)}
      //   >
      //     {messages[name]}
      //   </button>
      // ))
      return viewNames.map(name => (
        <div
          type="button"
          key={name}
          className={clsx('rbc-btn-item', { 'rbc-btn-active': view === name })}
          onClick={this.view.bind(null, name)}
        >
          {messages[name]}
        </div>
      ))
    }
  }
}

Toolbar.propTypes = {
  view: PropTypes.string.isRequired,
  views: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.node.isRequired,
  localizer: PropTypes.object,
  onNavigate: PropTypes.func.isRequired,
  onView: PropTypes.func.isRequired,
}

export default Toolbar
