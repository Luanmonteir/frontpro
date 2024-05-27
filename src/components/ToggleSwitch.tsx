import React from 'react';
import styles from './ToggleSwitch.module.css';

interface ToggleSwitchProps {
  onChange: (checked: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <label className={styles.switch}>
      <input type="checkbox" onChange={handleChange} />
      <span className={`${styles.slider} ${styles.round}`} />
    </label>
  );
};

export default ToggleSwitch;
