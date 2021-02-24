import styles from '../styles/components/Profile.module.css';

const Profile = () => (
  <div className={styles.profileContainer}>
    <img src="https://github.com/edilson-rodrigues.png" alt="profile-github" />
    <div>
      <strong>Edilson Rodrigues</strong>
      <p>Level 1</p>
    </div>
  </div>
);

export default Profile;
