import React from 'react';

function Notification({ hasUnreadMessages }) {
  return (
    <div>
      <h3>Inbox</h3>
      {hasUnreadMessages && <p>You have unread messages!</p>}
    </div>
  );
}

export default Notification;
