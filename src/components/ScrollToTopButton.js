// ScrollToTopButton.js
import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const checkScrollTop = () => {
            if (!showScrollTop && window.pageYOffset > 200) {
                setShowScrollTop(true);
            } else if (showScrollTop && window.pageYOffset <= 200) {
                setShowScrollTop(false);
            }
        };

        window.addEventListener('scroll', checkScrollTop);
        
        // Cleanup the event listener
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, [showScrollTop]);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        showScrollTop && (
            <div onClick={scrollTop} style={styles.scrollTop}>
                ↑
            </div>
        )
    );
};

const styles = {
    scrollTop: {
        position: 'fixed',
        bottom: '2%',
        right: '2%',
        cursor: 'pointer',
        background: '#3b3b3b88',
        padding: '10px 15px',
        borderRadius: '50%',
        zIndex: 1000,
    },
};

export default ScrollToTopButton;
