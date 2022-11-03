import { CSSProperties } from 'react';

export const itemWrapperStyle: CSSProperties = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  minWidth: 0,
  wordWrap: 'break-word',
  backgroundClip: 'border-box',
  border: '2px solid rgba(0,0,0,.125)',
  borderRadius: '15px',
  margin: '20px',
  cursor: 'pointer'
};

export const listItemFooterStyle: CSSProperties = {
  padding: '0.75rem 1.25rem',
  background: 'rgba(0,0,0,.03)',
  borderTop: '1px solid rgba(0,0,0,.125)',
  display: 'flex',
  justifyContent: 'space-between',
  borderBottomLeftRadius: '15px',
  borderBottomRightRadius: '15px'
};
