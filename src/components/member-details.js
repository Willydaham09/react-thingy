import React from 'react'

import PropTypes from 'prop-types'

import './member-details.css'

const MemberDetails = (props) => {
  return (
    <div className="member-details-container">
      <img
        alt={props.image_alt1}
        src={props.image_src2}
        className="member-details-image"
      />
      <h1 className="member-details-text textXL">{props.heading1}</h1>
      <h1 className="member-details-text1 textSM">{props.heading11}</h1>
    </div>
  )
}

MemberDetails.defaultProps = {
  heading11: 'Owner',
  image_alt1: 'image',
  image_src2: '/playground_assets/img_0423-modified-200h.png',
  heading1: 'AwesomePeep7',
  image_src:
    'https://demos.creative-tim.com/notus-pro-react/static/media/team-1-800x800.fa5a7ac2.jpg',
}

MemberDetails.propTypes = {
  heading11: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src2: PropTypes.string,
  heading1: PropTypes.string,
  image_src: PropTypes.string,
}

export default MemberDetails
