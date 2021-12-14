import React from 'react';
import "../App.css";

const MemberBox = (props) => {
    const { details } = props;

    if (!details) {
        return <h3>Working fetching your friend&apos;s details...</h3>
      }

  return (
    <div className='member-box'>
        <b>{details.memberName}</b><br />
        Email: {details.email}<br />
        Role: {details.role}
    </div>
  );
};

export default MemberBox;
