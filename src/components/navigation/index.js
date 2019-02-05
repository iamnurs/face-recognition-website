import React from "react";

const Navigation = () => {
  return (
    <nav style={styles.container}>
      <p className="f3 link dim black underline pa3 pointer">Sign Out</p>
    </nav>
  );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
}

export default Navigation
