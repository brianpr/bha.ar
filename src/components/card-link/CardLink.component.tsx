import React from 'react';

export default function CardLink({ title, description, link, labelButton }) {
  return (
    <div className="card-demo">
      <div className="card">
        <div className="card__header">
          <h3>{title}</h3>
        </div>
        <div className="card__body">
          <p>
            {description}
          </p>
        </div>
        <div className="card__footer">
          <a
            className="button button--success button--block"
            target="_blank"
            href={link}
          >
            {labelButton}
          </a>
        </div>
      </div>
    </div>
  );
}
