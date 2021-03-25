import { mdiMenuLeft, mdiMenuRight } from '@mdi/js'

import Icon from '@mdi/react'
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
        <div className="rbc-filtering">
          <div className="group-select-wrapper mr-1">
            <div className="group-select-title">Status</div>
            <select
              className="group-select"
              // onChange={e => console.log(e.target.value)}
            >
              <option className="group-select-item" value="all">
                All
              </option>
              <option className="group-select-item" value="1">
                Draft
              </option>
              <option className="group-select-item" value="3">
                Published
              </option>
              <option className="group-select-item" value="2">
                Repeating
              </option>
            </select>
          </div>

          <div className="group-select-wrapper">
            <div className="group-select-title">Sort</div>
            <select
              className="group-select"
              // onChange={e => console.log(e.target.value)}
            >
              <option value="all">None</option>
              <option value="all">Employee</option>
              <option value="1">Groups</option>
              <option value="3">Jobs</option>
            </select>
          </div>
        </div>

        {/* <div className="mar-r-2">
          <div>Employees</div>
          <select onChange={(e) => console.log(e.target.value)}>
            <option value="all">All</option>
            <option value="1">Activated</option>
            <option value="2">Pending</option>
            <option value="3">Deactivated</option>
          </select>
        </div>

        <div className="mar-r-2">
          <div>Groups</div>
          <select onChange={(e) => console.log(e.target.value)}>
            <option value="1">Select Group</option>
          </select>
        </div>

        <div className="mar-r-2">
          <div>Jobs</div>
          <select onChange={(e) => console.log(e.target.value)}>
            <option value="all">All</option>
            <option value="1">Activated</option>
            <option value="2">Pending</option>
            <option value="3">Deactivated</option>
          </select>
        </div> */}

        {/* <div className="rbc-btn-group">
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
        </div> */}
        <div className="rbc-labelncontrol">
          <span className="rbc-toolbar-label">{label}</span>

          <Icon
            style={{ opacity: '0.5' }}
            path={mdiMenuLeft}
            onClick={this.navigate.bind(null, navigate.NEXT)}
            title="Next"
            size={2}
            color="#5A687A"
          />
          {/* <span onClick={this.navigate.bind(null, navigate.TODAY)}>Today</span> */}
          <Icon
            style={{ opacity: '0.5' }}
            path={mdiMenuRight}
            onClick={this.navigate.bind(null, navigate.PREVIOUS)}
            title="Previous"
            size={2}
            color="#5A687A"
          />
        </div>

        <div className="rbc-toolbar-nav-wrapper">
          <div className="rbc-toolbar-today-btn">
            <span onClick={this.navigate.bind(null, navigate.TODAY)}>
              Today
            </span>
          </div>
          <div className="rbc-btn-group">{this.viewNamesGroup(messages)}</div>
        </div>
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
