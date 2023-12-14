import { Props } from 'payload/components/fields/Text';
import { Label, useField } from 'payload/components/forms';
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
import './index.scss';

const baseClass = 'custom-image-preview';
const CustomTextField: React.FC<Props> = ({ path, label, required }) => {
  const { value, setValue } = useField<Props>({ path });

  const imageUrl = value as unknown as string;

  return (
    <div className={`${baseClass}__container`}>
      <Label htmlFor={path} label={label} required={required} />
      <div className={`${baseClass}__image_container`}>
        <img className={`${baseClass}__image`} src={imageUrl}></img>
      </div>
      <input
        className={`${baseClass}__input`}
        onChange={(e) => setValue(e.target.value)}
        value={imageUrl}
        type="text"
      />
    </div>
  );
};

export default CustomTextField;
