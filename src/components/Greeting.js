import React from 'react';

export function GreetingIf({ isLoggedIn }) {
  if (isLoggedIn) {
    return <p>[If] Welcome back!</p>;
  }
  return <p>[If] Please log in.</p>;
}

export function GreetingTernary({ isLoggedIn }) {
  return <p>[Ternary] {isLoggedIn ? 'Welcome back!' : 'Please log in.'}</p>;
}

export function NotificationAnd({ hasUnreadMessages }) {
  return (
    <div>
      <p>[AND] Inbox</p>
      {hasUnreadMessages && <p>You have unread messages!</p>}
    </div>
  );
}
